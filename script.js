const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const finishBtn = document.getElementById("finish-btn");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");
const questionGrid = document.getElementById("question-grid");

let currentQuestionIndex = 0;
let quizData = [];
// Lưu trữ câu trả lời: object { selected: number, isCorrect: boolean } theo index
let userAnswers = {};

async function loadQuizData() {
    try {
        const response = await fetch("data.json");
        quizData = await response.json();
        initQuiz();
    } catch (error) {
        questionText.innerText =
            "Lỗi tải dữ liệu. Bạn nhớ mở bằng Live Server nhé.";
        console.error("Error loading JSON:", error);
    }
}

function initQuiz() {
    // Phục hồi dữ liệu từ LocalStorage
    const savedAnswers = localStorage.getItem("tthcm_answers");
    const savedIndex = localStorage.getItem("tthcm_index");

    if (savedAnswers) userAnswers = JSON.parse(savedAnswers);
    if (savedIndex) currentQuestionIndex = parseInt(savedIndex);

    renderNavGrid();
    showQuestion();
}

function showQuestion() {
    quizContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    resetState();

    const currentQuestion = quizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    const answeredData = userAnswers[currentQuestionIndex]; // Kiểm tra xem câu này làm chưa

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        button.dataset.index = index;

        // Nếu câu hỏi đã được trả lời trước đó
        if (answeredData) {
            button.disabled = true;
            if (index === currentQuestion.answer) {
                button.classList.add("correct"); // Luôn bôi xanh đáp án đúng
            } else if (
                index === answeredData.selected &&
                !answeredData.isCorrect
            ) {
                button.classList.add("wrong"); // Bôi đỏ nếu chọn sai
            }
        } else {
            button.addEventListener("click", selectAnswer);
        }

        optionsContainer.appendChild(button);
    });

    updateNavigationButtons();
    updateGridActiveState();
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const selectedIndex = parseInt(selectedBtn.dataset.index);
    const correctIndex = quizData[currentQuestionIndex].answer;
    const isCorrect = selectedIndex === correctIndex;

    // Lưu vào bộ nhớ tạm
    userAnswers[currentQuestionIndex] = {
        selected: selectedIndex,
        isCorrect: isCorrect,
    };
    saveProgress();

    if (isCorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("wrong");
        optionsContainer.children[correctIndex].classList.add("correct");
    }

    // Vô hiệu hóa các nút
    Array.from(optionsContainer.children).forEach(
        (button) => (button.disabled = true),
    );

    updateNavigationButtons();
    renderNavGrid(); // Cập nhật lại màu sắc trong lưới
}

function updateNavigationButtons() {
    // Nút Previous
    if (currentQuestionIndex > 0) {
        prevBtn.classList.remove("hidden");
    } else {
        prevBtn.classList.add("hidden");
    }

    // Nút Next / Finish
    nextBtn.classList.add("hidden");
    finishBtn.classList.add("hidden");

    if (currentQuestionIndex < quizData.length - 1) {
        // Chỉ hiện Next khi đã trả lời xong câu hiện tại
        if (userAnswers[currentQuestionIndex]) {
            nextBtn.classList.remove("hidden");
        }
    } else {
        // Câu cuối cùng -> Hiện xem kết quả
        if (userAnswers[currentQuestionIndex]) {
            finishBtn.classList.remove("hidden");
        }
    }
}

function resetState() {
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

// Chuyển câu hỏi
prevBtn.addEventListener("click", () => {
    currentQuestionIndex--;
    saveProgress();
    showQuestion();
});

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    saveProgress();
    showQuestion();
});

finishBtn.addEventListener("click", showResult);

function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    // Tính điểm
    let score = 0;
    let answeredCount = Object.keys(userAnswers).length;
    for (let key in userAnswers) {
        if (userAnswers[key].isCorrect) score++;
    }

    scoreText.innerHTML = `Bạn đã trả lời đúng <strong>${score}</strong> / ${quizData.length} câu.<br><small>(Đã làm ${answeredCount}/${quizData.length} câu)</small>`;
}

document.getElementById("review-btn").addEventListener("click", () => {
    currentQuestionIndex = 0;
    showQuestion();
});

// Xử lý Lưới điều hướng (Grid)
function renderNavGrid() {
    questionGrid.innerHTML = "";
    quizData.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.innerText = index + 1;
        btn.classList.add("grid-btn");

        // Tô màu theo kết quả
        const ans = userAnswers[index];
        if (ans) {
            if (ans.isCorrect) btn.classList.add("answered-correct");
            else btn.classList.add("answered-wrong");
        }

        btn.addEventListener("click", () => {
            currentQuestionIndex = index;
            saveProgress();
            showQuestion();
        });

        questionGrid.appendChild(btn);
    });
    updateGridActiveState();
}

function updateGridActiveState() {
    const buttons = questionGrid.children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        if (i === currentQuestionIndex) {
            buttons[i].classList.add("active");
            // Cuộn tự động tới câu đó trong lưới
            buttons[i].scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }
}

// Lưu / Xóa dữ liệu
function saveProgress() {
    localStorage.setItem("tthcm_answers", JSON.stringify(userAnswers));
    localStorage.setItem("tthcm_index", currentQuestionIndex.toString());
}

function resetAllData() {
    if (
        confirm(
            "Bạn có chắc chắn muốn xóa toàn bộ tiến độ làm bài không? Hành động này không thể hoàn tác.",
        )
    ) {
        localStorage.removeItem("tthcm_answers");
        localStorage.removeItem("tthcm_index");
        userAnswers = {};
        currentQuestionIndex = 0;
        renderNavGrid();
        showQuestion();
    }
}

document
    .getElementById("reset-all-btn")
    .addEventListener("click", resetAllData);
document.getElementById("restart-btn").addEventListener("click", resetAllData);

// Bắt đầu tải dữ liệu
loadQuizData();
