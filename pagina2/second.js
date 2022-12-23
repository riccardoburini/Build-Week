const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let n = 0
let sum = 0
const container = document.querySelector('.container');

console.log(questions[0].correct_answer);
console.log(questions.length);
function addTask() {
  let questionTitle = document.createElement('p')
  questionTitle.innerHTML += `<h1>${questions[n].question}</h1>`
  document.querySelector(".container").appendChild(questionTitle);
}
addTask()

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
  }
  return a;
}
shuffle(newQuest)

function createQuestions (ans, ans2) {
  let createdQuest = `${ans}${","}${ans2}${" "}`;
  let newQuest = createdQuest.split(",")
  shuffle(newQuest)
  for (let i = 0; i < newQuest.length; i++) {
    document.querySelector(".container").innerHTML += `<input type="radio" name="same" ><label for="test" id="test" onclick='handleFunction(event)'>${newQuest[i]}</label>`
  }
}
createQuestions(questions[n].incorrect_answers, questions[n].correct_answer);


function removeNodes (container){
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function handleFunction(event){
  if (event.target.innerText === questions[n].correct_answer){sum += 1};
  n += 1;
  console.log(n);
  console.log(sum);
  localStorage.setItem("sum", sum)
  localStorage.setItem("max", questions.length)
  newQuest()
}

function redirectIfOver() {
  if (n === questions.length){
    window.location = "../pagina3/pag3.html"
  }
}

function newQuest(){
  redirectIfOver()
  removeNodes(container);
  addTask()
  createQuestions(questions[n].incorrect_answers, questions[n].correct_answer);
  where();
  clearInterval(mytimer)
  avvia();
  pepe()
}


let timer = 0
function timerCounter() {
  timer--;
  document.getElementById("contatore").innerHTML = timer;
  if (timer === 0) {
    ++n
    newQuest();
  }
}
let mytimer

window.onload = () => {where(), avvia()}

function avvia(){
  mytimer = setInterval(timerCounter, 1000)
  if (questions[n].difficulty == "easy"){timer = 15}
  if (questions[n].difficulty == "medium"){timer = 30}
  if (questions[n].difficulty == "hard"){timer = 60}
  document.getElementById("contatore").innerHTML = timer
}

function where() {
  let bottomp = document.createElement("p")
  bottomp.innerHTML = `<h3>Question ${n +1} <b> / ${questions.length}<b><h3>`
  document.querySelector(".container").appendChild(bottomp)
}

function setPepeMemes (event) {
  if (event.key === " ") {
    document.querySelector("body").style.backgroundImage = "url(../assets/180712-Weill--The-Creator-of-Pepe-hero_uionjj.jpg)";
    document.querySelector("body").style.color = "red"
  }
}

addEventListener('keydown', setPepeMemes);

function unSetPepeMemes (event) {
  if (event.key === " ") {
    document.querySelector("body").style.backgroundImage = "";
    document.querySelector("body").style.color = "white"
  }
}

addEventListener('keyup', unSetPepeMemes);
