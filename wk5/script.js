function generateRandomTempareture(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gettemperatureMessage(temp) {
  if (temp > 30) {
    return "It's hot today.";
  } else if (temperature >= 20) {
  return "It's warm today.";
} else {
  return "It's cold today.";
}
}

function updatetemperatureDisplay(message) {
  document.getElementById("temperatureMessage").textContent = message;
}

function checktemparature() {
    let temp = generateRandomTemperature(10, 40);
    let message = gettemperatureMessage(temp);


console.log("Temperature:", temp);
  console.log("Message:", message);

  updatetemparatureDisplay(message);

}