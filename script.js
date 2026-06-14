const examSelect = document.getElementById("exam-select");
const questionText = document.getElementById("question-text");
const multiHint = document.getElementById("multi-answer-hint");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const finishBtn = document.getElementById("finish-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const navContainer = document.getElementById("nav-container");
const scoreText = document.getElementById("score-text");
const questionGrid = document.getElementById("question-grid");
const toggleGridBtn = document.getElementById("toggle-grid-btn");
const gridWrapper = document.getElementById("grid-wrapper");

let allExams = [];
let currentExam = null;
let currentQuestionIndex = 0;

// Cấu trúc lưu trữ: { "exam_id": { "question_index": { selected: [0, 2], isCorrect: false } } }
let userAnswers = {};

async function loadData() {
    try {
        const response = await fetch("data.json");
        allExams = await response.json();

        // Nạp dữ liệu vào Dropdown
        examSelect.innerHTML = '<option value="">-- Chọn đề thi --</option>';
        allExams.forEach((exam) => {
            const option = document.createElement("option");
            option.value = exam.id;
            option.textContent = `${exam.title} (${exam.questions.length} câu)`;
            examSelect.appendChild(option);
        });

        // Khôi phục bộ nhớ cục bộ
        const savedData = localStorage.getItem("devops_quiz_answers");
        if (savedData) userAnswers = JSON.parse(savedData);

        examSelect.addEventListener("change", (e) => {
            if (e.target.value) {
                switchExam(e.target.value);
            } else {
                quizContainer.classList.add("hidden");
                navContainer.classList.add("hidden");
            }
        });
    } catch (error) {
        examSelect.innerHTML =
            "<option>Lỗi tải dữ liệu. Hãy dùng Live Server.</option>";
        console.error("Error loading JSON:", error);
    }
}

function switchExam(examId) {
    currentExam = allExams.find((e) => e.id === examId);
    if (!userAnswers[examId]) userAnswers[examId] = {};

    // Tìm câu hỏi chưa làm tiếp theo, hoặc bắt đầu từ 0
    let lastIndex = parseInt(localStorage.getItem(`last_index_${examId}`)) || 0;
    currentQuestionIndex = lastIndex;

    quizContainer.classList.remove("hidden");
    navContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");

    renderNavGrid();
    showQuestion();
}

function showQuestion() {
    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    optionsContainer.innerHTML = "";

    const qData = currentExam.questions[currentQuestionIndex];
    questionText.innerText = qData.question;

    // Hiển thị gợi ý nếu có nhiều đáp án
    const correctCount = qData.answer.length;
    if (correctCount > 1) {
        multiHint.innerText = `(Vui lòng chọn ${correctCount} đáp án)`;
        multiHint.classList.remove("hidden");
    } else {
        multiHint.classList.add("hidden");
    }

    const answeredData = userAnswers[currentExam.id][currentQuestionIndex];

    qData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.dataset.index = index;

        if (answeredData) {
            button.disabled = true;
            // Hiển thị mọi đáp án đúng
            if (qData.answer.includes(index)) {
                button.classList.add("correct");
            }
            // Bôi đỏ nếu người dùng chọn sai
            if (
                answeredData.selected.includes(index) &&
                !qData.answer.includes(index)
            ) {
                button.classList.add("wrong");
            }
        } else {
            button.addEventListener("click", () =>
                toggleOption(button, correctCount > 1),
            );
        }
        optionsContainer.appendChild(button);
    });

    updateNavigationButtons();
    updateGridActiveState();

    // Lưu vị trí câu hỏi hiện tại cho đề này
    localStorage.setItem(`last_index_${currentExam.id}`, currentQuestionIndex);
}

function toggleOption(btn, isMulti) {
    if (!isMulti) {
        // Nếu chỉ chọn 1, bỏ chọn các nút khác
        Array.from(optionsContainer.children).forEach((b) =>
            b.classList.remove("selected"),
        );
    }
    btn.classList.toggle("selected");
    updateNavigationButtons();
}

function checkAnswer() {
    const selectedBtns = Array.from(
        optionsContainer.querySelectorAll(".selected"),
    );
    if (selectedBtns.length === 0) return;

    const selectedIndices = selectedBtns.map((b) => parseInt(b.dataset.index));
    const correctIndices = currentExam.questions[currentQuestionIndex].answer;

    // Kiểm tra đúng/sai (so sánh 2 mảng)
    const isCorrect =
        selectedIndices.length === correctIndices.length &&
        selectedIndices.every((val) => correctIndices.includes(val));

    userAnswers[currentExam.id][currentQuestionIndex] = {
        selected: selectedIndices,
        isCorrect: isCorrect,
    };
    saveProgress();
    showQuestion(); // Render lại để khóa nút và bôi màu
    renderNavGrid();
}

function updateNavigationButtons() {
    const answered = !!userAnswers[currentExam.id][currentQuestionIndex];
    const hasSelection =
        optionsContainer.querySelectorAll(".selected").length > 0;

    prevBtn.classList.toggle("hidden", currentQuestionIndex === 0);

    if (answered) {
        checkBtn.classList.add("hidden");
        if (currentQuestionIndex < currentExam.questions.length - 1) {
            nextBtn.classList.remove("hidden");
            finishBtn.classList.add("hidden");
        } else {
            nextBtn.classList.add("hidden");
            finishBtn.classList.remove("hidden");
        }
    } else {
        checkBtn.classList.remove("hidden");
        checkBtn.disabled = !hasSelection;
        checkBtn.style.opacity = hasSelection ? "1" : "0.5";
        nextBtn.classList.add("hidden");
        finishBtn.classList.add("hidden");
    }
}

checkBtn.addEventListener("click", checkAnswer);

prevBtn.addEventListener("click", () => {
    currentQuestionIndex--;
    showQuestion();
});

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});

finishBtn.addEventListener("click", showResult);

function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    let score = 0;
    const examAnswers = userAnswers[currentExam.id] || {};
    const answeredCount = Object.keys(examAnswers).length;

    for (let key in examAnswers) {
        if (examAnswers[key].isCorrect) score++;
    }

    scoreText.innerHTML = `Bạn đã đúng <strong>${score}</strong> / ${currentExam.questions.length} câu.<br><small>(Đã làm ${answeredCount} câu)</small>`;
}

document.getElementById("review-btn").addEventListener("click", () => {
    currentQuestionIndex = 0;
    showQuestion();
});

// Grid điều hướng
function renderNavGrid() {
    questionGrid.innerHTML = "";
    const examAnswers = userAnswers[currentExam.id] || {};

    currentExam.questions.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.innerText = index + 1;
        btn.classList.add("grid-btn");

        const ans = examAnswers[index];
        if (ans) {
            btn.classList.add(
                ans.isCorrect ? "answered-correct" : "answered-wrong",
            );
        }

        btn.addEventListener("click", () => {
            currentQuestionIndex = index;
            showQuestion();
        });

        questionGrid.appendChild(btn);
    });
    updateGridActiveState();
}

function updateGridActiveState() {
    Array.from(questionGrid.children).forEach((btn, i) => {
        btn.classList.toggle("active", i === currentQuestionIndex);
        if (
            i === currentQuestionIndex &&
            !gridWrapper.classList.contains("hidden")
        ) {
            btn.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    });
}

// Toggle ẩn/hiện lưới câu hỏi
toggleGridBtn.addEventListener("click", () => {
    gridWrapper.classList.toggle("hidden");
    if (!gridWrapper.classList.contains("hidden")) {
        toggleGridBtn.innerText = "▲ Ẩn danh sách câu hỏi";
        updateGridActiveState(); // Scroll tời câu hiện tại
    } else {
        toggleGridBtn.innerText = "▼ Hiển thị danh sách câu hỏi";
    }
});

// Lưu / Xóa dữ liệu
function saveProgress() {
    localStorage.setItem("devops_quiz_answers", JSON.stringify(userAnswers));
}

function resetCurrentExam() {
    if (confirm("Reset toàn bộ kết quả của ĐỀ NÀY?")) {
        userAnswers[currentExam.id] = {};
        saveProgress();
        currentQuestionIndex = 0;
        showQuestion();
        renderNavGrid();
    }
}

function resetAllData() {
    if (confirm("Xóa TOÀN BỘ dữ liệu của mọi đề thi?")) {
        localStorage.removeItem("devops_quiz_answers");
        userAnswers = {};
        switchExam(currentExam.id);
    }
}

document
    .getElementById("restart-btn")
    .addEventListener("click", resetCurrentExam);
document
    .getElementById("reset-all-btn")
    .addEventListener("click", resetAllData);

// Khởi chạy
loadData();
