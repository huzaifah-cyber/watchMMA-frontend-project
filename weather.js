const apiKey = "c8444d0a134593b4fc3361f2589aa9bf";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial";

// Getting references to the HTML elements
const form = document.getElementById("weather");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const errorMessage = document.getElementById("weather-error");
const status = document.getElementById("weather-status");
const results = document.getElementById("weather-results");

// Handles form submission and prevents the default page reload
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Getting the latitude and longitude values entered by the user
  const latText = latitude.value.trim();
  const lonText = longitude.value.trim();

  const lat = Number(latText);
  const lon = Number(lonText);

  // Clears previous results and messages
  results.hidden = true;
  status.textContent = "";
  errorMessage.textContent = "";
  errorMessage.style.display = "none";

  if (
    latText === "" ||
    lonText === "" ||
    !Number.isFinite(lat) ||
    !Number.isFinite(lon) ||
    lat < -90 ||
    lat > 90 ||
    lon < -180 ||
    lon > 180
  ) {
    errorMessage.textContent =
      "Enter a valid latitude (-90 to 90) and longitude (-180 to 180).";

    errorMessage.style.display = "block";
    console.log("Invalid coordinates entered.");
    return;
  }

  status.textContent = "Loading weather data...";

  checkWeather(lat, lon);
});

// Function to retrieve weather information from the OpenWeatherMap API
async function checkWeather(lat, lon) {
  try {
    const url = `${apiURL}&lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();

    document.getElementById("location").textContent =
      "Location: " +
      (data.name || "Unknown location") +
      ", " +
      (data.sys?.country || "Unknown country");

    document.getElementById("temperature").textContent =
      "Current Temperature: " + data.main.temp + "°F";

    document.getElementById("description").textContent =
      "Description: " + data.weather[0].description;

    results.hidden = false;

    status.textContent = "Weather loaded successfully.";

    console.log("Weather data retrieved successfully:", data.name);
  } catch (error) {
    errorMessage.textContent =
      "Unable to retrieve weather data. Please try again.";

    errorMessage.style.display = "block";
    status.textContent = "";

    console.error("Weather API error:", error);
  }
}
