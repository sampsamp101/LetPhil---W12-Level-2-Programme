// ============================================================
// 🏠  localStorage — HOMEWORK
// ============================================================
// Mini Project: Persistent Task Board
//
// The Task Board from Event Listeners — now with persistence.
// Every change is saved to localStorage automatically.
// Refreshing the page restores exactly where the user left off.
//
// STORAGE KEY: "taskBoardData"
// Store the full tasks array under this key.
// ============================================================

// ============================================================
// DEFAULT TASKS — used only when nothing is saved yet
// ============================================================
const defaultTasks = [
  {
    id: 1,
    title: "Design landing page",
    assignee: "Alex",
    priority: "high",
    status: "todo",
  },
  {
    id: 2,
    title: "Set up project repo",
    assignee: "Sofia",
    priority: "high",
    status: "done",
  },
  {
    id: 3,
    title: "Write API docs",
    assignee: "Liam",
    priority: "medium",
    status: "inprogress",
  },
  {
    id: 4,
    title: "Fix login bug",
    assignee: "Alex",
    priority: "high",
    status: "inprogress",
  },
  {
    id: 5,
    title: "Add dark mode",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
];

// This is your working tasks array — start it empty.
// loadTasks() will fill it from localStorage (or from defaultTasks).
let tasks = [];

// ----------------------------------------------------------
// TASK 1 — saveTasks
// ----------------------------------------------------------
// Declare a function called saveTasks.
// No parameters.
//
// Inside:
//   1. Save tasks to localStorage:
//      localStorage.setItem("taskBoardData", JSON.stringify(tasks))
//
//   2. Flash the save indicator:
//      Select #save-indicator
//      Add class "visible"
//      After 1500ms, remove class "visible":
//        setTimeout(function() {
//          saveIndicator.classList.remove("visible");
//        }, 1500);
//
// This function will be called after EVERY change.

function saveTasks() {
  // your code here
  localStorage.setItem("taskBoardData", JSON.stringify(tasks));
  const saveIndicator = document.getElementById("save-indicator");
  saveIndicator.classList.add("visible");
  setTimeout(function(){
    saveIndicator.classList.remove("visible");
  }, 1500);
}

// ----------------------------------------------------------
// TASK 2 — loadTasks
// ----------------------------------------------------------
// Declare a function called loadTasks.
// No parameters. Returns nothing — populates the tasks array.
//
// Inside:
//   1. const raw = localStorage.getItem("taskBoardData")
//
//   2. IF raw is null (nothing saved yet):
//      Set tasks = [...defaultTasks]  (copy the defaults)
//      Call saveTasks() to save them immediately
//      Return early
//
//   3. ELSE:
//      Set tasks = JSON.parse(raw)
//
// ⚠️  Always check for null before parsing.

function loadTasks() {
  // your code here
  const raw = localStorage.getItem("taskBoardData");
  if (!raw){
    tasks =[...defaultTasks] //deep copy the whole of defaultTasks and place it into task at beginning
    saveTasks();
    return;
  }
  else{ //if data already exists
    tasks = JSON.parse(raw);
  }
}

// ----------------------------------------------------------
// TASK 3 — createTaskCard (returns a DOM element)
// ----------------------------------------------------------
// Carried from Event Listeners — same structure, restated here
// so you don't have to flip back to that file.
// Parameter: task (object)
//v
// Build and return a <li> with:
//   1. class "task-card"
//      dataset.id = task.id
//      dataset.priority = task.priority
//   2. A title <p class="task-title"> — textContent: task.title
//   3. A meta <div class="task-meta"> with two spans:
//      a) priority span — textContent: task.priority.toUpperCase()
//         add class: "priority-" + task.priority
//         (e.g. class="priority-high" for high priority)
//      b) assignee span — textContent: "👤 " + task.assignee
//   4. An actions <div class="card-actions"> with two buttons:
//      a) <button class="complete-btn"> textContent: "✅ Complete"
//      b) <button class="remove-btn">   textContent: "🗑️ Remove"
//   5. If task.status === "done" → add class "completed" to the <li>
//   6. Append title, meta, and actions to the <li>
//
// Return the <li> — do NOT append it here.
function createTaskCard(task) {
  // your code here
  const newliElement = document.createElement("li");
  newliElement.classList.add("task-card");
  newliElement.dataset.id = task.id;
  newliElement.dataset.priority = task.priority;

  const newPElement = document.createElement("p");
  newPElement.classList.add("task-title");
  newPElement.textContent = task.title;

  const newDivClass = document.createElement("div");
  newDivClass.classList.add("task-meta");
  const newSpanPriority = document.createElement("span");
  newSpanPriority.classList.add(`priority-${task.priority}`);
  newSpanPriority.textContent = task.priority.toUpperCase();
  const newTaskPriorityAssignee = document.createElement("span");
  newTaskPriorityAssignee.textContent =  `👤 ${task.assignee}`;
  newDivClass.append(newSpanPriority, newTaskPriorityAssignee);

  const newCardActionsDiv = document.createElement("div");
  newCardActionsDiv.classList.add("card-actions");
  const newClassButtonCompleteBtn = document.createElement("button");
  newClassButtonCompleteBtn.textContent = "✅ Complete";
  newClassButtonCompleteBtn.classList.add("complete-btn");
  const newClassButtonRemoveBtn = document.createElement("button");
  newClassButtonRemoveBtn.textContent = "🗑️ Remove";
  newClassButtonRemoveBtn.classList.add("remove-btn");
  newCardActionsDiv.append(newClassButtonCompleteBtn, newClassButtonRemoveBtn);

  if (task.status === "done"){
    newliElement.classList.add("completed");
  }
  newliElement.append(newPElement, newDivClass, newCardActionsDiv);

  return newliElement;
}


// ----------------------------------------------------------
// TASK 4 — renderBoard + updateCounts
// ----------------------------------------------------------
// Declare a function called renderBoard.
// No parameters — uses the global tasks array.
//
// Clear all three lists (innerHTML = "").
// Loop through tasks, call createTaskCard, append to correct list.
// Call updateCounts() after.
//
// ---
// Declare a function called updateCounts.
// No parameters.
//
// Use filter to get four groups from the tasks array:
//   done        → status === "done"
//   pending     → status !== "done"
//   todo        → status === "todo"
//   inprogress  → status === "inprogress"
//
// Set textContent on six elements:
//   #task-count       → tasks.length + " tasks"
//   #completed-count  → "✅ " + done.length + " done"
//   #pending-count    → "⏳ " + pending.length + " pending"
//   #count-todo       → todo.length          (just the number — no label)
//   #count-inprogress → inprogress.length    (just the number — no label)
//   #count-done       → done.length          (just the number — no label)

function updateCounts() {
  // your code here
  const doneTasks = tasks.filter((task)=> (task.status === "done"));
  const pendingTasks = tasks.filter((task)=> (task.status !== "done"));
  const todoTasks = tasks.filter((task)=> (task.status === "todo"));
  const inprogressTasks = tasks.filter((task)=> (task.status === "inprogress"));
  document.getElementById("task-count").textContent = tasks.length + " tasks";
  document.getElementById("completed-count").textContent = "✅ " + doneTasks.length + " done";
  document.getElementById("pending-count").textContent = "⏳ " + pendingTasks.length + " pending";
  document.getElementById("count-todo").textContent = todoTasks.length;
  document.getElementById("count-inprogress").textContent = inprogressTasks.length;
  document.getElementById("count-done").textContent = doneTasks.length;
}

function renderBoard() {
  // your code here
    const todoList = document.getElementById("list-todo");
    const inProgressList = document.getElementById("list-inprogress");
    const doneList = document.getElementById("list-done");

    todoList.innerHTML = "";
    inProgressList.innerHTML = "";
    doneList.innerHTML = "";

    tasks.forEach((task)=>{
      const newTask = createTaskCard(task);
      if (task.status === "todo"){
          todoList.append(newTask);
      }
      else if (task.status === "inprogress"){
          inProgressList.append(newTask);
      }
      else{
        doneList.append(newTask);
      }         
    });
    updateCounts();
}
// ----------------------------------------------------------
// TASK 5 — handleAddTask
// ----------------------------------------------------------
// Declare a function called handleAddTask.
//
// Inside:
//   1. Read the four input values:
//      - #task-title-input    (.value.trim())
//      - #task-assignee-input (.value.trim())
//      - #task-priority-input (.value)
//      - #task-status-input   (.value)
//   2. If title is empty → return early
//   3. Create a new task object:
//      { id: Date.now(), title,
//        assignee: assignee || "Unassigned",
//        priority, status }
//      ⚠️ The assignee fallback matters — an empty assignee field
//         would otherwise render as "👤 " with nothing after it.
//   4. Push to tasks array
//   5. Call saveTasks()     ← persist immediately
//   6. Call renderBoard()   ← update the view
//   7. Clear title and assignee inputs
//
// Wire it up:
//   document.getElementById("add-task-btn")
//     .addEventListener("click", handleAddTask)

function handleAddTask() {
  // your code here
  const taskTitleInput = document.getElementById("task-title-input").value.trim();
  const taskAssigneeInput = document.getElementById("task-assignee-input").value.trim();
  const taskPriorityInput = document.getElementById("task-priority-input").value;
  const taskStatusInput = document.getElementById("task-status-input").value;
  if (!taskTitleInput){
    console.log("Title is required");    
    return;
  }
  const newTaskObj = {
    id: Date.now(),
    title: taskTitleInput,
    assignee: taskAssigneeInput || "Unassigned",
    priority: taskPriorityInput,
    status: taskStatusInput,
  };
  tasks.push(newTaskObj);
  saveTasks();
  renderBoard();
  document.getElementById("task-title-input").value = "";
  document.getElementById("task-assignee-input").value = "";
}

document
  .getElementById("add-task-btn")
  .addEventListener("click", handleAddTask);

// ----------------------------------------------------------
// TASK 6 — handleBoardClick (delegation for complete + remove)
// ----------------------------------------------------------
// Declare a function called handleBoardClick.
// Parameter: event
//
// Use event.target.closest(".task-card") to get the card.
// Guard: if no card → return.
//
// Get taskId: parseInt(card.dataset.id)
// Find the task in tasks using find.
//
// IF complete button clicked:
//   - Update task.status = "done" in the array
//   - Call saveTasks()
//   - Call renderBoard()
//
// IF remove button clicked:
//   - Remove from tasks: tasks.splice(tasks.findIndex(...), 1)
//   - Call saveTasks()
//   - Call renderBoard()
//
// Wire it up to document.querySelector(".board")

function handleBoardClick(event) {
  // your code here
  const clickedElement = event.target;
  const taskCard = clickedElement.closest(".task-card");
  if (!taskCard){
    return;
  }
  const taskId = parseInt(taskCard.dataset.id);
  const taskFound = tasks.find((task)=> (task.id === taskId));// return one task array if found
  if (clickedElement.classList.contains("complete-btn")){
    taskFound.status = "done";
    saveTasks();
    renderBoard();
  }
  if (clickedElement.classList.contains("remove-btn")){
     const index = tasks.findIndex(task => task.id === taskId)
     tasks.splice(index, 1);
     saveTasks();
     renderBoard();
  }
}

document.querySelector(".board").addEventListener("click", handleBoardClick);

// ----------------------------------------------------------
// TASK 7 — handleClearAll
// ----------------------------------------------------------
// Declare a function called handleClearAll.
//
// Inside:
//   1. Confirm the user wants to clear:
//      if (!confirm("Clear all tasks? This cannot be undone.")) return;
//   2. Clear localStorage: localStorage.removeItem("taskBoardData")
//   3. Reset tasks: tasks = [...defaultTasks]
//   4. Call saveTasks() to save the defaults
//   5. Call renderBoard()
//
// Wire it up:
//   document.getElementById("clear-btn")
//     .addEventListener("click", handleClearAll)

function handleClearAll() {
  // your code here
  if (!confirm("Clear all tasks? This cannot be undone.")) return;

  localStorage.removeItem("taskBoardData")
  
  tasks = [...defaultTasks];
  
  saveTasks();

  renderBoard();
}

document.getElementById("clear-btn").addEventListener("click", handleClearAll);

// ----------------------------------------------------------
// TASK 8 — init
// ----------------------------------------------------------
// Declare a function called init.
// Inside:
//   1. Call loadTasks()    ← loads from localStorage or defaults
//   2. Call renderBoard()  ← renders whatever loadTasks set up
//
// Call init() at the bottom.

function init() {
  // your code here
  loadTasks();
  renderBoard();  
  let savedFilter = loadFilter();
  applyFilter(savedFilter);
}

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — persist filter preference
// ----------------------------------------------------------
// The board currently loses the active filter on refresh.
// Add persistence for the current filter setting.
//
// Declare a function called saveFilter.
// Parameter: filterValue (string)
// Saves: localStorage.setItem("taskFilter", filterValue)
//
// Declare a function called loadFilter.
// Returns the saved filter or "all" as default:
//   return localStorage.getItem("taskFilter") || "all"
//
// In your filter click handler:
//   - After applying the filter, call saveFilter(filterValue)
//
// In init():
//   - After renderBoard(), call:
//       const savedFilter = loadFilter()
//       Apply the saved filter (update active button + show/hide cards)
//
// Write a comment: what other UI state might be worth persisting?

function saveFilter(filterValue){
    localStorage.setItem("taskFilter", filterValue);
}

function loadFilter(){
  const currentFilter = localStorage.getItem("taskFilter") || "all";
  return currentFilter;
}

function applyFilter(filterValue){
  const todoList = document.getElementById("list-todo");
  const inProgressList = document.getElementById("list-inprogress");
  const doneList = document.getElementById("list-done");

  todoList.innerHTML = "";
  inProgressList.innerHTML = "";
  doneList.innerHTML = "";

  let filteredTasks = tasks.filter((task)=>(task.priority === filterValue));

  if (filterValue === "all"){
    filteredTasks = [...tasks];
  }

  filteredTasks.forEach((task)=> {
       const newTask = createTaskCard(task);
      if (task.status === "todo"){
          todoList.append(newTask);
      }
      else if (task.status === "inprogress"){
          inProgressList.append(newTask);
      }
      else{
        doneList.append(newTask);
      }         
    });
    updateCounts();
}

const filterparent = document.querySelector(".header-right");
filterparent.addEventListener('click', (event)=>{
  const possibleClickedFilterButton = event.target;
  const closestFilterButton = possibleClickedFilterButton.closest(".filter-btn");
  if (!closestFilterButton){
    return;
  }
  saveFilter(closestFilterButton.dataset.filter);
  applyFilter(closestFilterButton.dataset.filter);
});

// Write a comment: what other UI state might be worth persisting?
// although the feature is not implemented yet. other ui settings like nightmode can be saved
// we can also save down last task and last name input into the task to do list.

// ============================================================
// START
// ============================================================
init();