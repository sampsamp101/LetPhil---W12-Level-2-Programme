// ============================================================
// 🏠  FETCH API — HOMEWORK
// ============================================================
// Mini Project: Weather Dashboard
//
// Fetch real weather data from Open-Meteo (free, no API key).
// Render weather cards to the DOM.
// Handle loading states and errors.
//
// API: https://api.open-meteo.com/v1/forecast
// Params: latitude, longitude, current_weather=true
// ============================================================

// ============================================================
// CITY DATA — coordinates for each city in the dropdown
// ============================================================
const CITIES = {
  "new-york": { name: "New York", lat: 40.71, lon: -74.01 },
  london: { name: "London", lat: 51.51, lon: -0.13 },
  tokyo: { name: "Tokyo", lat: 35.68, lon: 139.69 },
  sydney: { name: "Sydney", lat: -33.87, lon: 151.21 },
  paris: { name: "Paris", lat: 48.85, lon: 2.35 },
  dubai: { name: "Dubai", lat: 25.2, lon: 55.27 },
};

const WEATHER_API = "https://api.open-meteo.com/v1/forecast";

// ============================================================
// WEATHER CODE HELPER
// ============================================================
// Open-Meteo uses WMO weather codes. This function converts
// a code to a human-readable label and emoji.
function getWeatherDescription(code) {
  if (code === 0) {
    return { label: "Clear sky", icon: "☀️" };
  }
  if (code >= 1 && code <= 3) {
    return { label: "Partly cloudy", icon: "⛅" };
  }
  if (code >= 45 && code <= 48) {
    return { label: "Foggy", icon: "🌫️" };
  }
  if (code >= 51 && code <= 67) {
    return { label: "Rain", icon: "🌧️" };
  }
  if (code >= 71 && code <= 77) {
    return { label: "Snow", icon: "❄️" };
  }
  if (code >= 80 && code <= 82) {
    return { label: "Rain showers", icon: "🌦️" };
  }
  if (code >= 95 && code <= 99) {
    return { label: "Thunderstorm", icon: "⛈️" };
  }
  return { label: "Unknown", icon: "🌡️" };
}

// -------------------------------------
// 

// Declare a function called safeFetch.
// Parameter: url (string)
//
// Returns a fetch chain that:
//   1. Checks response.ok — if false, throws an Error with the
//      message: "HTTP " + response.status + ": " + response.statusText
//   2. Parses the body with response.json()
//   3. Returns the result (so callers can .then chain it)
//
// This is the same helper from the live class.

function safeFetch(url) {
  return fetch(url).then((response)=> {
     if(!response.ok){
       throw new Error(`HTTP ${response.status}: ${response.statusText}`);
     }
     return response.json()
  });
}

// // Test 1: success, should print the user's name
// safeFetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((data) => console.log("Test 1 OK:", data.name))
//   .catch((err) => console.log("Test 1 FAILED:", err.message));

// // Test 2: 404, should print "HTTP 404: Not Found"
// safeFetch("https://jsonplaceholder.typicode.com/users/99999")
//   .then((data) => console.log("Test 2 FAILED, got data:", data))
//   .catch((err) => console.log("Test 2 OK:", err.message));

// // Test 3: chaining, the result should pass through to the next .then
// safeFetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((post) => post.title)
//   .then((title) => console.log("Test 3 OK:", title))
//   .catch((err) => console.log("Test 3 FAILED:", err.message));

// ----------------------------------------------------------
// TASK 2 — DOM helpers
// ----------------------------------------------------------
// Declare these short helper functions:
//
// getEl(id)           → document.getElementById(id)
// showSpinner(msg)    → remove "hidden" from #loading-spinner
//                       set #loading-message textContent to msg
// hideSpinner()       → add "hidden" to #loading-spinner
// showError(msg)      → remove "hidden" from #error-box
//                       set #error-message textContent to msg
// hideError()         → add "hidden" to #error-box
// showStatus(msg, type) → TWO separate writes, to TWO elements:
//                       1. Set #status-bar's className to
//                          "status-bar " + (type || "")
//                          (type is "success", "error", or "" —
//                           matches the CSS variants in style.css)
//                       2. Set #status-message's (a CHILD span
//                          inside #status-bar) textContent to msg
// hideStatus()        → add "hidden" to #status-bar

function getEl(id) {
  return document.getElementById(id);
}

function showSpinner(msg) {
  // your code here
  const loadingSpinnerEle = document.getElementById("loading-spinner");
  const loadingMessageEle = document.getElementById("loading-message"); 
  if (!loadingSpinnerEle || !loadingMessageEle){
    return;
  }
  loadingSpinnerEle.classList.remove("hidden");
  loadingMessageEle.textContent = msg;
}

function hideSpinner() {
  // your code here
  const loadingSpinnerEle = document.getElementById("loading-spinner");
  if (!loadingSpinnerEle){
    return;
  }
  loadingSpinnerEle.classList.add("hidden");
}

function showError(msg) {
  // your code here
  // showError(msg)      → remove "hidden" from #error-box
  //set #error-message textContent to msg
  const showErrorBoxEle = document.getElementById("error-box");
  const showErrorMsgEle = document.getElementById("error-message");
  if (!showErrorBoxEle || !showErrorMsgEle){
    return;
  }
  showErrorBoxEle.classList.remove("hidden");
  showErrorMsgEle.textContent = msg;
}

function hideError() {
  // your code here
  const errorBoxEle = document.getElementById("error-box");
  if(!errorBoxEle){
    return;
  }
  errorBoxEle.classList.add("hidden");
}

function showStatus(msg, type) {
  // your code here
  const statusBarElement = document.getElementById("status-bar");
  const statusMsgElement = document.getElementById("status-message");

  if (!statusBarElement || !statusMsgElement){
      return;
  }

  statusBarElement.className =  "status-bar " + (type || "")
  statusMsgElement.textContent = msg;
} 

function hideStatus() {
  // your code here
  const highStatus = document.getElementById("status-bar");
  if (!highStatus){
    return;
  }
  highStatus.classList.add("hidden");
}

// ----------------------------------------------------------
// TASK 3 — buildWeatherUrl
// ----------------------------------------------------------
// Declare a function called buildWeatherUrl.
// Parameter: city (object with lat, lon properties)
//
// Returns the full API URL with query parameters:
//   WEATHER_API + "?latitude=" + city.lat
//              + "&longitude=" + city.lon
//              + "&current_weather=true"

function buildWeatherUrl(city) {
  return  WEATHER_API + "?latitude=" + city.lat
              + "&longitude=" + city.lon
              + "&current_weather=true";
}

// Test it:
// console.log(buildWeatherUrl(CITIES["london"]));
// Expected: "https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&current_weather=true"

// ----------------------------------------------------------
// TASK 4 — createWeatherCard
// ----------------------------------------------------------
// Declare a function called createWeatherCard.
// Parameters: cityName (string), data (parsed API response)
// The weather data lives at data.current_weather:
//   data.current_weather.temperature   → number (°C)
//   data.current_weather.windspeed     → number (km/h)
//   data.current_weather.winddirection → number (degrees)
//   data.current_weather.weathercode   → number (WMO code)
//
// Build and return a <div class="weather-card"> containing:
//   1. <p class="city-name"> → cityName
//   2. <p class="coord-text"> → "Lat: " + lat + " | Lon: " + lon
//      (from data.latitude and data.longitude)
//   3. <span class="weather-icon"> → getWeatherDescription(code).icon
//   4. <p class="temperature"> → temperature + "°C"
//   5. <p class="condition"> → getWeatherDescription(code).label
//   6. A <div class="weather-stats"> containing two stat divs:
//      Wind speed: windspeed + " km/h"
//      Wind dir:   winddirection + "°"
//
// Each stat div has:
//   <p class="stat-label">WIND SPEED</p>
//   <p class="stat-value">12 km/h</p>
//
// Return the card.

function createWeatherCard(cityName, data) {
  const newCardElement = document.createElement("div");
  newCardElement.classList.add("weather-card");

  newCardElement.innerHTML += `<p class="city-name"> 
       ${cityName}
      </p>
      <p class="coord-text"> 
        Lat: ${data.latitude} | Lon: ${data.longitude}
      </p>
      <span class="weather-icon"> 
      ${getWeatherDescription(data.current_weather.weathercode).icon}
      </span>
      <p class="temperature"> 
        ${data.current_weather.temperature}°C
      </p>
      <p class="condition"> 
        ${getWeatherDescription(data.current_weather.weathercode).label} °C
      </p>
      <div class="weather-stats"> 

          <p class="stat-label">WIND SPEED</p>
          <p class="stat-value">
          ${data.current_weather.windspeed} km/h
          </p>
          
          <p class="stat-label">WIND DIRECTION</p>
          <p class="stat-value">
          ${data.current_weather.winddirection}°
          </p>
      </div>`;

    return newCardElement;
}

// ----------------------------------------------------------
// TASK 5 — fetchWeatherForCity
// ----------------------------------------------------------
// Declare a function called fetchWeatherForCity.
// Parameter: cityKey (string — the key in CITIES object)
//
// Inside:
//   1. Get the city object: CITIES[cityKey]
//   2. If no city found → showError("City not found") and return
//   3. Show a temporary loading card in the grid:
//      Create a <div class="card-loading" id="loading-" + cityKey>
//      With content: <div class="spin"></div><span>Loading [city.name]...</span>
//      Append to #weather-grid
//   4. Build the URL: buildWeatherUrl(city)
//   5. Call safeFetch(url):
//      .then(function(data) {
//        Remove the loading card: document.getElementById("loading-" + cityKey)?.remove()
//        Build the real card: createWeatherCard(city.name, data)
//        Append it to #weather-grid
//      })
//      .catch(function(err) {
//        Remove loading card
//        showError("Failed to fetch " + city.name + ": " + err.message)
//      })
function fetchWeatherForCity(cityKey) {
  const city = CITIES[cityKey];
  if (!city) {
    showError("City not found");
    return;
  }

  const weatherGridEle = document.getElementById("weather-grid");
  if (!weatherGridEle) {
    return;
  }

  const newLoadingCard = document.createElement("div");
  newLoadingCard.className = "card-loading";
  newLoadingCard.id = `loading-${cityKey}`;

  const newSpinningIcon = document.createElement("div");
  newSpinningIcon.className = "spin";

  const newSpanLoading = document.createElement("span");
  newSpanLoading.textContent = `Loading ${city.name}...`;

  newLoadingCard.append(newSpinningIcon, newSpanLoading);
  weatherGridEle.appendChild(newLoadingCard);

  safeFetch(buildWeatherUrl(city))
    .then(function (data) {
      document.getElementById(`loading-${cityKey}`)?.remove();
      weatherGridEle.appendChild(createWeatherCard(city.name, data));
    })
    .catch(function (err) {
      document.getElementById(`loading-${cityKey}`)?.remove();
      showError("Failed to fetch " + city.name + ": " + err.message);
    });
}

// ----------------------------------------------------------
// TASK 6 — handleFetchWeather (button click)
// ----------------------------------------------------------
// Declare a function called handleFetchWeather.
//
// Inside:
//   1. Get the selected city key from #city-select
//   2. If empty → showError("Please select a city") and return
//   3. hideError()
//   4. Call fetchWeatherForCity(cityKey)
//
// Wire it up:
//   document.getElementById("fetch-weather-btn")
//     .addEventListener("click", handleFetchWeather)

function handleFetchWeather() {
  // your code here
  const selectedCityKeyEle = document.getElementById("city-select");
  if (!selectedCityKeyEle){
    return;
  }
  if (!selectedCityKeyEle.value){
    showError("Please select a city");
    return;
  }
  hideError();
  const cityKey = selectedCityKeyEle.value;
  fetchWeatherForCity(cityKey);
}

document
  .getElementById("fetch-weather-btn")
  .addEventListener("click", handleFetchWeather);

// ----------------------------------------------------------
// TASK 7 — fetchAllCities
// ----------------------------------------------------------
// Declare a function called fetchAllCities.
//
// Inside:
//   1. Clear the grid: getEl("weather-grid").innerHTML = ""
//   2. hideError()
//   3. showStatus("🌍 Fetching all cities...", "")
//   4. Get all city keys: Object.keys(CITIES)
//   5. For each key, call fetchWeatherForCity(key)
//      (This fires 6 parallel fetch calls — they all run at once)
//   6. showStatus("✅ All cities loaded", "success")
//      ⚠️  Note: the status shows immediately — the fetches are still
//      running. The cards appear as each one completes.
//      This is the nature of async code — we'll see Promise.all in Axios.
//
// Wire it up:
//   document.getElementById("fetch-all-btn")
//     .addEventListener("click", fetchAllCities)

function fetchAllCities() {
  // your code here
  document.getElementById("weather-grid").innerHTML = "";
  hideError();
  showStatus("🌍 Fetching all cities...", "");

  for (const citiesKeys of Object.keys(CITIES)){
    fetchWeatherForCity(citiesKeys);
  }
 showStatus("✅ All cities loaded", "success")
}

// document
//   .getElementById("fetch-all-btn")
//   .addEventListener("click", fetchAllCities);

// ----------------------------------------------------------
// TASK 8 — clear all
// ----------------------------------------------------------
// Wire up #clear-btn:
//   - Clear the grid
//   - hideError(), hideStatus()
//   - Reset #city-select to ""

document.getElementById("clear-btn").addEventListener("click", function () {
  // your code here
    getEl("weather-grid").innerHTML = "";
    hideError();
    hideStatus();
    const citySelectField = document.getElementById("city-select");
    citySelectField.value = "";
});

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — Promise.all for parallel fetches
// ----------------------------------------------------------
// fetchAllCities fires 6 requests and shows "All cities loaded"
// BEFORE any of them complete. That's misleading.
//
// Use Promise.all to wait for ALL fetches to complete first:
//
// Declare a function called fetchAllCitiesParallel.
//
// Inside:
//   1. Clear the grid
//   2. showSpinner("Fetching all cities...")
//   3. Get all city keys with Object.keys(CITIES)
//   4. Build an array of fetch promises:
//      const promises = Object.keys(CITIES).map(function(key) {
//        return safeFetch(buildWeatherUrl(CITIES[key]))
//          .then(function(data) {
//            return { key, data };  // wrap with the key so we know which city
//          });
//      });
//   5. Promise.all(promises)
//      .then(function(results) {
//        results.forEach(function(result) {Object.keys(CITIES)
//          const city = CITIES[result.key];
//          const card = createWeatherCard(city.name, result.data);
//          getEl("weather-grid").appendChild(card);
//        });
//        showStatus("✅ All " + results.length + " cities loaded", "success");
//      })
//      .catch(function(err) {
//        showError("One or more cities failed: " + err.message);
//      })
//      .finally(() => hideSpinner());
//
// Write a comment: what does Promise.all do differently from
// calling fetchWeatherForCity in a loop?

function fetchAllCitiesParallel() {
  // your code here
    getEl("weather-grid").innerHTML = "";
    showSpinner("Fetching all cities...");

    const promises = Object.keys(CITIES).map(function(key) {
    return safeFetch(buildWeatherUrl(CITIES[key]))
      .then(function(data) {
        return { key, data };  
      });
  });

    Promise.all(promises)
     .then(function(results) {
       results.forEach(function(result) {
         const city = CITIES[result.key];
         const card = createWeatherCard(city.name, result.data);
         getEl("weather-grid").appendChild(card);
       });
       showStatus("✅ All " + results.length + " cities loaded", "success");
     })
     .catch(function(err) {
       showError("One or more cities failed: " + err.message);
     })
     .finally(() => hideSpinner());
}

document
  .getElementById("fetch-all-btn")
  .addEventListener("click", fetchAllCities);


// an observation between fetchAllCities and fetchAllCitiesParalllel
// is that fetchAllCities seems to load everything one by one once their fetching is completed if you 
// click on fetch all btn.
// if you use promise.all, you ensure all async operation is done before
// proceeding to load all info cards on the screen.
