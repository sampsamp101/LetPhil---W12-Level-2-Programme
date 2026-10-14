// ============================================================
// 🐛  APIs — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This parses a user API response and tries to log the city.
// It logs undefined. What's wrong?

const userJson = '{"id":1,"name":"Leanne Graham","address":{"street":"Kulas Light","city":"Gwenborough","zipcode":"92998-3874"}}';
const user = JSON.parse(userJson);
// What's wrong ↓
// you are trying to access city inside of address. when you run the command you get undefined, because the first layer of the 
//user json is not found (first layer -> id, name, address) -> (second layer-> stress, city, zipcode).
// Your fix ↓
//switch to user.address.city
console.log(`Debug 1: ${user.address.city}`);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This builds a query string but produces the wrong result.
// It outputs "?&userId=1&_limit=5" with a leading & after ?.
// What's wrong?

// function buildQuery(params) {
//   let query = "?";
//   Object.keys(params).forEach(function(key) {
//     query += "&" + key + "=" + params[key];
//   });
//   return query;
// }


// Actual:   "?&userId=1&_limit=5"
// Expected: "?userId=1&_limit=5"

// What's wrong ↓
// in the original function you trying to addon &${key}={params[key]} then another &${key}={param[key]}, which is wrong
// the start of queryString should always start with ?{key} not ?&{key}
// you can create an array, push in all of the key and values first with split("=")
//afterwards you prepend ? with unshift.
//then return the newQuery from there.
// Your fix ↓
function buildQuery(params) {
  let query = "?";
  let queryArr = [];
  Object.keys(params).forEach(function(key) {
    queryArr.push(key.split("="));
    // console.log(queryArr);
  });
  queryArr.unshift("?");
  const newQuery = queryArr.join("&")
  return newQuery;
}

console.log(buildQuery({ userId: 1, _limit: 5 }));

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function is supposed to load user data from a mock
// API response and display a summary. It has TWO bugs —
// one causes incorrect output, one causes a crash.

const apiData = JSON.parse('{"status":200,"users":[{"id":1,"name":"Alex","role":"admin"},{"id":2,"name":"Sam","role":"member"}]}');
console.log(apiData);
function displayUsers(data) {
  console.log("Total users: " + data.length);  // Bug 1

  data.users.forEach(function(user) {
    console.log(user.name + " — " + user.role); // Bug 2
  });
}

function displayUsers(data) {
  // Bug 1 ↓ => you want to count the users instead. so use data.users.length, then from there you counting the number of objs inside the array which is two
  // reason why you get undefined, is because you counting an obj {status: 200}, then another array type [], which returns undefined.
  console.log("Total users: " + data.users.length);  // Bug 1

  //bug 2 so the bug is that you didnt put lower letter for r, which cause the program to not match the keys
  data.users.forEach(usersObj => {
    console.log(`${usersObj.name} - ${usersObj.role}`);
  });
}


// Your fix ↓
displayUsers(apiData);