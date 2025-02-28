# Weather App

## Overview
This Weather App fetches the user's location using their IP address and displays the weather information for their current location. Users can also search for the weather of any city by entering its name.

## Features
- Auto-detect user's location based on IP
- Fetch real-time weather data using OpenWeather API
- Display temperature, weather conditions, max and min temperature
- Allow users to search weather by city
- Modern and aesthetic UI with a color palette of `#2F97E8`, `#15432F`, `#FFFFFF`, `#57BA5D`

## Technologies Used
- HTML
- CSS
- JavaScript
- OpenWeather API
- IP Geolocation API

## APIs Used
- **OpenWeather API** for weather data ([https://openweathermap.org/](https://openweathermap.org/))
- **IP Geolocation API** for location detection ([https://ipgeolocation.io/](https://ipgeolocation.io/))

## How It Works
1. The app first calls the IP Geolocation API to get the user's latitude and longitude.
2. These coordinates are used to fetch weather data from the OpenWeather API.
3. The weather details are displayed dynamically on the page.
4. Users can also manually enter a city name to fetch its weather data.

## Future Improvements
- Add more weather details like wind speed, humidity, and visibility.
- Implement a loading animation while fetching data.
- Improve error handling for API failures.



