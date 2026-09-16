// ============================================================
// 🐛  DOM MANIPULATION — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> with <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should set the board title but logs a TypeError. Why?

// function renderBoardTitle() {
//   const titleEl = document.querySelector(".board-title");
//   titleEl.textContent = "My Task Board";
// }

// renderBoardTitle();

// What's wrong 
// querySelector should be using #board-title. since the element is coded to using id itself

// Your fix ↓aruna

function renderBoardTitle() {
  const titleEl = document.querySelector("#board-title");
  titleEl.textContent = "My Task Board";
}

renderBoardTitle();

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Mednium
// ----------------------------------------------------------
// This loop should create a card for every task and append
// it to the list. But only the last card appears. Why?

// function renderTasks() {
//   const list = document.getElementById("list-todo");
//   const tasks = ["Design page", "Write tests", "Fix bug"];

//   tasks.forEach(function(taskTitle) {
//     const li = document.createElement("li");
//     li.textContent = taskTitle;
//     list.innerHTML = li.outerHTML;
//   });
// }

// renderTasks();

// What's wrong ↓
//problem is that list.innerHTML is being overwritten by the current element. so if li = <li>Design Page/li> 
//list.innerHTML would be <ul></ul>. <ul><li>Design Page</li></ul> => <ul><li>Write tests</li></ul> it overwriting the previous innerhtml of list
//so you should use list.innerHTML += li.outerHTML or list.appendChild(li) instead.

// Your fix ↓

function renderTasks() {
  const list = document.getElementById("list-todo");
  const tasks = ["Design page", "Write tests", "Fix bug"];

  tasks.forEach(function(taskTitle) {
    const li = document.createElement("li");
    li.textContent = taskTitle;
    list.innerHTML += li.outerHTML; // or list.appendChild(li);
  });
}

renderTasks();


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function should add a "highlighted" class to all
// high-priority cards, but nothing changes on the page.
// There are TWO bugs.

// function highlightTasks() {
//   const highCards = document.querySelectorAll(".priority-high");

//   for (let i = 0; i <= highCards.length; i++) {
//     highCards[i].classList.add("highlighted");
//   }
// }

// highlightTasks();

// Bug 1 ↓
// first prob is that the number of length, but using <= you are out of index for length/amount of highcards. you should use < highCards.length or <= highCards.length
// Bug 2 ↓
//before running highCards. you should do a check whether highCards exist or not, often times where js can't find highcards when you load up the program. it could lead to crashses
//  highCards
function highlightTasks() {
  const highCards = document.querySelectorAll(".priority-high");

  if (!highCards){
    return;
  }

  for (let i = 0; i < highCards.length; i++) {
    highCards[i].classList.add("highlighted");
  }
}

highlightTasks();
