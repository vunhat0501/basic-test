import re
import json
import os

def read_file_safely(filepath):
    encodings = ['utf-8', 'utf-8-sig', 'utf-16', 'windows-1258', 'cp1252']
    for enc in encodings:
        try:
            with open(filepath, 'r', encoding=enc) as f:
                return f.read()
        except UnicodeDecodeError:
            continue
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        return f.read()

def parse_markdown_to_exams(filepath, default_title):
    if not os.path.exists(filepath):
        print(f"Bỏ qua: Không tìm thấy file {filepath}")
        return [], []

    print(f"Đang xử lý file {filepath}...")
    content = read_file_safely(filepath)
    lines = content.split('\n')
    
    exams = []
    unconverted = [] # Danh sách lưu các câu hỏi bị lỗi
    
    current_exam_title = default_title
    current_exam_id = default_title.lower().replace(" ", "_").replace(".md", "")
    
    questions = []
    current_q_text = []
    current_options = []
    current_answers = [] 
    current_q_num = None
    
    # Regex bắt đầu câu hỏi
    q_pattern = re.compile(r'^(?:Câu|Question)\s+(\d+)[:\s]*', re.IGNORECASE)
    # Regex bắt đáp án: Hỗ trợ cả dấu * và dấu _ ở đầu (VD: *A., _B., A.)
    opt_pattern = re.compile(r'^\s*([_*]?)\s*[A-Z][\.\)]\s*(.*)$', re.IGNORECASE)
    # Regex bắt tiêu đề đề thi
    exam_pattern = re.compile(r'^##\s+(.+)$')

    def save_question():
        if current_q_num is not None and current_q_text:
            q_text = f"Câu {current_q_num}: " + " ".join(current_q_text)
            
            # --- KIỂM TRA LỖI (VALIDATION) ---
            is_valid = True
            error_reasons = []
            
            if len(current_options) < 2:
                is_valid = False
                error_reasons.append("Chưa nhận diện được phương án A,B,C,D (hoặc có ít hơn 2 phương án)")
            
            if len(current_answers) == 0:
                is_valid = False
                error_reasons.append("Không tìm thấy đáp án đúng (Thiếu dấu * hoặc _ ở đầu và cuối phương án)")
                
            if not is_valid:
                unconverted.append({
                    "exam": current_exam_title,
                    "question": q_text,
                    "reasons": error_reasons
                })
            # ---------------------------------
            
            questions.append({
                "question": q_text,
                "options": current_options.copy(),
                "answer": current_answers.copy()
            })

    for line in lines:
        line = line.strip()
        if not line or line.lower().startswith('phần') or line.startswith('# De Devops'):
            continue
            
        exam_match = exam_pattern.match(line)
        if exam_match:
            save_question()
            if questions:
                exams.append({
                    "id": current_exam_id,
                    "title": current_exam_title,
                    "questions": questions.copy()
                })
            
            current_exam_title = exam_match.group(1).strip()
            current_exam_id = current_exam_title.lower().replace(" ", "_")
            questions = []
            current_q_num = None
            current_q_text = []
            current_options = []
            current_answers = []
            continue

        q_match = q_pattern.match(line)
        if q_match:
            save_question() 
            
            current_q_num = q_match.group(1)
            current_q_text = []
            text_after_match = line[q_match.end():].strip()
            if text_after_match:
                current_q_text.append(text_after_match)
                
            current_options = []
            current_answers = []
            continue
        
        if current_q_num is not None:
            opt_match = opt_pattern.match(line)
            if opt_match:
                is_correct = bool(opt_match.group(1)) # Sẽ trả về True nếu có ký tự * hoặc _ ở đầu
                opt_text = opt_match.group(2).strip()
                
                # Cắt bỏ dấu * hoặc _ ở cuối câu (nếu có)
                if opt_text.endswith('*') or opt_text.endswith('_'):
                    opt_text = opt_text[:-1].strip()
                    
                current_options.append(opt_text)
                if is_correct:
                    current_answers.append(len(current_options) - 1)
            else:
                if len(current_options) == 0:
                    current_q_text.append(line)
                else:
                    current_options[-1] += " " + line

    save_question()
    if questions:
        exams.append({
            "id": current_exam_id,
            "title": current_exam_title,
            "questions": questions
        })

    return exams, unconverted

if __name__ == "__main__":
    all_exams = []
    all_unconverted = []
    
    # Xử lý file 200-cloud
    exams_1, unconv_1 = parse_markdown_to_exams('200-cloud.md', '200 Câu Cloud Cơ Bản')
    all_exams.extend(exams_1)
    all_unconverted.extend(unconv_1)
    
    # Xử lý file De-Devops
    exams_2, unconv_2 = parse_markdown_to_exams('De-Devops.md', 'Đề DevOps (Chưa phân loại)')
    all_exams.extend(exams_2)
    all_unconverted.extend(unconv_2)
    
    # Ghi ra JSON
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(all_exams, f, indent=4, ensure_ascii=False)
        
    total_q = sum(len(e['questions']) for e in all_exams)
    print(f"\nThành công! Đã tạo data.json gồm {len(all_exams)} đề thi và tổng cộng {total_q} câu hỏi.")
    
    # In ra danh sách lỗi nếu có
    if all_unconverted:
        print(f"\n" + "="*60)
        print(f"⚠️ CẢNH BÁO: Phát hiện {len(all_unconverted)} câu hỏi có vấn đề!")
        print("="*60)
        for item in all_unconverted:
            print(f"📌 Đề thi : {item['exam']}")
            short_q = item['question'][:80] + "..." if len(item['question']) > 80 else item['question']
            print(f"❓ Nội dung: {short_q}")
            print(f"❌ Lỗi    : {', '.join(item['reasons'])}")
            print("-" * 60)
        print("\n=> Vui lòng mở file Markdown và sửa lại format các câu trên để app hoạt động đúng nhất!")