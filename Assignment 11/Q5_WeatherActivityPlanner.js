const temperature = 22;
const isRaining = false;
const windSpeed = 12;

let activity;

if (isRaining) {
    activity = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    activity = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {

    activity = "Too cold and windy — stay home.";
} else {
    activity = "Perfect day for a walk.";
}

const isComfortableWeather = !isRaining && temperature >= 15 && temperature <= 35
    && (windSpeed <= 20 || temperature >= 20);
console.log(`Comfortable weather: ${isComfortableWeather}`);
console.log(activity);
