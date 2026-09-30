// ============================================================
// 🐛  EVENT LISTENERS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> for <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// Clicking "Add Task" should log the title.
// Instead it logs the title immediately when the page loads,
// then does nothing when you click. What's wrong?

function logTitle() {
  const title = document.getElementById("task-title-input").value;
  console.log("Title: " + title);
}

document.getElementById("add-task-btn")
   .addEventListener("click", ()=>{logTitle()});

// What's wrong ↓
// document.getElementById("add-task-btn")
//   .addEventListener("click", logTitle());
//change to 
//problem is with ("click", logTitle()). writing it this way means you want it to execute immediately
// in other words writing with parenthesis means you execute the function right away.
// because of this you make addEventListener undefined.
// or
//you need to make sure the function is declared with callback first etc ()=>{logTitle() when you click };
// document.getElementById("add-task-btn").addEventListener("click", ()=>{
// logTitle()});
// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should hide/show task cards based on priority filter.
// Clicking "High" hides all tasks instead of showing only high ones.
// What's wrong with the condition?

function handleFilter(event) {
  const filter  = event.target.dataset.filter;
  const allCards = document.querySelectorAll(".task-card");

  allCards.forEach(function(card) {
    if (filter === "all" || card.dataset.priority === filter) {
       card.classList.remove("hidden");
    } else {
       card.classList.add("hidden");
    }
  });
}
document.querySelector(".header-right").addEventListener("click", handleFilter);
// What's wrong ↓
//there is no event passed into the handleFilter function. 
  // allCards.forEach(function(card) {
  //   if (card.dataset.priority !== filter) {
  //     card.classList.remove("hidden");
  //   } else {
  //     card.classList.add("hidden");
  //   }
  // });
//so what happening with this function is that the intended priority is being filtered out. 
// let say in this case the card.classList.priority === high then all card with high priority will be hidden. 
// and those with otherwise priority will be shown instead.
// to fix this just reverse the logic
//in this case we want to remove hidden (display or show it to user) when filter is all  OR priority is selected with respect  

//you targeting all the card elements and hiding them instead.
// Your fix ↓

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This delegation handler should remove a task card when
// its Remove button is clicked. Nothing happens when clicked.
// There are TWO bugs.

// function handleBoardClick(event) {
//   const card   = event.target.closest(".task-card");
//   const taskId = card.dataset.id;
//   if (event.target.classList.contains("remove-btn")) {
//     card.remove();
//   }
// }
// document.querySelector(".board").addEventListener("click", handleBoardClick);
// Bug 1 ↓
// function handleBoardClick(event) {
//   const card   = event.target.closest(".task-card");
//   const taskId = card.dataset.id;
//   if (event.target.classList.contains("remove-btn")) {
//     card.remove();
//   }
// }
// document.querySelector(".board").addEventListener("click", handleBoardClick);
// first bug is not putting in boundary checks or existary check before proceeding with the logic which will cause the logic to crash instead if not exist
//
//
//secondary we might need to delete the specific task off the card not just the remove the card itself and lastly make sure to update the final count for it.


function handleBoardClick(event) {
  const card = event.target.closest(".task-card");
  if (!card){
    return;
  }
  const taskId = parseInt(card.dataset.id);
  if (event.target.classList.contains("remove-btn")) {
    const index = tasks.findIndex(task => task.id === taskId)
    tasks.splice(index, 1);
    card.remove();
    updateCounts(tasks);
  }
}
document.querySelector(".board").addEventListener("click", handleBoardClick);
// Bug 2 ↓
// Your fix ↓
