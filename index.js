const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'Seattle'];
const descriptions = ['Sunny', 'Cloudy', 'Rainy', 'Thunderstorms'];
const temps = [-5, 0, 5, 10, 15, 20, 25, 30, 35];
const humidities = [30, 40, 50, 60, 70, 80, 90];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const city = getRandomItem(cities);
const description = getRandomItem(descriptions);
const temp = getRandomItem(temps);
const humidity = getRandomItem(humidities);

// update the HTML elements with the weather data
document.getElementById('city').textContent = city;
document.getElementById('description').textContent = description;
document.getElementById('temp').textContent = `Temperature: ${temp} °C`;
document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
