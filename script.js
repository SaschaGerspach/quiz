let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was bedeutet das HTML Tag &lt;a&gt;?",
    answer_1: "Text Fett",
    answer_2: "Container",
    answer_3: "Ein Link",
    answer_4: "Kursiv",
    right_answer: 3,
  },
  {
    question: "Wie bindet man eine Website in eine Website ein?",
    answer_1: "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
    answer_2: "&lt;iframe&gt;",
    answer_3: "&lt;frame&gt;",
    answer_4: "&lt;frameset&gt;",
    right_answer: 2,
  },
  {
    question: "Welches Attribut kann man nicht für Textarea verwenden?",
    answer_1: "readonly",
    answer_2: "max",
    answer_3: "from",
    answer_4: "spellcheck",
    right_answer: 1,
  },
  {
    question: "Wie wählst du alle Elemente vom Typ &lt;a&gut; mit dem Attribut title aus?",
    answer_1: "a[title]{...}",
    answer_2: "a > title {...}",
    answer_3: "a.tittle {...}",
    answer_4: "a=title {...}",
    right_answer: 1,
  },
  {
    question: "Wie definiert man in JavaScript eine Variable?",
    answer_1: "let 100 = rate;",
    answer_2: "100 = let rate;",
    answer_3: "rate = 100;",
    answer_4: "let rate = 100;",
    right_answer: 4,
  },
];

let rightQuestions = 0;
let currentQuestion = 0;

function init() {
  document.getElementById("allQuestions").innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none;";
    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    document.getElementById("amountOfRightQuestions").innerHTML = rightQuestions;
  } else {
    let question = questions[currentQuestion];
    document.getElementById("questionNumber").innerHTML = currentQuestion + 1;
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
  }
  document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  document.getElementById("nextButton").disabled = true;
  resetButtons();
}

function resetButtons() {
  for (let i = 1; i < 5; i++) {
    document.getElementById(`answer_${i}`).parentNode.classList.remove("bg-danger");
    document.getElementById(`answer_${i}`).parentNode.classList.remove("bg-success");
  }
}

function restartGame() {
  document.getElementById("endScreen").style = "display: none;";
  document.getElementById("questionBody").style = "";
  currentQuestion = 0;
  rightQuestions = 0;
  init();
}
