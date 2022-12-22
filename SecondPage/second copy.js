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

const ObjList = questions

function addTask() {
  let questionTitle = document.createElement('p')
  questionTitle.innerHTML += `<p>${ObjList[n].question}</p>`
  document.querySelector(".container").appendChild(questionTitle);
}
addTask()

function createQuestions (ans, ans2) {
  let createdQuest = `${ans}${","}${ans2}${" "}`;
  let newQuest = createdQuest.split(",")
  for (let i = 0; i < newQuest.length; i++) {
    document.querySelector(".container").innerHTML += `<input id="test${i}" type="radio" name="same" ><label for="test${i}" onclick='handleFunction(event)'>${newQuest[i]}</label>`
  }
}
createQuestions(ObjList[n].incorrect_answers, ObjList[n].correct_answer);




let toStoreSum = String.valueOf(sum)
 let toStoretotalAnswers = String.valueOf(ObjList.length)
 
 localStorage.setItem("sum", ObjList.length)
 console.log(localStorage.setItem);
 
 
 
 function removeNodes (parent){
   while (parent.hasChildNodes()) {
     parent.removeChild(parent.firstChild);
    }
  }
  const container = document.querySelector('.container');
  
  function handleFunction(event){
    n += 1;
    if (event.target.innerText == ObjList[n].correct_answer){sum += 1};
    removeNodes(container);
    addTask()
    createQuestions(ObjList[n].incorrect_answers, ObjList[n].correct_answer);
    console.log(n);
    console.log(sum);
    localStorage.setItem("sum", sum)
    localStorage.setItem("max", ObjList.length)
  } 


 

