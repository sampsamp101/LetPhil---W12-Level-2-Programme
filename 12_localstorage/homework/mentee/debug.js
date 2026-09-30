// ============================================================
// 🐛  localStorage — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This saves a task array to localStorage and reads it back.
// But tasks.length logs 1 instead of 3, and tasks[0] is a string.
// What's wrong?

const tasksToSave = [
  { id: 1, title: "Task A" },
  { id: 2, title: "Task B" },
  { id: 3, title: "Task C" }
];

localStorage.setItem("tasks", JSON.stringify(tasksToSave));

// const tasksDebug= localStorage.getItem("tasks");
// console.log(tasksDebug.length);   // logs a large number — wrong
// console.log(tasksDebug[0]);       // logs "{" — wrong, expected an object

const tasksDebug= JSON.parse(localStorage.getItem("tasks"));
// What's wrong ↓
// Your fix ↓
// console.log(tasksDebug.length);   // logs a large number — wrong
// console.log(tasksDebug[0]);       // logs "{" — wrong, expected an object
// i guess what you are trying to do here is that you trying to print the number of task right?
//so what happening here is that if the tasksDebug is not parse first then it will instead print the total string length and not the amount of task
//same thing for tasksDebug you are actually printing [  instead not {  but eitherway it will print out string which it not what we wanted.
//to fix this just convert back to object first using parse
console.log(tasksDebug.length);   // now print out 3 amount of tasks
console.log(tasksDebug[0]);       // now prints out id:1 isntead.

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This function should save the task board state and show
// a save indicator. The save works but the indicator never appears.
// What's wrong?

function saveBoardState(taskList) {
  localStorage.setItem("board", JSON.stringify(taskList));

  const indicator = document.getElementById("save-indicator");
  indicator.classList.add("visible");
  
  setTimeout(function() {
    indicator.classList.remove("visible");
  }, 1500);

  // void indicator.offsetWidth;
  // requestAnimationFrame(()=>setTimeout(function() {
  //   indicator.classList.remove("visible");
  // }, 1500));

    requestAnimationFrame(() => {
    setTimeout(() => {
      indicator.classList.remove("visible");
    }, 1500);
  });
}
saveBoardState(tasksToSave);

//  <span id="save-indicator" class="save-indicator">💾 Saved</span>
// The indicator element has this CSS:
// .save-indicator { opacity: 0; transition: opacity 0.3s; }
// .save-indicator.visible { opacity: 1; }
//
// saveBoardState() is being called from inside another function
// that also does heavy DOM work immediately after.
// Think about what could prevent the class from taking visual effect.

// What's wrong ↓
//hmm i guessing this bug is related to indicator not printing? 
//we can utilize requestAnimationFrame to prevent the problem of synchronization, 
// so we generate a call to perform a specific animation before the actual loading of the screen.
// Your fix — conceptual explanation is enough here ↓

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loads tasks and renders them.
// It crashes on first load AND has a second bug that causes
// duplicate tasks on every subsequent load.
// Find both bugs.

let taskList = [];

function loadAndRender() {
  const raw = localStorage.getItem("boardTasks");
  if (!raw){
    return;
  }
  
  taskList  = JSON.parse(raw);
  
  document.getElementById("list-todo").innerHTML = "";
  taskList.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.title;
    document.getElementById("list-todo").appendChild(li);
  });
}

// Saving some tasks so the second bug can be demonstrated:
  console.log(taskList);
  localStorage.setItem("boardTasks", JSON.stringify([
  { id: 1, title: "Task A", status: "todo" },
  { id: 2, title: "Task B", status: "todo" }
]));

 
loadAndRender();
loadAndRender(); // called again — what happens?


// Bug 1 (crash on first load) ↓
//i think it crash due to possibility that raw doesnt exist 
//so solve this we first must check raw exist that the main condition

// Bug 2 (duplicates) ↓
//i guessing you didnt reset the todolist before calling another function printing list?
//you might need to reset the innerhtml of list-todo first before calling it
// Your fix ↓
