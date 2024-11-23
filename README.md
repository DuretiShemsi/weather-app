# Modern Weather App

This is a web application that provides real-time weather information for any city or location worldwide. Users can input a city name to view the current temperature (in both Celsius and Fahrenheit) and weather conditions.

---

## Features

- **Dynamic City Input**: Enter any city name, and the app will fetch the weather for that location.
- **Real-Time Weather Data**: Displays the temperature (Celsius and Fahrenheit) and current weather conditions.
- **Navigation**: Switch between "Temperature" and "Conditions" views.
- **Error Handling**: Provides clear error messages for invalid city names or failed API requests.
- **Responsive Design**: The interface is mobile-friendly and visually appealing.

---

## Tech Stack

- **HTML5**: For structuring the application.
- **CSS3**: For styling and creating a modern, user-friendly interface.
- **JavaScript**: For fetching and displaying dynamic data.
- **APIs Used**:
  - [Nominatim API](https://nominatim.org/): For geocoding (getting latitude and longitude from a city name).
  - [Open-Meteo API](https://open-meteo.com/): For real-time weather data.

---

## How It Works

1. Enter a city name into the search box.
2. Click the "Get Weather" button.
3. The app fetches the latitude and longitude for the city using the **Nominatim API**.
4. It uses the latitude and longitude to fetch weather data from the **Open-Meteo API**.
5. The app displays the temperature in Celsius and Fahrenheit, as well as the current weather conditions.

---

## Installation

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- An internet connection (to access APIs).

### Steps
1. Clone this repository:
   ```bash
   git clone git@github.com:DuretiShemsi/weather-app.git

2. Navigate to the project folder:
   ```bash
    cd weather-app

3. Open the index.html file in your browser.

---

# Configuration

The app requires access to the **Nominatim API** for geocoding.

### Optional
If you'd like to switch to another geocoding API like OpenCage or Google Maps:

1. Update the `getCoordinates` function in `app.js` with the new API URL and key.
2. Ensure your API key is stored securely (e.g., in an `.env` file if using a build tool).

---

# Usage

- **Fetching Weather**: Enter a city name (e.g., "New York" or "Tokyo") and click "Get Weather."
- **Switching Views**: Use the "Temperature" and "Conditions" navigation buttons to toggle between the weather details.
- **Error Handling**: If the city name is invalid or data cannot be retrieved, an error message will be displayed.

---

# Known Limitations

- Free-tier APIs like Nominatim and Open-Meteo may have request limits (e.g., 1 request per second).
- The app does not cache results, so fetching data for the same city repeatedly will re-trigger API requests.

---

# Future Enhancements

- Add a 5-day weather forecast.
- Use a dropdown suggestion box for city names (powered by a geocoding API).
- Integrate dynamic weather icons.
- Add internationalization support for displaying weather data in multiple languages.
