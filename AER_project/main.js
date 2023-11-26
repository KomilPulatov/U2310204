const filePath = "main.json";
let jsonFile = {};
let question_id = 0;
fetch(filePath)
  .then((response) => response.json())
  .then((json) => {
    jsonFile = json;
    startGame();
  });

function startGame() {
  let questions = jsonFile.questions;
  let question = questions[question_id];
  let questionText = question.question;
  let answers = question.answers;
  let questionElement = document.getElementById("question");
  questionElement.innerHTML = questionText;
  for (let i = 0; i < answers.length; i++) {
    let answerElement = document.getElementById(`answer${i}`);
    answerElement.innerHTML = answers[i].text;
  }
  question_id++;
  if (question_id >= questions.length) {
    let buttonElement = document.getElementById("NEXT");
    buttonElement.disabled = true;
  }
}
