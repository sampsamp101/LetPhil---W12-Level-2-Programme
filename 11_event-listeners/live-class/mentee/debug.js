// ============================================================
// 🐛  EVENT LISTENERS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> for <script src="debug.js">
// in index.html.
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// The button click should toggle dark mode.
// Instead, dark mode turns on immediately when the page loads
// and the button does nothing after that. What's wrong?

function toggleDark() {
  document.body.classList.toggle("dark");
}

document.getElementById("theme-btn").addEventListener("click", toggleDark);

// What's wrong ↓
// line 19, toggleDark() should NOT have the ().  Having the () causes toggleDark to be executed immediately

// Your fix ↓
// remove the () after toggleDark argument in the .addEventListener

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This form should add skills without reloading the page.
// But every time you submit, the page reloads and the
// skill never appears. What's missing?

function handleSubmit(event) {
  event.preventDefault();
  const skillInput = document.getElementById("skill-input");
  const skillName = skillInput.value.trim();

  if (skillName) {
    const li = document.createElement("li");
    li.textContent = skillName;
    document.getElementById("skills-list").appendChild(li);
    skillInput.value = "";
  }
}

document
  .getElementById("add-skill-form")
  .addEventListener("submit", handleSubmit);

// What's wrong ↓
// page reloads when form submit by default

// Your fix ↓
// add event.preventDefault()

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This uses event delegation to remove skills when clicked.
// Clicking a skill does nothing. What's wrong?
// There are TWO bugs.

function handleSkillClick(event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
}

document
  .getElementById("skills-list")
  .addEventListener("click", handleSkillClick);

// Bug 1 ↓
// .currentTarget indicates list itself and .target

// Bug 2 ↓
// no skills exist in list

// Your fix ↓
// change .currentTarget to .target
