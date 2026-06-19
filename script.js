const examSelect = document.getElementById("exam-select");
const questionText = document.getElementById("question-text");
const imagesContainer = document.getElementById("question-images-container");
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
let userAnswers = {};

async function loadData() {
    try {
        const response = await fetch("data.json");
        allExams = await response.json();

        examSelect.innerHTML = '<option value="">-- Chọn đề thi --</option>';
        allExams.forEach((exam) => {
            const option = document.createElement("option");
            option.value = exam.id;
            option.textContent = `${exam.title} (${exam.questions.length} câu)`;
            examSelect.appendChild(option);
        });

        const savedData = localStorage.getItem("devops_quiz_answers");
        if (savedData) userAnswers = JSON.parse(savedData);

        examSelect.addEventListener("change", (e) => {
            if (e.target.value) switchExam(e.target.value);
            else {
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

    imagesContainer.innerHTML = "";
    if (qData.image && qData.image.length > 0) {
        qData.image.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.className = "question-image";
            imagesContainer.appendChild(img);
        });
        imagesContainer.classList.remove("hidden");
    } else {
        imagesContainer.classList.add("hidden");
    }

    const isMulti = Array.isArray(qData.answer);
    if (isMulti) {
        multiHint.innerText = `(Vui lòng chọn ${qData.answer.length} đáp án)`;
        multiHint.classList.remove("hidden");
    } else {
        multiHint.classList.add("hidden");
    }

    const answeredData = userAnswers[currentExam.id][currentQuestionIndex];

    qData.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.dataset.index = index;

        const textSpan = document.createElement("span");
        textSpan.innerText = option;
        btn.appendChild(textSpan);

        if (qData.explanations && qData.explanations[index]) {
            const expSpan = document.createElement("span");
            expSpan.className = "explanation hidden";
            expSpan.innerText = qData.explanations[index];
            btn.appendChild(expSpan);
        }

        if (answeredData) {
            btn.disabled = true;

            const expSpan = btn.querySelector(".explanation");
            if (expSpan) expSpan.classList.remove("hidden");

            if (isMulti) {
                if (qData.answer.includes(index)) btn.classList.add("correct");
                if (
                    answeredData.selected.includes(index) &&
                    !qData.answer.includes(index)
                )
                    btn.classList.add("wrong");
            } else {
                if (index === qData.answer) btn.classList.add("correct");
                if (
                    answeredData.selected.includes(index) &&
                    index !== qData.answer
                )
                    btn.classList.add("wrong");
            }
        } else {
            btn.addEventListener("click", () => toggleOption(btn, isMulti));
        }
        optionsContainer.appendChild(btn);
    });

    updateNavigationButtons();
    updateGridActiveState();
    localStorage.setItem(`last_index_${currentExam.id}`, currentQuestionIndex);
}

function toggleOption(btn, isMulti) {
    if (!isMulti)
        Array.from(optionsContainer.children).forEach((b) =>
            b.classList.remove("selected"),
        );
    btn.classList.toggle("selected");
    updateNavigationButtons();
}

function checkAnswer() {
    const qData = currentExam.questions[currentQuestionIndex];
    const isMulti = Array.isArray(qData.answer);
    const selectedBtns = Array.from(
        optionsContainer.querySelectorAll(".selected"),
    );

    if (selectedBtns.length === 0) return;
    const selectedIndices = selectedBtns.map((b) => parseInt(b.dataset.index));

    let isCorrect = false;
    if (isMulti) {
        isCorrect =
            selectedIndices.length === qData.answer.length &&
            selectedIndices.every((val) => qData.answer.includes(val));
    } else {
        isCorrect = selectedIndices[0] === qData.answer;
    }

    userAnswers[currentExam.id][currentQuestionIndex] = {
        selected: selectedIndices,
        isCorrect: isCorrect,
    };

    saveProgress();
    showQuestion();
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

function renderNavGrid() {
    questionGrid.innerHTML = "";
    const examAnswers = userAnswers[currentExam.id] || {};

    currentExam.questions.forEach((_, index) => {
        const btn = document.createElement("button");
        btn.innerText = index + 1;
        btn.classList.add("grid-btn");

        if (examAnswers[index]) {
            btn.classList.add(
                examAnswers[index].isCorrect
                    ? "answered-correct"
                    : "answered-wrong",
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

toggleGridBtn.addEventListener("click", () => {
    gridWrapper.classList.toggle("hidden");
    if (!gridWrapper.classList.contains("hidden")) {
        toggleGridBtn.innerText = "▲ Ẩn danh sách câu hỏi";
        updateGridActiveState();
    } else {
        toggleGridBtn.innerText = "▼ Hiển thị danh sách câu hỏi";
    }
});

function saveProgress() {
    localStorage.setItem("devops_quiz_answers", JSON.stringify(userAnswers));
}

document.getElementById("restart-btn").addEventListener("click", () => {
    if (confirm("Reset toàn bộ kết quả của ĐỀ NÀY?")) {
        userAnswers[currentExam.id] = {};
        saveProgress();
        currentQuestionIndex = 0;
        showQuestion();
        renderNavGrid();
    }
});

document.getElementById("reset-all-btn").addEventListener("click", () => {
    if (confirm("Xóa TOÀN BỘ dữ liệu của mọi đề thi?")) {
        localStorage.removeItem("devops_quiz_answers");
        userAnswers = {};
        switchExam(currentExam.id);
    }
});

loadData();
