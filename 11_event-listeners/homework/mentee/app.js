// ============================================================
// 🏠  EVENT LISTENERS — HOMEWORK
// ============================================================
// Mini Project: Interactive Task Board
//
// The Task Board from DOM Manipulation is back — now make it
// fully interactive with event listeners.
//
// Every interaction must use addEventListener.
// All DOM operations must be inside named functions.
// ============================================================

// const { createElement } = require("react");

// ============================================================
// THE DATA
// ============================================================
const tasks = [
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
  {
    id: 6,
    title: "Code review PR #42",
    assignee: "Sofia",
    priority: "medium",
    status: "todo",
  },
  {
    id: 7,
    title: "Deploy to staging",
    assignee: "Liam",
    priority: "high",
    status: "done",
  },
  {
    id: 8,
    title: "Update dependencies",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
];

// ----------------------------------------------------------
// TASK 1 — createTaskCard (returns a DOM element)
// ----------------------------------------------------------
// Declare a function called createTaskCard.
// Parameter: task (object)
//
// Build and return a complete <li> element:
//   1. Create <li> — class "task-card", dataset.id = task.id,
//      dataset.priority = task.priority
//   2. Create <p class="task-title"> — textContent: task.title
//   3. Create <div class="task-meta">:
//      - <span> with priority class + text: task.priority.toUpperCase()
//      - <span>: "👤 " + task.assignee
//   4. Create <div class="card-actions">:
//      - <button class="complete-btn"> textContent: "✅ Complete"
//      - <button class="remove-btn">   textContent: "🗑️ Remove"
//   5. If task.status === "done" → add class "completed" to the <li>
//   6. Append title, meta, and actions to the <li>
//   7. Return the <li>

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
// TASK 2 — renderBoard + updateCounts
// ----------------------------------------------------------
// Declare a function called renderBoard.
// Parameter: taskList
//
// Clear all three lists first (set innerHTML = ""):
//   #list-todo, #list-inprogress, #list-done
//
// Loop through taskList using forEach.
// Call createTaskCard(task) for each.
// Append to the correct list based on task.status.
//
// After appending call updateCounts(taskList).
//
// ---
// Declare a function called updateCounts.
// Parameter: taskList
//
// Use filter to get these groups from taskList:
//   done        → status === "done"
//   pending     → status !== "done"
//   todo        → status === "todo"
//   inprogress  → status === "inprogress"
//
// Set textContent on six elements:
//   #task-count       → taskList.length + " tasks"
//   #completed-count  → "✅ " + done.length + " done"
//   #pending-count    → "⏳ " + pending.length + " pending"
//   #count-todo       → todo.length          (just the number — no label)
//   #count-inprogress → inprogress.length    (just the number — no label)
//   #count-done       → done.length          (just the number — no label)

function updateCounts(taskList) {
  // your code here
  const doneTasks = taskList.filter((task)=> (task.status === "done"));
  const pendingTasks = taskList.filter((task)=> (task.status !== "done"));
  const todoTasks = taskList.filter((task)=> (task.status === "todo"));
  const inprogressTasks = taskList.filter((task)=> (task.status === "inprogress"));

  document.getElementById("task-count").textContent = taskList.length + " tasks";
  document.getElementById("completed-count").textContent = "✅ " + doneTasks.length + " done";
  document.getElementById("pending-count").textContent = "⏳ " + pendingTasks.length + " pending";
  document.getElementById("count-todo").textContent = todoTasks.length;
  document.getElementById("count-inprogress").textContent = inprogressTasks.length;
  document.getElementById("count-done").textContent = doneTasks.length;
}

function renderBoard(taskList) {
  // your code here
    const todoList = document.getElementById("list-todo");
    const inProgressList = document.getElementById("list-inprogress");
    const doneList = document.getElementById("list-done");

    todoList.innerHTML = "";
    inProgressList.innerHTML = "";
    doneList.innerHTML = "";

    taskList.forEach((task)=>{
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
    updateCounts(taskList);
}

// renderBoard(tasks);

// ----------------------------------------------------------
// TASK 3 — handleAddTask (click event on the Add button)
// ----------------------------------------------------------
// Declare a function called handleAddTask.
//
// Inside:
//   1. Read values from:
//      - #task-title-input    (.value.trim())
//      - #task-assignee-input (.value.trim())
//      - #task-priority-input (.value)
//      - #task-status-input   (.value)
//   2. If title is empty → log "Title is required" and return early
//   3. Create a new task object:
//      { id: Date.now(), title, assignee: assignee || "Unassigned",
//        priority, status }
//   4. Push the new task to the tasks array
//   5. Re-render: call renderBoard(tasks)
//   6. Clear the title and assignee inputs
//
// Wire it up:
//   document.getElementById("add-task-btn")
//     .addEventListener("click", handleAddTask);

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
  renderBoard(tasks);
  document.getElementById("task-title-input").value = "";
  document.getElementById("task-assignee-input").value = "";
}

document.getElementById("add-task-btn").addEventListener("click", handleAddTask);

// wire up here
// ----------------------------------------------------------
// TASK 4 — handleBoardClick (event delegation for complete + remove)
// ----------------------------------------------------------
// Instead of adding listeners to every button individually,
// use delegation on each column's task list.
//
// Declare a function called handleBoardClick.
// Parameter: event
//
// Inside:
//   - Get the clicked element: event.target
//   - Get the task card: target.closest(".task-card")
//     (.closest() walks UP the DOM tree to find the nearest matching ancestor)
//   - If no card found → return early
//   - Get the task id: parseInt(card.dataset.id)
//   - Find the task in the tasks array using find
//
//   IF target.classList.contains("complete-btn"):
//     - Set task.status = "done"
//     - Add class "completed" to card
//     - Move card to #list-done using appendChild
//     - Call updateCounts(tasks)
//
//   IF target.classList.contains("remove-btn"):
//     - Remove the task from tasks array:
//       const index = tasks.findIndex(t => t.id === taskId)
//       tasks.splice(index, 1)
//     - Remove the card from the DOM: card.remove()
//     - Call updateCounts(tasks)
//
// Wire ONE listener to document.getElementById("board"):
//   Wait — the <main> has class "board" not id "board".
//   Use document.querySelector(".board")
//     .addEventListener("click", handleBoardClick);
//
// Write a comment: why use .closest() instead of event.target directly?

function handleBoardClick(event) {
  // your code here
  const clickedElement = event.target;
  const taskCard = clickedElement.closest(".task-card");
  if (!taskCard){
    return;
  }
  const taskId = parseInt(taskCard.dataset.id);
  const taskFound = tasks.find((task)=> (task.id === taskId));
  if (clickedElement.classList.contains("complete-btn")){
    taskFound.status = "done";
    taskCard.classList.add("completed");
    const doneList = document.getElementById("list-done");
    doneList.appendChild(taskCard);
    updateCounts(tasks);
  }
  if (clickedElement.classList.contains("remove-btn")){
     const index = tasks.findIndex(t => t.id === taskId)
     tasks.splice(index, 1);
     taskCard.remove();
     updateCounts(tasks);
  }
}

document.querySelector(".board").addEventListener("click", handleBoardClick);

//we use closest because when we click we might click onto the child of the card?
// so for instancing when we click, we might click onto the p element or span element, so event.target is not necessary always the target we trying to find
//we use .closest instand so it will targte the cloest that was clicked to find the card.


// wire up here
// ----------------------------------------------------------
// TASK 5 — handleFilterClick (filter buttons)
// ----------------------------------------------------------
// The header has four filter buttons with data-filter attributes:
//   data-filter="all", "high", "medium", "low"
//
// Declare a function called handleFilterClick.
// Parameter: event
//
// Inside:
//   - Get the filter value: event.target.dataset.filter
//   - If no filter value → return (clicked something that's not a button)
//
//   - Remove "active" class from ALL .filter-btn elements
//     (use querySelectorAll + forEach)
//   - Add "active" class to event.target
//
//   - Select ALL .task-card elements
//   - For each card:
//       IF filter === "all" → remove class "hidden"
//       ELSE IF card.dataset.priority === filter → remove "hidden"
//       ELSE → add "hidden"
//
// Use delegation on the .header-right div:
//   document.querySelector(".header-right")
//     .addEventListener("click", handleFilterClick);
//
// Write a comment: why use delegation here instead of
// individual listeners on each button?

function handleFilterClick(event) {
  // your code here
  const filterVal = event.target.dataset.filter;
  if (!filterVal){
    return;
  }
  const filtervalAll = document.querySelectorAll(".filter-btn");
  filtervalAll.forEach((val)=>{
    val.classList.remove('active');
  });
  const targetedClass = event.target;
  targetedClass.classList.add("active");
  
  const taskCardSelectAll = document.querySelectorAll(".task-card");
  taskCardSelectAll.forEach((card)=>{
    if (filterVal === "all"){
      card.classList.remove("hidden");
    }
    else if (card.dataset.priority === filterVal){
      card.classList.remove("hidden");
    }
    else{
      card.classList.add("hidden");
    }
  })
}
// wire up here
document.querySelector(".header-right").addEventListener("click", handleFilterClick);
// we use delegation to attach a single event listener to a parent element instead of using multiple seperate listeners to multiple individual child
//elements, so it make it much simpler. so for example let say you have 1 ul and 3 li inside.
//without event delegration you would need 3 seperate eventlistener.
//with event delegration you only need 1. then you look inside the children.
//using conditions you target the specific elemetn you are looking for,
// from there you are able to do certain actiosn to it

// ----------------------------------------------------------
// TASK 6 — handleKeyDown (keyboard shortcuts)
// ----------------------------------------------------------
// Declare a function called handleKeyDown.
// Parameter: event
//
// Inside:
//   IF event.key === "Escape":
//     - Clear both input fields (#task-title-input, #task-assignee-input)
//     - Log: "Inputs cleared"
//
//   IF event.key === "Enter" AND event.target.id === "task-title-input":
//     - Call handleAddTask()
//     (lets users press Enter in the title field to add a task)
//
// Wire it up to document.

function handleKeyDown(event) {
  // your code here
  if (event.key==="Escape"){
      document.getElementById("task-title-input").value = "";
      document.getElementById("task-assignee-input").value = "";
      console.log("Inputs Cleared");
    }
    else if (event.key === "Enter" && event.target.id === "task-title-input"){
      handleAddTask();
    }
}

// wire up here
document.addEventListener("keydown", handleKeyDown);
// ----------------------------------------------------------
// TASK 7 — Connect the dots: init
// ----------------------------------------------------------
// Declare a function called init.
// Inside: call renderBoard(tasks).
//
// Call init() at the bottom.

function init() {
  // your code here
  renderBoard(tasks);
}

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — live search
// ----------------------------------------------------------
// Add a search input somewhere on the page (you can add a
// plain <input id="search-input"> anywhere in the HTML above
// the board, inside .add-task-bar).
//
// Declare a function called handleSearch.
// Parameter: event
//
// Inside:
//   - Get the search query: event.target.value.toLowerCase().trim()
//   - Select all .task-card elements
//   - For each card:
//       Get the title text: card.querySelector(".task-title").textContent.toLowerCase()
//       IF the title includes the query → remove class "hidden"
//       ELSE → add class "hidden"
//
// Wire it up:
//   document.getElementById("search-input")
//     .addEventListener("input", handleSearch);
//
// Write a comment: why use "input" and not "change" for live search?

// ============================================================
// WIRE UP ALL LISTENERS (above init)
// ============================================================

const newSearch = document.createElement("input");
  newSearch.id = "search-input";

const taskbarClass = document.querySelector(".add-task-bar");
taskbarClass.append(newSearch);

function handleSearch(event){
  const searchQuery = event.target.value.toLowerCase().trim();
  const allTaskCards = document.querySelectorAll(".task-card");

  allTaskCards.forEach((card)=>{
      const titleText =  card.querySelector(".task-title").textContent.toLowerCase()
      if (titleText.includes(searchQuery)){
        card.classList.remove("hidden");
      }
      else{
        card.classList.add("hidden");
      }
  })
}
  
document.getElementById("search-input").addEventListener("input",handleSearch);
//input fires everytime there changes made to the value of the input.
//well as for change, the event only fires once it lose focus AND value has changed.
//for effiency purpose it best to use input instead of change.

// ======================.======================================
// START
// ============================================================
init();
