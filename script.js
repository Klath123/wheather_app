async function getWeather(lat, lon) {
    try {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=689650afddbe2833e766639e76646a44`);
        const weatherData = await weatherResponse.json();
        
        document.getElementById("weather").innerHTML = `
            <h2 class="text-xl font-bold">Weather in ${weatherData.name}</h2>
            <p class="text-lg">${weatherData.weather[0].description}</p>
            <p> Temp: ${weatherData.main.temp}°C</p>
            <p> Max Temp: ${weatherData.main.temp_max}°C</p>
            <p>Min Temp: ${weatherData.main.temp_min}°C</p>
        `;
        document.getElementById("weather").classList.remove("hidden");
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather").innerHTML = "Error fetching weather data. Please try again later.";
    }
}
async function getWeathername() {
    const city = document.getElementById("city").value;
    if (!city) return;
    try {
        const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=689650afddbe2833e766639e76646a44`);
        const geoData = await geoResponse.json();
        if (geoData.length === 0) {
            alert("City not found");
            return;
        }
        getWeather(geoData[0].lat, geoData[0].lon);
    } catch (error) {
        console.error("Error fetching city data:", error);
    }
}

async function getWeatherByIP() {
    try {
        const ipResponse = await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=86c58e422489421ab43b2f7bbfc1f42d");
        const ipData = await ipResponse.json();
        getWeather(ipData.latitude, ipData.longitude);
    } catch (error) {
        console.error("Error fetching location data:", error);
    }
}

getWeatherByIP();