// ============================================================
// 🐛  AXIOS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Same three bug categories as the fetch homework's debug set —
// find and fix each one, then explain what was wrong.
// (axios must be loaded — run these from index.html.)
// ============================================================

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should fetch weather data and log the temperature.
// Instead it logs undefined. What's wrong?

// async function getLondonTemp() {
//   const response = await axios.get(
//     WEATHER_API + "?latitude=51.51&longitude=-0.13&current_weather=true"
//   );
//   console.log("Temperature: " + response.data.temperature); // undefined
// }

// getLondonTemp();

// What's wrong ↓
// incorrect key access, use response.data.current_weather.temperature to access the magnitude 
// use response.data.current_weather_units to access the temperature units
async function getLondonTemp() {
  const response = await axios.get(
    WEATHER_API + "?latitude=51.51&longitude=-0.13&current_weather=true"
  );
  console.log("(Debug1) Temperature: " + response.data.current_weather.temperature + response.data.current_weather_units.temperature ); // undefined
}
getLondonTemp();
// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should log New York's temperature. Instead it crashes
// with a TypeError — and it happens INSTANTLY, before the
// request could possibly have finished. That timing is a clue.

// async function getNYTemp() {
//   const response = axios.get(
//     WEATHER_API + "?latitude=40.71&longitude=-74.01&current_weather=true"
//   );
//   console.log("Temp: " + response.data.current_weather.temperature);
// }

// getNYTemp();

// What's wrong ↓
// you missing out await on the axios async function
// always put await, response need a few time to draw response from the server
// or it will crash with type error since the function occurs instantly before the request have finished.
// Your fix ↓

async function getNYTemp() {
  const response = await axios.get(
    WEATHER_API + "?latitude=40.71&longitude=-74.01&current_weather=true"
  );
  console.log("(Debug2) Temp: " + response.data.current_weather.temperature);
}

getNYTemp();

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function fetches weather for a city and logs it.
// It has TWO bugs — one causes wrong data display, one causes
// a crash on a bad city key.

// const CITIES = {
//   "london": { name: "London", lat: 51.51, lon: -0.13 }
// };

// async function fetchCity(cityKey) {
//   const city = CITIES[cityKey];

//   try {
//     const response = await axios.get(
//       WEATHER_API + "?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true"
//     );
//     const temp = response.data.temperature; // Bug 1: wrong path to temperature
//     console.log(city.name + ": " + temp + "°C");
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// fetchCity("london");  // works (kinda)
// fetchCity("tokyo");   // Bug 2: crashes before even fetching

// Bug 1 ↓
//you draw temperature from incorrect key, you should draw from current_weather

// Bug 2 ↓
// there no data with the key "tokyo", create one under CITIES


// Your fix ↓

const CITIES = {
  "london": { name: "London", lat: 51.51, lon: -0.13 },
  "tokyo": {name: "tokyo", lat: 36.2, lon: 138},
}

async function fetchCity(cityKey) {
  const city = CITIES[cityKey];

  try {
    const response = await axios.get(
      WEATHER_API + "?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true"
    );
    const temp = response.data.current_weather.temperature;
  
    // Bug 1: wrong path to temperature
    console.log("(Debug3) " + city.name + ": " + temp + "°C");

  } catch (err) {
    console.error(err.message);
  }
}

fetchCity("london"); 
fetchCity("tokyo");   
