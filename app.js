const BASE_URL = "https://api.open-meteo.com/v1/forecast";
const weatherDisplay = document.getElementById("weather-display");
const cityInput = document.getElementById("city-input");
const fetchWeatherBtn = document.getElementById("fetch-weather");

document.getElementById("temp-nav").addEventListener("click", () => showData('temperature'));
document.getElementById("condition-nav").addEventListener("click", () => showData('conditions'));

let weatherData = {};

fetchWeatherBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    displayError("Please enter a city name.");
    return;
  }

  try {
    const { lat, lon } = await getCoordinates(city);

    await fetchWeather(lat, lon);

    showData('temperature');
  } catch (error) {
    displayError(error.message);
  }
});

async function getCoordinates(city) {
  const GEOCODING_API_URL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;
  const response = await fetch(GEOCODING_API_URL);

  if (!response.ok) throw new Error("Failed to fetch city coordinates.");
  
  const data = await response.json();
  if (!data.length) throw new Error("City not found. Please check the spelling.");

  return {
    lat: parseFloat(data[0].lat),
    lon: parseFloat(data[0].lon)
  };
}


async function fetchWeather(lat, lon) {
  const response = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lon}&current_weather=true`);
  if (!response.ok) throw new Error("Failed to fetch weather data.");
  
  const data = await response.json();
  const celsiusTemp = data.current_weather.temperature;
  const fahrenheitTemp = (celsiusTemp * 9/5) + 32;

  weatherData = {
    temperature: {
      celsius: `${celsiusTemp.toFixed(1)}°C`,
      fahrenheit: `${fahrenheitTemp.toFixed(1)}°F`
    },
    conditions: getConditionText(data.current_weather.weathercode)
  };
}


function showData(type) {
  weatherDisplay.innerHTML = "";
  if (!weatherData[type]) {
    weatherDisplay.innerHTML = "<p>No data available. Please fetch weather first.</p>";
    return;
  }

  if (type === 'temperature') {
    weatherDisplay.innerHTML = `
      <h2>Temperature</h2>
      <p>${weatherData.temperature.celsius} / ${weatherData.temperature.fahrenheit}</p>
    `;
  } else if (type === 'conditions') {
    weatherDisplay.innerHTML = `
      <h2>Conditions</h2>
      <p>${weatherData.conditions}</p>
    `;
  }
}

function getConditionText(code) {
  const conditions = {
    0: "Clear",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Depositing rime fog"
  };
  return conditions[code] || "Unknown condition";
}

function displayError(message) {
  weatherDisplay.innerHTML = `<p style="color: red;">${message}</p>`;
}
