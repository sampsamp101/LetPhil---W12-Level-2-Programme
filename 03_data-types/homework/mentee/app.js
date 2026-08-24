// ============================================================
// 🏠  DATA TYPES — HOMEWORK  |  MENTEE VERSION
// ============================================================
// Mini Project: Receipt Generator
//
// Build a formatted shopping receipt using template literals,
// string methods, and type conversion.
//
// RULE: No functions, no conditionals, no loops, no arrays.
// Everything is sequential — declare variables, log results.
// You only know Lessons 1, 2, and 3.
//
// All output goes to the console.
// ============================================================

console.log("=== RECEIPT GENERATOR ===\n");

// ============================================================
// THE RAW DATA — messy, as it might come from a form
// ============================================================
const storeName = "  PIXEL GADGETS  ";
const customerName = "alex rivera";
const customerEmail = "  ALEX@PIXELGADGETS.COM  ";

const item1Name = "wireless headphones";
const item1Price = "79.99"; // string — from form input
const item1Qty = 2;

const item2Name = "usb-c hub";
const item2Price = "44.99"; // string — from form input
const item2Qty = 1;

const item3Name = "desk lamp";
const item3Price = "34.99"; // string — from form input
const item3Qty = 3;

const discountCode = "  SAVE10  "; // messy whitespace
const taxRate = 0.08;
const orderDate = "2025-01-15";
const orderStatus = null; // not yet processed

// ----------------------------------------------------------
// TASK 1 — Clean the store and customer data
// ----------------------------------------------------------
// The store name and customer name need formatting.
//
// a) Clean storeName: trim whitespace, lowercase it, then capitalize
//    just the first letter. (Capitalizing every word would need
//    .split() — that's an Array Methods trick, coming later. For
//    now we're only fixing the very first letter.)
//      const cleanStore = storeName.trim().toLowerCase();
//      const titleStore = cleanStore[0].toUpperCase() + cleanStore.slice(1);
//    Log: `Store: ${titleStore}`
//
// b) Clean customerName: same approach — trim, lowercase, capitalize
//    just the first letter.
//    Log: `Customer: ${titleCustomer}`
//
// c) Clean customerEmail: trim and lowercase.
//    Log: `Email: ${cleanEmail}`
//
// d) Clean discountCode: trim and uppercase.
//    Log: `Discount code: ${cleanCode}`

console.log("--- Task 1: Clean the Data ---");
// your code here


const cleanStore = storeName.trim().toLowerCase();

const titleStore = cleanStore[0].toUpperCase() + cleanStore.slice(1);

console.log(`1a: Store: ${titleStore}`);

const cleanName = item1Name.split(" ");
const endCleanName = cleanName[0][0].toUpperCase() + cleanName[0].slice(1) + " " + cleanName[1][0].toUpperCase() + cleanName[1].slice(1);
console.log(`1b: ${endCleanName}`);


const cleanEmail = customerEmail.trim();
const cleanLowerCaseEmail = cleanEmail.toLowerCase();
console.log(`1c: ${cleanLowerCaseEmail}`);

const discountCodeClean = discountCode.trim().toUpperCase();
console.log(`1d: ${discountCodeClean}`);

// ----------------------------------------------------------
// TASK 2 — Convert prices to numbers
// ----------------------------------------------------------
// All three prices are strings. Convert them to numbers
// so you can do arithmetic.
//
// a) const price1 = parseFloat(item1Price);
//    Log: `${item1Name} price type before: ${typeof item1Price}`
//    Log: `${item1Name} price type after:  ${typeof price1}`
//
// b) Do the same for item2Price and item3Price.
//    Log the type before and after for each.
//
// c) Log all three prices to confirm they converted correctly.

console.log("\n--- Task 2: Convert Prices ---");
// your code here

const price1 = parseFloat(item1Price);
console.log(`2a: ${item1Name} price type before: ${typeof item1Price}`);
console.log(`2a: ${item1Name} price type after: ${typeof price1}`);

const price2 = parseFloat(item2Price);
console.log(`2b: ${item2Name} price type before: ${typeof item2Price}`);
console.log(`2b: ${item2Name} price type after: ${typeof price2}`);

const price3 = parseFloat(item3Price);
console.log(`2c: ${item3Name} price type before: ${typeof item3Price}`);
console.log(`2c: ${item3Name} price type after: ${typeof price3}`);
console.log(`2c: All prices from 2a to 2c is: 2a: $${price1}, 2b: $${price2}, 2c: $${price3}`);


// ----------------------------------------------------------
// TASK 3 — Calculate line totals
// ----------------------------------------------------------
// A line total = price × quantity.
//
// a) const line1Total = price1 * item1Qty;
//    Log: `${item1Name} × ${item1Qty} = $${line1Total.toFixed(2)}`
//    (.toFixed(2) rounds to 2 decimal places and returns a string)
//
// b) Do the same for items 2 and 3.
//
// c) Calculate the subtotal (before tax):
//    const subtotal = line1Total + line2Total + line3Total;
//    Log: `Subtotal: $${subtotal.toFixed(2)}`
//
// Write a comment: why couldn't you calculate line1Total
// before converting item1Price to a number?

console.log("\n--- Task 3: Line Totals ---");
// your code here

 const line1Total = price1 * item1Qty;
console.log(`3a: ${item1Name} × ${item1Qty} = $${line1Total.toFixed(2)}`);

const line2Total = price2 * item2Qty;
console.log(`3b: ${item2Name} × ${item2Qty} = $${line2Total.toFixed(2)}`);

const line3Total = price3 * item3Qty;
console.log(`3b: ${item3Name} × ${item3Qty} = $${line3Total.toFixed(2)}`);

const subtotal = line1Total + line2Total + line3Total;
console.log(`3c: Subtotal: $${subtotal.toFixed(2)}`)


const noconvertmultiple = item1Price * item1Qty;
const noconvertplus = item1Price + item1Qty;
console.log(`3c: without converting parseFloat: $${noconvertplus}, ${noconvertplus}`);
//without using parseFloat to convert the string item1Price into a number first. the program may mistaken it 
//as you are trying to convert the const variable into a string rather than the intended type which is number (see variable no convertplus).
//in rarecases, multiply operation can still work (see variable noconvert), since IN JS rules, * has no overloaded rule to fall back to, 
//other than (+), where in JS rules, it could mean you are trying to add a string/concat a string. or you are trying to do addition operation. we need to be specific on this.

// ----------------------------------------------------------
// TASK 4 — Apply discount and tax
// ----------------------------------------------------------
// The SAVE10 code gives 10% off the subtotal.
//
// a) const discountAmount = subtotal * 0.10;
//    const discountedSubtotal = subtotal - discountAmount;
//    Log: `Discount (10%): -$${discountAmount.toFixed(2)}`
//    Log: `After discount: $${discountedSubtotal.toFixed(2)}`
//
// b) const taxAmount = discountedSubtotal * taxRate;
//    const grandTotal = discountedSubtotal + taxAmount;
//    Log: `Tax (8%): $${taxAmount.toFixed(2)}`
//    Log: `Grand Total: $${grandTotal.toFixed(2)}`
//
// c) Check if the discount code is valid:
//    const isValidCode = discountCode.trim().toUpperCase() === "SAVE10";
//    Log: `Discount code valid: ${isValidCode}`
//    (No if/else yet — just log the boolean value)

console.log("\n--- Task 4: Discount and Tax ---");
// your code here
const discountAmount = subtotal * 0.10;
const discountedSubtotal = subtotal - discountAmount; // or subtotal - 0.1subtotal = 0.9subtotal
console.log(`4a: Discount (10%): -$${discountAmount.toFixed(2)}`);
console.log(`4a: After discount: $${discountedSubtotal.toFixed(2)}`);

const taxAmount = discountedSubtotal * taxRate;
const grandTotal = discountedSubtotal + taxAmount; // or discountSubtotal(1 + taxRate);
console.log(`4b: Tax (8%): $${taxAmount.toFixed(2)}`);
console.log(`4b: Grand Total: $${grandTotal.toFixed(2)}`);

const isValidCode = discountCode.trim().toUpperCase() === "SAVE10"; 
console.log(`4c: Discount code valid: ${isValidCode}`);
   

// ----------------------------------------------------------
// TASK 5 — Type checks and edge cases
// ----------------------------------------------------------
//
// a) Log the typeof each calculated total to confirm they're numbers:
//    Log: `typeof line1Total: ${typeof line1Total}`
//    Log: `typeof grandTotal: ${typeof grandTotal}`
//
// b) Check the orderStatus:
//    Log: `orderStatus: ${orderStatus}`
//    Log: `typeof orderStatus: ${typeof orderStatus}`
//    Log: `Boolean(orderStatus): ${Boolean(orderStatus)}`
//    Write a comment: what does null mean here in context?
//
// c) Demonstrate the coercion trap:
//    Log: `item1Price + item2Price = ${item1Price + item2Price}`
//    (The RAW strings, before converting — what do you get?)
//    Write a comment: why does this produce "79.9944.99"?

console.log("\n--- Task 5: Type Checks ---");
// your code here

console.log(`5a typeof line1Total: ${typeof line1Total}`);
console.log(`5a typeof grandTotal: ${typeof grandTotal}`);

console.log(`5b orderStatus: ${orderStatus}`);
console.log(`5b typeof orderStatus: ${typeof orderStatus}`);
console.log(`5b Boolean(orderStatus): ${Boolean(orderStatus)}`);
//null usually means absence of value. it can translate to 0 in JS during math operation or relational comparsion.

console.log(`5c item1Price + item2Price = ${item1Price + item2Price}`);
//because in js terms if you dont convert either one of the variable to Number, the js automatically assume you trying to send over a string instead so js will concat itemprice1 79.99  and itemprice2 44.99 together which ends up 79.9944.99.


 // ----------------------------------------------------------
// TASK 6 — Build the receipt header
// ----------------------------------------------------------
// Use a multiline template literal to build a receipt header.
//
// const receiptHeader = `
// ================================
// ${titleStore}
// ================================
// Customer: ${titleCustomer}
// Email:    ${cleanEmail}
// Date:     ${orderDate}
// Code:     ${cleanCode}
// ================================`;
//
// Log receiptHeader.
//
// (Use the clean variables from Task 1)

console.log("\n--- Task 6: Receipt Header ---");
// your code here

const receiptHeader = `
================================
${titleStore}
================================
Customer: ${customerName}
Email:    ${cleanEmail}
Date:     ${orderDate}
Code:     ${discountCodeClean}
================================`;

console.log(`6: ${receiptHeader}`);



// ----------------------------------------------------------
// TASK 7 — Build the receipt body
// ----------------------------------------------------------
// Build the line items section as a multiline template literal.
//
// Format each line: "Item Name           x qty    $total"
// Use .padEnd() to align the columns:
//   item1Name.padEnd(20) pads the string to 20 characters with spaces
//   This makes all item names the same width for alignment
//
// const receiptBody = `
// ${item1Name.padEnd(22)}x${item1Qty}    $${line1Total.toFixed(2)}
// ${item2Name.padEnd(22)}x${item2Qty}    $${line2Total.toFixed(2)}
// ${item3Name.padEnd(22)}x${item3Qty}    $${line3Total.toFixed(2)}
// --------------------------------
// Subtotal:              $${subtotal.toFixed(2)}
// Discount (SAVE10 10%): -$${discountAmount.toFixed(2)}
// Tax (8%):              $${taxAmount.toFixed(2)}
// --------------------------------
// TOTAL:                 $${grandTotal.toFixed(2)}`;
//
// Log receiptBody.

console.log("\n--- Task 7: Receipt Body ---");
// your code here

const receiptBody = `
${item1Name.padEnd(22)}x${item1Qty}    $${line1Total.toFixed(2)}
${item2Name.padEnd(22)}x${item2Qty}    $${line2Total.toFixed(2)}
${item3Name.padEnd(22)}x${item3Qty}    $${line3Total.toFixed(2)}
--------------------------------
Subtotal:              $${subtotal.toFixed(2)}
Discount (SAVE10 10%): -$${discountAmount.toFixed(2)}
Tax (8%):              $${taxAmount.toFixed(2)}
--------------------------------
TOTAL:                 $${grandTotal.toFixed(2)}`;


console.log(`7: ${receiptBody}`)

// ----------------------------------------------------------
// TASK 8 — Connect the dots: full receipt
// ----------------------------------------------------------
// Combine the header and body into one final receipt string.
//
// const fullReceipt = receiptHeader + receiptBody;
// Log fullReceipt.
//
// Then answer these as comments:
// Q1: What lesson taught you about the + operator? (Lesson 2)
// Q2: What lesson taught you to clean string data? (Lesson 3 — today)
// Q3: What would you need to learn to add a discount ONLY IF the
//     code is valid? (Conditionals — Lesson 4)
//
// The last question previews exactly where the curriculum goes next.

console.log("\n--- Task 8: Full Receipt ---");
// your code here

const fullReceipt = receiptHeader + receiptBody;

console.log(`8: ${fullReceipt}`);

//Q1: it usually used in concat string together. 
//Q2: it taught me string manipulation. it a challenging to seperate one letter from the rest of string. but with functions like splice/slice/split. it possible.
//Q3. i would think that the code must exist in some localstorage or database. the code must be cleaned accordingly like trim() to get rid of whitespace, and uppercase if necessary.

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — receipt stats
// ----------------------------------------------------------
// Using only what you know (variables, operators, string methods):
//
// a) Count the total number of items (not products, but units):
//    const totalItems = item1Qty + item2Qty + item3Qty;
//    Log: `Total items: ${totalItems}`
//
// b) Find the most expensive item (without conditionals — just math):
//    const highestPrice = Math.max(price1, price2, price3);
//    Log: `Highest price: $${highestPrice.toFixed(2)}`
//    (Math.max() is a built-in that works like an operator here)
//
// c) Calculate the average item price:
//    const avgPrice = (price1 + price2 + price3) / 3;
//    Log: `Average price: $${avgPrice.toFixed(2)}`
//
// d) Check if the customer's email domain is "pixelgadgets.com":
//    const isInternalEmail = cleanEmail.endsWith("@pixelgadgets.com");
//    Log: `Internal customer: ${isInternalEmail}`
const totalItems = item1Qty + item2Qty + item3Qty;
console.log(`Total items: ${totalItems}`);

const highestPrice = Math.max(price1, price2, price3);
console.log(`Highest price: $${highestPrice.toFixed(2)}`);

  const avgPrice = (price1 + price2 + price3) / 3;
console.log(`Average price: $${avgPrice.toFixed(2)}`);

// const isInternalEmail = cleanEmail.endsWith("@pixelgadgets.com");
const isInternalEmail = cleanEmail.includes("@pixelgadgets.com");
console.log(`Internal customer: ${isInternalEmail}`);
