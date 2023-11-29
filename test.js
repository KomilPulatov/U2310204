// Sample quiz data in JSON format
const quizData = [
  {
    question: "What is 2+2?",
    choices: {
      A: "2",
      B: "3",
      C: "4",
    },
    correctAnswer: "C",
  },
  // Additional questions can be added
];

let currentQuestion = 0;
let score = 0;
let time = 10; // seconds

function displayQuestion() {
  const question = quizData[currentQuestion];
  document.getElementById("question").textContent = question.question;

  const choices = question.choices;
  for (const choice in choices) {
    document.getElementById(`choice${choice}`).textContent = choices[choice];
  }
}

function checkAnswer(choice) {
  const question = quizData[currentQuestion];
  if (choice === question.correctAnswer) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion();
    time = 10; // Reset the timer for the next question
    startTimer();
  } else {
    endGame();
  }
}

function startTimer() {
  const timerInterval = setInterval(() => {
    time--;
    document.getElementById("timer").textContent = `Timer: ${time}`;
    if (time <= 0) {
      clearInterval(timerInterval);
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        displayQuestion();
        time = 10; // Reset the timer for the next question
        startTimer();
      } else {
        endGame();
      }
    }
  }, 1000);
}

function endGame() {
  alert(`Quiz completed! You scored: ${score}`);
}

displayQuestion();
startTimer();
