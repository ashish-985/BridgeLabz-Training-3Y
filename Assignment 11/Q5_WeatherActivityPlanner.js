// Q5: Weather Activity Planner

const temperature = 22; // Temperature in degrees Celsius.
const isRaining = false;
const windSpeed = 12; // Wind speed in km/h.

let activity;

// Rain takes priority over all other weather conditions.
if (isRaining) {
    activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    // Both conditions must be true for the weather to be too cold and windy.
    activity = "Too cold and windy — stay home.";
} else {
    activity = "Perfect day for a walk.";
}

// Demonstrate combined logical operators for a general pleasant-weather check.
const isComfortableWeather = !isRaining && temperature >= 15 && temperature <= 35
    && (windSpeed <= 20 || temperature >= 20);
console.log(`Comfortable weather: ${isComfortableWeather}`);
console.log(activity);
