// ============================================================
// 🐛  FUNCTIONS — LIVE CLASS  |  DEBUG TASKS
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Hello, Alex!" but throws a ReferenceError.
// What's wrong and how do you fix it?

const greet = (name) => "Hello, " + name + "!";

console.log(greet("Alex"));
// What's wrong ↓

// Your fix ↓

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer expects itemPrice to be 80 after calling
// applyDiscount, but it stays at 100. Why?

function applyDiscount(price, discount) {
  return price - discount;
}

let itemPrice = 100;
console.log("Price after discount: $" + applyDiscount(itemPrice, 20));

// What's wrong ↓
// Your fix ↓
// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function should return a label for any membership tier.
// It works for "gold" and "silver" but returns undefined for
// everything else. There are TWO bugs — find both.

function getMemberLabel(tier) {
  if (tier === "gold") {
    return "🥇 Gold Member";
  }
  if (tier === "silver") {
    return "🥈 Silver Member";
  }
  if (tier === "bronze") {
    return " Bronze Member";
  }
  return "other";
}

console.log(getMemberLabel("gold")); // ✅ works
console.log(getMemberLabel("silver")); // ✅ works
console.log(getMemberLabel("bronze")); // ❌ undefined
console.log(getMemberLabel()); // ❌ undefined

// Bug 1 ↓
// console.log(getMemberLabel("bronze")); returns undefined because there is no condition for "bronze" tier in the function.

// Bug 2 ↓

// Your fix ↓
// add an if statement for the bronze tier and return the correct label
// add a default return statement for when no tier is provided, returning "other" or a message indicating no tier was specified.
