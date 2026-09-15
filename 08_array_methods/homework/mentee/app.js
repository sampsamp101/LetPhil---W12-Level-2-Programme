// ============================================================
// 🏠  ARRAY METHODS — HOMEWORK
// ============================================================
// Mini Project: Order Processing System
//
// Process a set of customer orders using ONLY array methods.
// No manual for loops allowed for this homework.
// Every task must use forEach, map, filter, find, some,
// every, or reduce.
//
// All output goes to the console. No HTML edits needed.
// ============================================================
<<<<<<< HEAD
=======

>>>>>>> upstream/main
// ============================================================
// THE DATA — do not modify this
// ============================================================
const orders = [
  {
    id: 1001,
    customer: "Maya Chen",
    total: 124.99,
    status: "delivered",
    items: 3,
    isPriority: false,
  },
  {
    id: 1002,
    customer: "Liam Torres",
    total: 49.99,
    status: "pending",
    items: 1,
    isPriority: true,
  },
  {
    id: 1003,
    customer: "Sofia Patel",
    total: 239.5,
    status: "delivered",
    items: 5,
    isPriority: true,
  },
  {
    id: 1004,
    customer: "Ethan Kim",
    total: 18.0,
    status: "cancelled",
    items: 1,
    isPriority: false,
  },
  {
    id: 1005,
    customer: "Zoe Williams",
    total: 89.99,
    status: "pending",
    items: 2,
    isPriority: false,
  },
  {
    id: 1006,
    customer: "Carlos Ruiz",
    total: 310.0,
    status: "delivered",
    items: 7,
    isPriority: true,
  },
  {
    id: 1007,
    customer: "Ava Johnson",
    total: 55.25,
    status: "pending",
    items: 2,
    isPriority: false,
  },
];

// ----------------------------------------------------------
// TASK 1 — Display all orders (forEach)
// ----------------------------------------------------------
// Use forEach to log a summary of every order.
// Format each line as:
//   "#" + order.id + " | " + order.customer
//   + " | $" + order.total
//   + " | " + order.status.toUpperCase()
<<<<<<< HEAD
for (let i = 0; i < orders.length; i++){
  console.log(`# ${orders[i].id} | ${orders[i].customer} | $${orders[i].total} | ${orders[i].status.toUpperCase()}`);
}
=======
>>>>>>> upstream/main

// ----------------------------------------------------------
// TASK 2 — Build receipt strings (map)
// ----------------------------------------------------------
// Use map to create a new array called receipts.
// Each element should be a formatted string:
//   "Order #" + order.id + " — " + order.customer
//   + " — $" + order.total + " (" + order.items + " item(s))"
//
// Log receipts.length to confirm it matches orders.length.
// Use forEach on receipts to log each one.

<<<<<<< HEAD
let receipts = orders.map((order)=>{return `Order # ${order.id} - ${order.customer} - $${order.total} (${order.items} item(s))`});
console.log(`Total amount of receipts: ${receipts.length}`);

receipts.forEach((receipt)=>{
  console.log(receipt);
})

=======
>>>>>>> upstream/main
// ----------------------------------------------------------
// TASK 3 — Build order summary objects (map)
// ----------------------------------------------------------
// Use map to create a new array called summaries.
// Each element should be a NEW object with only:
//   { id: order.id, customer: order.customer, total: order.total }
//
// Log summaries.

<<<<<<< HEAD
const summaries = orders.map((order)=>{
      return {
          id: order.id,
          customer: order.customer,
          total: order. total,
      }
});

console.log(summaries);

=======
>>>>>>> upstream/main
// ----------------------------------------------------------
// TASK 4 — Filter by status (filter)
// ----------------------------------------------------------
// Use filter to get only delivered orders → store in deliveredOrders.
// Use filter to get only pending orders   → store in pendingOrders.
// Use filter to get only cancelled orders → store in cancelledOrders.
//
// Log:
//   "Delivered: " + deliveredOrders.length
//   "Pending:   " + pendingOrders.length
//   "Cancelled: " + cancelledOrders.length

<<<<<<< HEAD
const deliveredOrders = orders.filter((order) => {
  return (order.status !== "delivered");
})

const pendingOrders = orders.filter((order) => {
  return (order.status !== "pending");
})

const cancelledOrders = orders.filter((order) => {
  return (order.status !== "cancelled");
})

console.log(`Delivered: ${deliveredOrders.length}`);
console.log(`Pending: ${pendingOrders.length}`);
console.log(`Cancelled: ${cancelledOrders.length}`);

=======
>>>>>>> upstream/main
// ----------------------------------------------------------
// TASK 5 — High value orders (filter + map chained)
// ----------------------------------------------------------
// Use filter to get orders with total > 100.
// Chain map to extract just the customer names.
// Store the result in highValueCustomers.
//
// Log: "High value customers: " + highValueCustomers
<<<<<<< HEAD
const highValueCustomers = orders.filter((order)=> (order.total > 100)).map((order) => (order.customer));
console.log(`High value customers: ${highValueCustomers}`);
=======
>>>>>>> upstream/main

// ----------------------------------------------------------
// TASK 6 — Find a specific order (find)
// ----------------------------------------------------------
// Use find to locate the order with id === 1005.
// Store it in foundOrder.
// Log: "Found: " + foundOrder.customer + " — $" + foundOrder.total
//
// Then use find to search for id === 9999.
// Store it in missingOrder.
// Log missingOrder.
// Write a comment: what does find return when nothing matches?

<<<<<<< HEAD
const foundOrder = orders.find((order) => (order.id === 1005));
console.log(`Found: ${foundOrder.customer} - ${foundOrder.total}`);

// const missingOrder = orders.find((order)=> (order.id === 9999));
// console.log(`Missing: ${missingOrder.customer} - ${missingOrder.total}`);

//getting undefined properties (id doesn't exist in orders obj collection array)

=======
>>>>>>> upstream/main
// ----------------------------------------------------------
// TASK 7 — Ask questions about the data (some + every)
// ----------------------------------------------------------
// Write your prediction as a comment BEFORE each one, then run.
//
// Use some → is there at least one priority order?
//   Store in hasPriorityOrder.
//   Log: "Has priority order: " + hasPriorityOrder     // prediction:
//
// Use some → is there at least one order over $300?
//   Store in hasHighValueOrder.
//   Log: "Has $300+ order: " + hasHighValueOrder        // prediction:
//
// Use every → are ALL orders either delivered or pending?
//   Store in allActive.
//   Log: "All active: " + allActive                     // prediction:
//
// Use every → do ALL priority orders have more than 1 item?
//   Hint: filter for isPriority first, then chain every
//   Store in allPriorityMultiItem.
//   Log: "All priority multi-item: " + allPriorityMultiItem // prediction:

<<<<<<< HEAD
const hasPriorityOrder = orders.some((order) => (order.isPriority === true));
console.log(hasPriorityOrder);

const hasHighValueOrder = orders.some((order)=> (order.total >= 300));
console.log(hasHighValueOrder);

const allActive = orders.every((order) => (order.status === "delivered" || order.status === "pending"));
console.log(allActive);

const allPriorityMultiItem = orders.filter((order)=> (order.items > 1)).every((order) => (order.isPriority === true));
console.log(allPriorityMultiItem);
=======
>>>>>>> upstream/main
// ----------------------------------------------------------
// TASK 8 — Calculate totals (reduce)
// ----------------------------------------------------------
// Use reduce to calculate the total revenue from ALL orders.
// Start the accumulator at 0.
// Store in totalRevenue.
// Log: "Total revenue: $" + totalRevenue
//
// Use reduce to count the total number of items across all orders.
// Store in totalItems.
// Log: "Total items ordered: " + totalItems
//
// Calculate and log the average order value:
//   const averageOrder = totalRevenue / orders.length
//   Log: "Average order value: $" + averageOrder

<<<<<<< HEAD
const totalRevenue = orders.reduce((totalrev, order)=>{
    return totalrev+ order.total;
}, 0);

console.log(`Total revenue: $${totalRevenue}`);

const totalItems = orders.reduce((totalitems,order)=>{  
    return totalitems + order.items;
}, 0);

console.log(`Total items: ${totalItems}`);
const averageOrder = (totalRevenue / totalItems).toFixed(2);

console.log(`Average order value: $${averageOrder}`);

=======
>>>>>>> upstream/main
// ----------------------------------------------------------
// TASK 9 — Connect the dots (filter + reduce)
// ----------------------------------------------------------
// Calculate the revenue from DELIVERED orders only.
//   Step 1: filter for delivered orders
//   Step 2: reduce to sum their totals
//   Store in deliveredRevenue.
//   Log: "Delivered revenue: $" + deliveredRevenue
//
// Calculate the revenue from PENDING orders only.
//   Same approach. Store in pendingRevenue.
//   Log: "Pending revenue: $" + pendingRevenue
//
// Then log:
//   "Unconfirmed revenue: $" + pendingRevenue
//   (This is money that hasn't been secured yet)

<<<<<<< HEAD
const deliveredRevenue = orders.filter((order)=>(order.status === "delivered")).reduce((totalRev, order)=> (totalRev, order.total), 0);
console.log(`Delivered revenue: $${deliveredRevenue}`);

const pendingRevenue = orders.filter((order)=>(order.status === "pending")).reduce((totalRev, order)=> (totalRev, order.total), 0);
console.log(`pending revenue: $${pendingRevenue}`);

console.log(`Unconfirmed revenue: $${pendingRevenue}`);

=======
>>>>>>> upstream/main
// ----------------------------------------------------------
// TASK 10 — Full pipeline (all methods)
// ----------------------------------------------------------
// Build a priority order report in these steps:
//
// Step 1: filter orders where isPriority is true
//         → store in priorityOrders
//
// Step 2: use every on priorityOrders to check if ALL
//         priority orders have been delivered
//         → store in allPriorityDelivered
//         → log: "All priority delivered: " + allPriorityDelivered
//
// Step 3: use reduce on priorityOrders to get the
//         total value of priority orders
//         → store in priorityRevenue
//         → log: "Priority revenue: $" + priorityRevenue
//
// Step 4: use map on priorityOrders to build display strings:
//         "⚡ #" + order.id + " " + order.customer + " — $" + order.total
//         → store in priorityDisplay
//
// Step 5: use forEach on priorityDisplay to log each line

<<<<<<< HEAD
const priorityOrders = orders.filter((order)=>(order.isPriority === true));

const allPriorityDelivered = priorityOrders.every((order)=>(order.status === "delivered"));
console.log(`All priority delivered: ${allPriorityDelivered}`);

const priorityRevenue = priorityOrders.reduce((priorityRevenue, order)=>{
  return priorityRevenue + order.total;
},0)

const priorityDisplay = priorityOrders.map((order)=> {
    return (`⚡ # ${order.id} ${order.customer}- $ ${order.total}`);
});

priorityDisplay.forEach((display)=>{
  console.log(display);
})

=======
>>>>>>> upstream/main
// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Status report object (reduce)
// ----------------------------------------------------------
// Use reduce to build a SINGLE summary object from all orders.
// The object should have this shape:
//   {
//     totalOrders:    number,
//     totalRevenue:   number,
//     deliveredCount: number,
//     pendingCount:   number,
//     cancelledCount: number,
//     priorityCount:  number
//   }
//
// Start the accumulator as an object:
//   { totalOrders: 0, totalRevenue: 0, deliveredCount: 0,
//     pendingCount: 0, cancelledCount: 0, priorityCount: 0 }
//
// On each iteration, increment the right properties.
// Store the result in a const called report.
// Log report.
//
// Hint: inside the reduce callback, update acc properties and return acc.
<<<<<<< HEAD

const objAccumulator = { totalOrders: 0, totalRevenue: 0, deliveredCount: 0, pendingCount: 0, cancelledCount: 0, priorityCount: 0 };

const report = orders.reduce((objAcc, order) => {
  objAcc.totalOrders += order.items;
  objAcc.totalRevenue += order.total;

  if (order.status === "delivered") {
    objAcc.deliveredCount += 1;
  } else if (order.status === "pending") {
    objAcc.pendingCount += 1;
  } else if (order.status === "cancelled") {
    objAcc.cancelledCount += 1;
  }

  if (order.isPriority === true) {
    objAcc.priorityCount += 1;
  }

  return objAcc;
}, objAccumulator);


console.log(report);
=======
>>>>>>> upstream/main
