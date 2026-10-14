// ============================================================
// 🏠  APIs — HOMEWORK
// ============================================================
// API Exploration and JSON Navigation Exercises
//
// For this homework you will:
//   1. Open real API URLs in the browser
//   2. Copy responses and work with them as JS strings
//   3. Parse, navigate, and analyse the JSON data
//   4. Build URL utilities
//
// Open DevTools (F12 → Console) to see all output.
// Use the reference links on the page to explore the APIs.
// ============================================================

// ----------------------------------------------------------
// TASK 1 — Explore JSONPlaceholder users
// ----------------------------------------------------------
// Open this URL in your browser:
//   https://jsonplaceholder.typicode.com/users
//
// You will see an array of 10 user objects.
// Each user has: id, name, username, email, address, phone, website, company
//
// Copy the ENTIRE response (all 10 users) and paste it as a
// string assigned to the variable below.
//
// const usersJson = `[paste here]`;
//
// Then:
// a) Parse it: const users = JSON.parse(usersJson)
// b) Log how many users there are
// c) Log the name of the first user
// d) Log the email of the last user (use .length - 1)
// e) Log the city of the third user (address.city)
// f) Log the company name of user with id === 7

// Paste the JSON response here:
const usersJson = `[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]`; // ← replace [] with the real response
// Your code:
const users = JSON.parse(usersJson);
console.log(`Number of users: ${users.length}`);
console.log(`Name of first user: ${JSON.stringify(users[0].name)}`);
console.log(`Email of last user: ${JSON.stringify(users[users.length - 1].email)}`);
console.log(`City of third user: ${JSON.stringify(users[2].address.city)}`);
console.log(`Comy name of user with id of 7: ${JSON.stringify(users.filter(user => (user.id === 7))[0].company?.name)}`);
// ----------------------------------------------------------
// TASK 2 — Navigate nested data
// ----------------------------------------------------------
// Using the users array from Task 1:
//
// a) Use map to create an array of just the user names.
//    Log: "All users: " + names
//
// b) Use filter to find users whose email ends in ".biz"
//    (Hint: email.endsWith(".biz"))
//    Log how many there are and their names.
//
// c) Use find to get the user with username === "Samantha"
//    Log their full address:
//    user.address.street + ", " + user.address.city
//
// d) Use forEach to log each user's name and company:
//    "Name: [name] | Company: [company.name]"

console.log(`All users: ${JSON.stringify(users.map(user=> user.name))}`);
console.log(`Email length ending with biz: ${JSON.stringify(users.map(user=>user.email).filter(email=>email.endsWith(".biz")))}`);
console.log(`Filtered Email Length: ${JSON.stringify(users.map(user=>user.email).filter(email=>email.endsWith(".biz")).length)}`);
console.log(`All users with samantha, has full address: ${JSON.stringify(users.filter(user=>(user.username==="Samantha"))[0].address.street)} ${JSON.stringify(users.filter(user=>(user.username==="Samantha"))[0].address.city)}` );
users.forEach(user=>{
  console.log(`Name: ${user.name} | Company: ${user.company.name}`);
});

// ----------------------------------------------------------
// TASK 3 — Query parameters in practice
// ----------------------------------------------------------
// Open these URLs one at a time and answer the questions as comments.
//
// URL A: https://jsonplaceholder.typicode.com/posts?userId=3
// How many posts does user 3 have?
// Answer: 10 posts shown on api page
//
// URL B: https://jsonplaceholder.typicode.com/todos?userId=1&completed=true
// How many completed todos does user 1 have?
// Answer:11 completed status with true
//
// URL C: https://jsonplaceholder.typicode.com/todos?userId=1&completed=false
// How many incomplete todos does user 1 have?
// Answer:9 completed status with false
//
// URL D: https://jsonplaceholder.typicode.com/posts?_page=3&_limit=4
// What is the id of the first post on page 3?
// (Count: page 3 at limit 4 = posts starting at index 8, id 9)
// Answer: id starts with 9?
//
// Write a comment explaining what you'd change in URL D to get page 5://you build the baseurl 
// you build the baseUrl + queryString together. depends on what parameter you want, you set it according
//there several ways to do this, so first method is via using query starting with baseURL with ? + Parameters desired like using _page=5 which means you specifically only wants page 5 and limit to 4 posts per page, for multiple parameters you join them up with &
//second method is through slash method / https://jsonplaceholder.typicode.com/posts/5/comments, in this case you would want to target posts that has id of 5 and you retrieves the comments associated with that post.


// ----------------------------------------------------------
// TASK 4 — Build URLs with query params
// ----------------------------------------------------------
// Declare a function called buildApiUrl.
// Parameters: baseUrl (string), params (object)
//
// Inside:
//   - If params is empty (Object.keys(params).length === 0)
//     retur 
//   - Otherwise build the query string:
//       "?" + Object.keys(params)
//         .map(key => key + "=" + params[key])
//         .join("&")
//     return baseUrl + queryString

function buildApiUrl(baseUrl, params) {
  // your code here
  if (Object.keys(params).length === 0){
    return baseUrl;
  }
  else{
    const queryString = "?" + Object.keys(params).map(key => key + "=" + params[key]).join("&");
     return baseUrl + queryString;
  }
}

// Test it:
console.log(
  buildApiUrl("https://jsonplaceholder.typicode.com/todos", {
    userId: 1,
    completed: true,
  }),
);

console.log(
  buildApiUrl("https://jsonplaceholder.typicode.com/todos", {
    userId: 1,
    completed: false,
  }),
);

console.log(
  buildApiUrl("https://jsonplaceholder.typicode.com/todos", {
    userId: 1,
  }),
);

console.log(
  buildApiUrl("https://jsonplaceholder.typicode.com/posts", 
    { userId: 3 }),
);

console.log(
  buildApiUrl("https://jsonplaceholder.typicode.com/posts", { userId: 1 }),
);
// "https://jsonplaceholder.typicode.com/posts?userId=1"

console.log(
  buildApiUrl("https://jsonplaceholder.typicode.com/posts", {
    userId: 2,
    _limit: 5,
  }),
);


// "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=5"

console.log(buildApiUrl("https://jsonplaceholder.typicode.com/posts", {}));
// "https://jsonplaceholder.typicode.com/posts"  ← no ? when no params

// ----------------------------------------------------------
// TASK 5 — Work with the Open-Meteo weather API
// ----------------------------------------------------------
// Open this URL in your browser:
//   https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true
//
// This is a REAL weather API — no API key needed.
// You will see the current weather for New York City.
//
// Copy the response and paste it below.

const weatherJson = `{"latitude":40.710335,"longitude":-73.99308,"generationtime_ms":371.09196186065674,"utc_offset_seconds":0,"timezone":"GMT","timezone_abbreviation":"GMT","elevation":27.0,"current_weather_units":{"time":"iso8601","interval":"seconds","temperature":"°C","windspeed":"km/h","winddirection":"°","is_day":"","weathercode":"wmo code"},"current_weather":{"time":"2026-10-13T15:00","interval":900,"temperature":19.1,"windspeed":8.7,"winddirection":190,"is_day":1,"weathercode":1}}`; // ← replace {} with the real response

// Then:
// a) Parse it: const weather = JSON.parse(weatherJson)
// b) Log the current temperature
//    (Hint: weather.current_weather.temperature)
// c) Log the wind speed
// d) Log the weathercode
//    (Note: weathercode is a number. 0 = clear sky, 1-3 = cloudy,
//     45-48 = foggy, 51-67 = rain, 71-77 = snow, 80-99 = storms)
// e) Write a function called describeWeather that takes a weathercode
//    and returns a human-readable description using if/else:
//      0        → "☀️ Clear sky"
//      1, 2, 3  → "⛅ Partly cloudy"
//      45, 48   → "🌫️ Foggy"
//      (below 80 and above 3) → "🌧️ Rain or drizzle"
//      80 and above → "⛈️ Stormy"
//
// ⚠️ ORDER MATTERS: 45 and 48 are inside the "below 80 and
//    above 3" range too. Check them in the order listed above —
//    foggy BEFORE the wider rain range — or every foggy day
//    silently gets misclassified as rain. This is why if/else
//    (not just a series of separate ifs) matters here: once one
//    condition matches, the rest are skipped.
//    Log describeWeather(weather.current_weather.weathercode)

const weather = JSON.parse(weatherJson); //convert to obj
console.log(weather);
console.log(`current temperature is ${weather.current_weather.temperature} Celsius`);
console.log(`Wind speed is ${weather.current_weather.windspeed} m/s`);
console.log(`Weather code is ${weather.current_weather.weathercode}`)
console.log(`Note: weathercode is a number. 0 = clear sky, 1-3 = cloudy, 45-48 = foggy, 51-67 = rain, 71-77 = snow, 80-99 = storms)`);

function describeWeather(current_WeatherCode){
  return (current_WeatherCode >= 80) ? "⛈️ Stormy" : 
  (current_WeatherCode === 45 || current_WeatherCode === 48) ? "🌫️ Foggy" : 
  (current_WeatherCode <= 3 && current_WeatherCode > 0)? "⛅ Partly cloudy": 
  (current_WeatherCode < 80 && current_WeatherCode > 3) ? "🌧️ Rain or drizzle" :
  "☀️ Clear sky";
}

const tests = [
  [0,  "☀️ Clear sky"],
  [1,  "⛅ Partly cloudy"],
  [2,  "⛅ Partly cloudy"],
  [3,  "⛅ Partly cloudy"],
  [4,  "🌧️ Rain or drizzle"],   // just above 3
  [44, "🌧️ Rain or drizzle"],   // just before fog
  [45, "🌫️ Foggy"],
  [46, "🌧️ Rain or drizzle"],   // NOT fog
  [47, "🌧️ Rain or drizzle"],   // NOT fog
  [48, "🌫️ Foggy"],
  [49, "🌧️ Rain or drizzle"],   // just after fog
  [51, "🌧️ Rain or drizzle"],
  [67, "🌧️ Rain or drizzle"],
  [75, "🌧️ Rain or drizzle"],   // snow code, but spec has no snow category
  [79, "🌧️ Rain or drizzle"],   // just below 80
  [80, "⛈️ Stormy"],            // boundary
  [99, "⛈️ Stormy"],
];

tests.forEach(([input, expected]) => {
  const result = describeWeather(input);
  const status = result === expected ? "✅ PASS" : "❌ FAIL";
  console.log(`${status} | code ${input} → ${result}` +
    (result !== expected ? ` (expected ${expected})` : ""));
});

// Your code:
// ----------------------------------------------------------
// TASK 6 — Compare two cities
// ----------------------------------------------------------
// Open BOTH weather URLs from the reference panel on the page:
//   NYC:    latitude=40.71&longitude=-74.01
//   London: latitude=51.51&longitude=-0.13
//
// Paste each response below.

const nyc_Weather_Url =
  "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true";
const london_Weather_Url =
  "https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current_weather=true";

console.log(nyc_Weather_Url);
console.log(london_Weather_Url);

async function fetchWeatherData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching weather data: ${error}`);
  }
}

// Then:
// a) Parse both
// b) Compare temperatures:
//    "NYC: [temp]°C | London: [temp]°C"
// c) Log which city is warmer:
//    "The warmer city is: [city name]"
//    Use a ternary: nycTemp > londonTemp ? "New York" : "London"

async function task6(){
  const nycWeatherJson = await fetchWeatherData(nyc_Weather_Url); // ← NYC response
  const londonWeatherJson =  await fetchWeatherData(london_Weather_Url); // ← London response
  console.log(nycWeatherJson);
  console.log(londonWeatherJson);

  console.log(`b:Compare NYC and london temperatue, NYC: ${nycWeatherJson.current_weather.temperature}°C | London: ${londonWeatherJson.current_weather.temperature}°C`)
  const nycTemp = nycWeatherJson.current_weather.temperature;
  const londonTemp = londonWeatherJson.current_weather.temperature;
  console.log(`c: Logging which cities is warmer...
  ${(nycTemp > londonTemp) ? "New York is warmer than London!" : "London is warmer than New York"}`); 
}
task6();
// ----------------------------------------------------------
// TASK 7 — Status code scenario matching
// ----------------------------------------------------------
// For each scenario below, write the most likely status code
// AND a brief explanation. Write your answers as comments.
//
// Scenario 1: You request /users/9999 but no user has that id.
// Code + reason:
// 1. you can try with the above example https://jsonplaceholder.typicode.com/posts?userId=9999.
// you noticed that you get [], a return response is still a successful response from the api, so you get 200 code in this case.
// 2. you can try with https://jsonplaceholder.typicode.com/users/9999 as well
// running this will cause 404 not found error. which means that the url is valid but no user with 9999 id exists

// Scenario 2: You try to delete a post but you're not logged in.
// Code + reason: you would get 401 unauthorised, it means you dont have authorized credientials, so the server doesn't know who you are
//another similar code to 401 would be 403, which is unforbidden, it means you are logged in but not permitted to a specific features


//another example trying delete function with api
// to delete a post let try with https://jsonplaceholder.typicode.com/users example?

// DELETE /posts/1    → delete post with id 1

const simulate_403_Error = async(code) =>{
  try{
    const response = await fetch (`https://httpbin.org/status/${code}`);
    const data = await(response.data);
    return data;
  }
  catch(error){
    `Unable to return response! Error: ${error}`;
  }
}
simulate_403_Error(403).then(console.log);
//

// Scenario 3: You create a new post successfully.
// Code + reason: you would get 201 code, server acceptted the request and created a new resource.
//
async function addNewPost(){
  try{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
          {userId: 1,
            title: "New post", 
            body:"hello, i adding in new content as testing", 
           }),
      });
    if (!response.ok){
      return {success:false, status:response.status};
    }
    const newPost = await response.json();
    console.log(response.status);
    console.log(newPost);
    return newPost;
    }
    catch(error){
      return {success:false, status:error.message};
    }
};

async function checkAdded() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();      // now it's an array of 100 posts

  const newPost = await addNewPost();
  posts.push(newPost);

  console.log(posts.length);                // 101
  console.log(`last post is: ${JSON.stringify(posts[posts.length - 1])}`);     // your new post, id: 101
  const lastPost = posts[posts.length - 1];
  document.body.insertAdjacentHTML(
    "beforeend",
    `<p><strong>${lastPost.title}</strong> (id ${lastPost.id})<br>${lastPost.body}</p>`
  );
}

checkAdded();   
console.log(users);

// Scenario 4: You send a POST request with a required field missing.
// Code + reason: you get 400 bad request, will receive app.js:615  POST https://httpbin.org/status/400 400 (Bad Request)

const simulate_400_Error = async (code) => {
  try {
    const response = await fetch(`https://httpbin.org/status/${code}`, {
      method: "POST",
    });
    return response.status;
  } catch (error) {
    return `Unable to return response! Error: ${error}`;
  }
};

simulate_400_Error(400).then(console.log); // will receive app.js:553  GET https://httpbin.org/status/403 403 (Forbidden)
// Scenario 5: You request /posts and get back a list of 100 posts.
// Code + reason: you get 200 OK. the request has succeeeded in this case and server return the list
//

const request_Getting_100_list = async() =>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    console.log(response.status);
    console.log(posts.length);
    return posts;
  }
  catch(e){
    console.log(e);
  }
}
request_Getting_100_list();

// Scenario 6: The API database server crashes while processing your request.
// Code + reason: this usually indicates the environment has received 500 internal server error. the server received a valid request.
// but failed while processing it, so the problem is on the server side, not the client.
// 504 gateway timeout mean a proxy gave up waiting for the server to respond. 

const simulate_500_Error = async(code) =>{
  try{
    const response = await fetch (`https://httpbin.org/status/${code}`);
    const data = await(response.data);
    return data;
  }
  catch(error){
    `Unable to return response! Error: ${error}`;
  }
}

simulate_500_Error(500).then(console.log);
//will received app.js:653  GET https://httpbin.org/status/500 500 (Internal Server Error)

// ----------------------------------------------------------
// TASK 8 — Connect the dots: analyse user posts
// ----------------------------------------------------------
// This task combines everything:
// variables, functions, array methods, objects, and API data.
//
// Below is a mock response from /users/1 and /posts?userId=1
// (We use mocked data here so the task doesn't depend on
// copy-pasting — but the structure matches the real API exactly.)

const userMock = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  company: { name: "Romaguera-Crona" },
};

const postsMock = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident",
    body: "quia et suscipit...",
  },
  { userId: 1, id: 2, title: "qui est esse", body: "est rerum tempore..." },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem",
    body: "et iusto sed...",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe...",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam...",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam laborum",
    body: "ut aspernatur...",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat...",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam...",
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora",
    body: "consectetur animi...",
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita...",
  },
];

// Declare a function called analyseUser.
// Parameters: user (object), posts (array)
//
// Inside:
//   1. Log a profile header:
//      "=== " + user.name + " (@" + user.username + ") ==="
//
//   2. Log their location:
//      "📍 " + user.address.city
//
//   3. Log their company:
//      "🏢 " + user.company.name
//
//   4. Log their post count:
//      "📝 Posts: " + posts.length
//
//   5. Find the post with the shortest title (fewest characters)
//      and log: "Shortest title: " + shortestPost.title
//
//   6. Log all post titles using forEach:
//      "  • " + post.title
//
// Call analyseUser(userMock, postsMock)

function analyseUser(user, posts) {
  // your code here
  const profile_Header = `=== ${user.name} (@${user.username}) ===`;
  console.log(profile_Header);
  console.log(`📍 ${user.address.city}`);
  console.log(`🏢 ${user.company.name}`);
  console.log(`📝 Posts: ${posts.length}`);
  
  const shortestPost = posts.reduce((shortest, post) => 
      post.title.length < shortest.title.length ? post: shortest
);

  console.log(`Shortest title: ${shortestPost.title}`)
  posts.forEach(post => {
    console.log(`  • ${post.title}`);
  });
}

analyseUser(userMock, postsMock);
// ----------------------------------------------------------
// ⭐ STRETCH GOAL — URL parser
// ----------------------------------------------------------
// Declare a function called parseUrl.
// Parameter: url (string)
//
// Returns an object with:
//   {
//     base:   the part before the ?  (e.g. "https://api.example.com/posts")
//     params: an object of key-value pairs from the query string
//             (e.g. { userId: "1", _limit: "5" })
//   }
//
// Hints:
//   - url.includes("?") → check if there are params
//   - url.split("?") → splits into [base, queryString]
//   - queryString.split("&") → gives ["userId=1", "_limit=5"]
//   - Each pair.split("=") → gives ["userId", "1"]
//   - Build the params object using forEach
//
// Test it:
// parseUrl("https://jsonplaceholder.typicode.com/posts?userId=1&_limit=5")
// → { base: "https://jsonplaceholder.typicode.com/posts", params: { userId: "1", _limit: "5" } }
//
// parseUrl("https://jsonplaceholder.typicode.com/users")
// → { base: "https://jsonplaceholder.typicode.com/users", params: {} }

function parseUrl(url) {
  // your code here
  if (url.includes("?")){
      const [base, queryString] = url.split("?");
      const queryStringSplit = queryString.split("&");
      const paramsObj = {};
      queryStringSplit.forEach((query)=>{
        const key1 = query.split("=")[0];
        const val1 = query.split("=")[1];
        paramsObj[key1] = val1;
      })
      return {base, params:paramsObj};
  }
  else{
    return {base: url, params: {}};
  }
  
}

// TASK 8 — Build a query string manually
// Declare a function called buildQueryString.
// Parameter: paramsObject (an object of key-value pairs)
//
// Returns a query string starting with "?".
// Example:
//   buildQueryString({ userId: 1, _limit: 5 })
//   → "?userId=1&_limit=5"
//
// Hint: use Object.keys() and .map() to build the pairs,
// then .join("&"), then prepend "?".
function buildQueryString(paramsObject){
  
  const queryObjKeys = Object.keys(paramsObject).map((key) => 
    `${key}=${paramsObject[key]}`, 
  );
  const query = `?${queryObjKeys.join("&")}`;
  return query;
}

console.log(
buildQueryString({ userId: 1, _limit: 5 }));

console.log(parseUrl("https://jsonplaceholder.typicode.com/posts?userId=1&_limit=5"));
//returns {base: 'https://jsonplaceholder.typicode.com/posts', params: {…}}
// base  : "https://jsonplaceholder.typicode.com/posts"
// params : {userId: '1', _limit: '5'}
// [[Prototype]]
// : 
// Object

console.log(parseUrl("https://jsonplaceholder.typicode.com/users"));
// {base: 'https://jsonplaceholder.typicode.com/users', params: {…}}
// base : "https://jsonplaceholder.typicode.com/users"
// params: {}
