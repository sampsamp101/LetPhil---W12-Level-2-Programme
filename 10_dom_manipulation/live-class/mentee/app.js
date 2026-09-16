// ============================================================
// 🟫  DOM MANIPULATION — LIVE CLASS
// ============================================================
// Open index.html in your browser to see your work.
// Changes you make here update the page in real time
// (after saving and refreshing).
//
// CONNECTING THE DOTS:
// You've been working in the console since Lesson 1.
// DOM Manipulation is where JavaScript meets the actual webpage.
// Everything you've learned — variables, functions, arrays,
// objects — now controls what users SEE and INTERACT WITH.
//
// RULE FOR THIS LESSON:
// Wrap all DOM code inside named functions (Lesson 9).
// Never let DOM operations float loose at the top level.
// Call the functions at the bottom of the file.
// ============================================================

// ============================================================
// THE DATA — the profile we'll render to the page
// ============================================================
const profile = {
  firstName: "Alex",
  lastName: "Rivera",
  title: "Full Stack Developer",
  location: "📍 Austin, TX",
  bio: "Passionate developer with 4 years of experience building web apps. I love clean code, great coffee, and teaching others to code.",
  status: "active",
  stats: {
    projects: 42,
    commits: 1284,
    reviews: 317,
  },
  skills: ["JavaScript", "React", "Node.js", "CSS", "Git", "SQL"],
};

// ----------------------------------------------------------
// PART 1 — SELECTING ELEMENTS
// ----------------------------------------------------------
// Before you can change anything on the page, you need to
// "grab" the element from the DOM.
//
// THREE ways to select elements:
//
// document.getElementById("id")
//   → selects ONE element by its exact id
//   → fastest, most specific
//   → do NOT include the # symbol
//
// document.querySelector("selector")
//   → selects the FIRST element matching any CSS selector
//   → use "#id", ".class", "tag", "[attribute]"
//   → more flexible than getElementById
//
// document.querySelectorAll("selector")
//   → selects ALL matching elements as a NodeList
//   → loop through it like an array (forEach works)
//
// Store selections in const variables — the element itself
// won't change, only what's inside it.


const first = document.getElementById("id");
const second = document.querySelector("selector");
const third = document.querySelectorAll("selector");


// TASK 1
// Declare a function called selectElements.
// Inside, select and log the following elements:
//
//   a) The <h1 id="page-title"> using getElementById
//   b) The <h2 id="user-name"> using querySelector
//   c) All <div class="stat"> elements using querySelectorAll
//
// Log each selection to the console.
// Write a comment on each: what does the log show?
// Call selectElements() at the bottom of the file.

function selectElements() {
  // your code here
  const pageTitleSelect = document.getElementById("page-title");

  const userNameSelect = document.getElementById("user-name");

  const allStatsClassSelect = document.querySelectorAll(".stat");

  console.log(pageTitleSelect, userNameSelect, allStatsClassSelect);
}

selectElements();

// a) The <h1 id="page-title"> using getElementById - showing element h1#page-title
//   b) The <h2 id="user-name"> using querySelector - showing h2#user-name
//   c) All <div class="stat"> elements using querySelectorAll - showing all of nodelist 


// ----------------------------------------------------------
// PART 2 — CHANGING CONTENT
// ----------------------------------------------------------
// Once you have an element, you can change what's inside it.
//
// element.textContent
//   → gets or sets the TEXT inside an element
//   → safe: treats everything as plain text
//   → use this for user-facing text content
//
// element.innerHTML
//   → gets or sets the HTML inside an element
//   → powerful but risky with user input (XSS vulnerability)
//   → use only when you need to insert actual HTML tags
//
// ⚠️  SECURITY NOTE: Never use innerHTML with data that
//     comes from a user (form inputs, URL params, etc.)
//     Use textContent for plain text. Always.


// TASK 2
// Declare a function called renderHeader.
// Inside:
//   - Select #page-title using getElementById
//   - Set its textContent to: profile.firstName + "'s Dev Profile"
//
// Call renderHeader() at the bottom.

function renderHeader() {
  // your code here
    const pageTitleSelect = document.getElementById("page-title");

    pageTitleSelect.textContent = `${profile.firstName}'s Dev Profile`;
}

renderHeader();

// TASK 3
// Declare a function called renderProfileCard.
// Inside, select and fill in:
//   - #avatar     → the first letter of firstName + first letter of lastName
//                   (e.g. "AR") — use textContent
//   - #user-name  → firstName + " " + lastName
//   - #user-title → profile.title
//   - #user-location → profile.location
//   - #user-bio   → profile.bio
//
// Call renderProfileCard() at the bottom.

function renderProfileCard() {
  // your code here

  const avatarProfile = document.getElementById("avatar");

  const userNameProfile = document.getElementById("user-name");

  const userTitleProfile = document.getElementById("user-title");

  const locationProfile = document.getElementById("user-location");

  const userBioProfile = document.getElementById("user-bio");

  avatarProfile.textContent = `${profile.firstName[0].toUpperCase()}${profile.lastName[0].toUpperCase()}`;
  userNameProfile.textContent = `${profile.firstName} ${profile.lastName}`;
  userTitleProfile.textContent = `${profile.title}`;
  locationProfile.textContent = `${profile.location}`;
  userBioProfile.textContent = `${profile.bio}`;
}

renderProfileCard();

// ----------------------------------------------------------
// PART 3 — CHANGING STYLES
// ----------------------------------------------------------
// Two ways to change how an element looks from JS:
//
// 1. element.style.property = "value"
//    → sets an INLINE style directly on the element
//    → useful for dynamic values (colours from data, sizes from calculations)
//    → camelCase: background-color → backgroundColor
//
// 2. element.classList
//    → add, remove, or toggle CSS CLASS NAMES
//    → the CSS is already written — you just control which classes are active
//    → cleaner than inline styles for predefined states
//
//   element.classList.add("active")     → adds the class
//   element.classList.remove("active")  → removes it
//   element.classList.toggle("dark")    → adds if absent, removes if present
//   element.classList.contains("dark")  → returns true/false

// TASK 4
// Declare a function called renderStatusBadge.
// Parameter: status (string — "active", "away", or "offline")
//
// Inside:
//   - Select #status-badge
//   - Set its textContent based on status:
//       "active"  → "🟢 Active"
//       "away"    → "🟡 Away"
//       "offline" → "🔴 Offline"
//     (use if/else or a ternary chain)
//   - Use classList.add() to add the matching class
//     (the CSS already has .badge.active, .badge.away, .badge.offline)
//
// Call renderStatusBadge(profile.status) at the bottom.

function renderStatusBadge(status) {
  // your code here

  const statusBadge = document.getElementById("status-badge");
  
  statusBadge.textContent = (status === "active") ? "🟢 Active" : (status === "away") ? "🟡 Away" : "🔴 Offline";
  
  statusBadge.classList.add(`${status}`);
}

renderStatusBadge(profile.status);

// TASK 5// Declare a function called renderStats.
// Inside:
//   - Select #stat-projects, #stat-commits, #stat-reviews
//   - Set each one's textContent to the matching value from profile.stats
//
// Call renderStats() at the bottom.

function renderStats() {
  // your code here

    const statProjects = document.getElementById("stat-projects");
    const statCommits = document.getElementById("stat-commits");
    const statReview = document.getElementById("stat-reviews");
    
    statProjects.textContent = profile['stats'].projects;
    statCommits.textContent = profile['stats'].commits;
    statReview.textContent = profile['stats'].reviews;
}

renderStats();
// TASK 6 — classList.toggle (dark mode preview)
// Declare a function called toggleDarkMode.
// Inside:
//   - Select document.body
//   - Use classList.toggle("dark") to flip the dark class on/off
//   - Log: "Dark mode: " + document.body.classList.contains("dark")
//
// Call toggleDarkMode() once to turn dark mode ON.
// Call toggleDarkMode() again to turn it OFF.
// Watch the page change — the CSS handles the visual difference.
//
// Write a comment: what does classList.toggle do differently
// from classList.add?

function toggleDarkMode() {
  // your code here
    document.body.classList.toggle("dark");
    console.log(`Dark mode: ${document.body.classList.contains("dark")}`);
}

toggleDarkMode();
toggleDarkMode();
//toggle allows you to directly toggle the class on/off directly instead of manually calling it remove/add to enable on off of the features.
//in reallife/realtime apps we want to utilize toggle if possible. since it automatic state tracking. if you were to use add/remove you will need useState boolean/setBoolean to utilize it.


// ----------------------------------------------------------
// PART 4 — CREATING AND INSERTING ELEMENTS
// ----------------------------------------------------------
// You can build new HTML elements entirely from JavaScript.
//
//   const el = document.createElement("li")
//   → creates a new <li> element (not yet on the page)
//
//   el.textContent = "JavaScript"
//   → sets its text
//
//   el.classList.add("skill-tag")
//   → adds a class
//
//   parent.appendChild(el)
//   → adds it as the LAST child of parent
//
//   parent.prepend(el)
//   → adds it as the FIRST child of parent
//
//   el.remove()
//   → removes the element from the DOM entirely

const el = document.createElement("li");
el.textContent = "Javascript";
el.classList.add("skill-tag");

const parent = document.getElementById("skills-block");
// parent.appendChild(el);
// parent.prepend(el);
// el.remove();

// TASK 7
// Declare a function called renderSkills.
// Parameter: skillsArray
//
// Inside:
//   - Select #skills-list (the <ul>)
//   - Loop through skillsArray using forEach
//   - For each skill:
//       1. Create a new <li> using createElement
//       2. Set its textContent to the skill name
//       3. Append it to the skills list using appendChild
//
// Call renderSkills(profile.skills) at the bottom.

function renderSkills(skillsArray) {
  // your code here
  const skillsListSelecUl = document.getElementById("skills-list");

  skillsArray.forEach((skill)=>{
      const newli = document.createElement('li');
      newli.textContent = `${skill}`;
      skillsListSelecUl.appendChild(newli);
  })
}

renderSkills(profile.skills);

// TASK 8
// Declare a function called addSkill.
// Parameter: skillName (string)
//
// Inside:
//   - Create a new <li>
//   - Set its textContent to skillName
//   - Append it to #skills-list
//
// Call addSkill("TypeScript") to add a new skill to the page.
// Call addSkill("Docker") to add another.

function addSkill(skillName) {
  // your code here

  const newliEl = document.createElement('li');
  newliEl.textContent = `${skillName}`;
  const skillsListUl = document.getElementById("skills-list");

  skillsListUl.appendChild(newliEl);
}

addSkill("TypeScript");
addSkill("Docker");

// ----------------------------------------------------------
// PART 5 — CONNECT THE DOTS (all 10 lessons)
// ----------------------------------------------------------

// TASK 9
// Declare a function called removeFirstSkill.
// Inside:
//   - Select #skills-list
//   - Get its first child: skillsList.firstElementChild
//   - If it exists, call .remove() on it
//   - Log: "Removed skill. Skills remaining: " + skillsList.children.length
//
// Call removeFirstSkill() once and watch the first skill disappear.

function removeFirstSkill() {
  // your code here
    const skillListSelect = document.getElementById('skills-list');
    
    skillListSelect.firstElementChild.remove();
    console.log(`Removed skill. Skills remaining: ${skillListSelect.children.length}`);
}

removeFirstSkill();
removeFirstSkill();
removeFirstSkill();
removeFirstSkill();

// TASK 10 — Full render function (connect all parts)
// Declare a function called renderProfile.
// It takes no parameters.
// Inside, call ALL your render functions in order:
//   renderHeader()
//   renderProfileCard()
//   renderStatusBadge(profile.status)
//   renderStats()
//   renderSkills(profile.skills)
//
// This is the pattern used in real apps: one top-level
// function that orchestrates rendering the whole page.

function renderProfile() {
  // your code here
  renderHeader();
  renderProfileCard();
  renderStatusBadge(profile.status);
  renderStats();
  renderSkills(profile.skills);
}

// ============================================================
// CALL YOUR FUNCTIONS HERE
// ============================================================
// Call renderProfile() to render the full page.
// Then call toggleDarkMode() to test dark mode.
// Then call addSkill() with a new skill name.
// Then call removeFirstSkill() to test removal.
// Then call selectElements() to inspect the DOM in the console.

renderProfile();
toggleDarkMode();
addSkill("Power BI");
removeFirstSkill();
selectElements();
