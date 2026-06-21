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

def parse_standard(filepath, default_title):
    if not os.path.exists(filepath):
        return [], []

    content = read_file_safely(filepath)
    lines = content.split('\n')
    
    exams, unconverted = [], []
    current_exam_title = default_title
    current_exam_id = default_title.lower().replace(" ", "_").replace(".md", "")
    questions, current_q_text, current_options, current_answers = [], [], [], []
    current_q_num = None
    
    q_pattern = re.compile(r'^(?:Câu|Question)\s+(\d+)[:\s]*(.*)', re.IGNORECASE)
    opt_pattern = re.compile(r'^\s*([_*]?)\s*[A-Z][\.\)]\s*(.*)$', re.IGNORECASE)
    exam_pattern = re.compile(r'^##\s+(.+)$')

    def save_question():
        if current_q_num is not None and current_q_text:
            q_text = f"Câu {current_q_num}: " + "\n".join(current_q_text)
            
            cleaned_options = []
            for opt in current_options:
                opt = opt.strip()
                if opt.endswith('*') or opt.endswith('_'):
                    opt = opt[:-1].strip()
                cleaned_options.append(opt)
            
            is_valid = True
            error_reasons = []
            if len(cleaned_options) < 2:
                is_valid = False
                error_reasons.append("Chưa nhận diện được phương án (ít hơn 2 phương án)")
            if len(current_answers) == 0:
                is_valid = False
                error_reasons.append("Không tìm thấy đáp án đúng (Thiếu dấu * hoặc _)")
            
            if not is_valid:
                short_q = q_text[:80].replace('\n', ' ') + "..." if len(q_text) > 80 else q_text.replace('\n', ' ')
                unconverted.append({
                    "exam": current_exam_title,
                    "question": short_q,
                    "reasons": error_reasons
                })
            
            ans = current_answers[0] if len(current_answers) == 1 else current_answers.copy() if len(current_answers) > 1 else -1
            questions.append({"question": q_text, "options": cleaned_options, "answer": ans})

    for line in lines:
        line = line.strip()
        if not line or line.lower().startswith('phần') or line.startswith('# De Devops'): continue
            
        exam_match = exam_pattern.match(line)
        if exam_match:
            save_question()
            if questions:
                exams.append({"id": current_exam_id, "title": current_exam_title, "questions": questions.copy()})
            current_exam_title = exam_match.group(1).strip()
            current_exam_id = current_exam_title.lower().replace(" ", "_")
            questions, current_q_num, current_q_text, current_options, current_answers = [], None, [], [], []
            continue

        q_match = q_pattern.match(line)
        if q_match:
            save_question() 
            current_q_num = q_match.group(1)
            current_q_text = [q_match.group(2).strip()] if q_match.group(2).strip() else []
            current_options, current_answers = [], []
            continue
        
        if current_q_num is not None:
            opt_match = opt_pattern.match(line)
            if opt_match:
                opt_text = opt_match.group(2).strip()
                current_options.append(opt_text)
                if bool(opt_match.group(1)): current_answers.append(len(current_options) - 1)
            else:
                if len(current_options) == 0: 
                    current_q_text.append(line)
                else:
                    current_options[-1] += "\n" + line

    save_question()
    if questions: exams.append({"id": current_exam_id, "title": current_exam_title, "questions": questions})
    return exams, unconverted

def parse_ccna(filepath, base_title):
    if not os.path.exists(filepath):
        return [], [], 0

    content = read_file_safely(filepath)
    lines = content.split('\n')
    
    exams, unconverted = [], []
    questions = []
    current_q_num_str, current_part_num = None, None
    current_q_text, current_options, current_answers = [], [], []
    images_found_count = 0
    
    part_pattern = re.compile(r'^##\s+Part\s+(\d+)', re.IGNORECASE)
    q_pattern = re.compile(r'^Question\s+((\d+)\.(\d+))[:\s]*(.*)', re.IGNORECASE)
    opt_pattern = re.compile(r'^\s*([_*]?)\s*[A-Z][\.\)]\s*(.*)$', re.IGNORECASE)
    
    valid_exts = ['.png', '.PNG', '.jpg', '.JPG', '.jpeg']

    def check_and_get_image(base_path):
        for ext in valid_exts:
            if os.path.exists(base_path + ext):
                return base_path + ext
        return None

    current_exam_title = base_title
    current_exam_id = "ccna_full"

    def save_question():
        nonlocal images_found_count
        if current_q_num_str is not None and current_q_text:
            raw_q_text = "\n".join(current_q_text)
            raw_q_text = re.sub(r'\(\s*choose(\s+(two|2))?\s*\)', '(CHOOSE TWO)', raw_q_text, flags=re.IGNORECASE)
            
            q_text = f"Câu {current_q_num_str}:\n{raw_q_text}"
            ans = current_answers[0] if len(current_answers) == 1 else current_answers.copy() if len(current_answers) > 1 else -1
            q_obj = {"question": q_text, "options": [], "answer": ans}
            
            base_img_path = f"media/ccna/part-{current_part_num}/{current_q_num_str}"
            
            # KIỂM TRA ĐỘNG (Dynamic Check) cho ảnh A và B
            imgA = check_and_get_image(f"{base_img_path}A")
            imgB = check_and_get_image(f"{base_img_path}B")
            
            if imgA or imgB:
                imgs = []
                if imgA: imgs.append(imgA)
                if imgB: imgs.append(imgB)
                q_obj["image"] = imgs
                images_found_count += len(imgs)
            else:
                img_path = check_and_get_image(base_img_path)
                if img_path:
                    q_obj["image"] = [img_path]
                    images_found_count += 1
                elif "refer to the exhibit" in raw_q_text.lower() or "which interface condition" in raw_q_text.lower():
                    q_obj["image"] = [f"{base_img_path}.png"]
            
            cleaned_options = []
            explanations = {}
            is_interface_condition = "which interface condition" in raw_q_text.lower()
            
            for i, opt in enumerate(current_options):
                opt = opt.strip()
                if opt.endswith('*') or opt.endswith('_'):
                    opt = opt[:-1].strip()
                    
                m = re.match(r'^(.*?)\s*(\([^)]+\))$', opt, flags=re.DOTALL)
                if m and is_interface_condition:
                    cleaned_options.append(m.group(1).strip())
                    explanations[str(i)] = m.group(2).strip()
                else:
                    cleaned_options.append(opt)
                    
            is_valid = True
            error_reasons = []
            if len(cleaned_options) < 2:
                is_valid = False
                error_reasons.append("Chưa nhận diện được phương án (ít hơn 2 phương án)")
            if len(current_answers) == 0:
                is_valid = False
                error_reasons.append("Không tìm thấy đáp án đúng (Thiếu dấu * hoặc _)")
            
            if not is_valid:
                short_q = q_text[:80].replace('\n', ' ') + "..." if len(q_text) > 80 else q_text.replace('\n', ' ')
                unconverted.append({
                    "exam": current_exam_title,
                    "question": short_q,
                    "reasons": error_reasons
                })

            q_obj["options"] = cleaned_options
            if explanations: q_obj["explanations"] = explanations
                
            questions.append(q_obj)

    for line in lines:
        line = line.strip()
        if not line: continue
        if line.startswith('0. Note:') or line.startswith('1. 8.19'): break

        part_match = part_pattern.match(line)
        if part_match:
            save_question()
            if questions:
                exams.append({"id": current_exam_id, "title": current_exam_title, "questions": questions.copy()})
                
            current_part_num = part_match.group(1)
            current_exam_title = f"{base_title} - Part {current_part_num}"
            current_exam_id = f"ccna_part_{current_part_num}"
            
            questions, current_q_num_str, current_q_text, current_options, current_answers = [], None, [], [], []
            continue
            
        q_match = q_pattern.match(line)
        if q_match:
            save_question()
            current_q_num_str = q_match.group(1)
            
            if not current_part_num: 
                current_part_num = q_match.group(2)
            
            if current_exam_id == "ccna_full" and current_part_num:
                current_exam_title = f"{base_title} - Part {current_part_num}"
                current_exam_id = f"ccna_part_{current_part_num}"
                
            current_q_text = [q_match.group(4).strip()] if q_match.group(4).strip() else []
            current_options, current_answers = [], []
            continue
            
        if current_q_num_str is not None:
            opt_match = opt_pattern.match(line)
            if opt_match:
                opt_text = opt_match.group(2).strip()
                current_options.append(opt_text)
                if bool(opt_match.group(1)): current_answers.append(len(current_options) - 1)
            else:
                if len(current_options) == 0: 
                    current_q_text.append(line)
                else:
                    current_options[-1] += "\n" + line

    save_question()
    if questions:
        exams.append({"id": current_exam_id, "title": current_exam_title, "questions": questions})
        
    return exams, unconverted, images_found_count

if __name__ == "__main__":
    all_exams, all_unconverted = [], []
    
    e1, u1 = parse_standard('200-cloud.md', '200 Câu Cloud Cơ Bản')
    e2, u2 = parse_standard('De-Devops.md', 'Đề DevOps (Chưa phân loại)')
    e3, u3, img_count = parse_ccna('CCNA.md', 'Đề CCNA (Có hình ảnh)')
    
    all_exams.extend(e1 + e2 + e3)
    all_unconverted.extend(u1 + u2 + u3)
    
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(all_exams, f, indent=4, ensure_ascii=False)
        
    total_q = sum(len(e['questions']) for e in all_exams)
    print(f"\nThành công! Đã tạo data.json gồm {len(all_exams)} đề thi và tổng cộng {total_q} câu hỏi.")
    print(f"Báo cáo CCNA: Đã tìm thấy và liên kết {img_count} file hình ảnh!")
    
    if all_unconverted:
        print(f"\n" + "="*80)
        print(f"CẢNH BÁO: Phát hiện {len(all_unconverted)} câu hỏi CÓ VẤN ĐỀ!")
        print("="*80)
        for item in all_unconverted:
            print(f"Đề thi : {item['exam']}")
            print(f"Nội dung: {item['question']}")
            print(f"Lỗi    : {', '.join(item['reasons'])}")
            print("-" * 80)