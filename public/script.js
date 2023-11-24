// Päivämäärän saanti
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy;
document.getElementById("day").innerHTML = today;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//apiUrl on serverin endpointin vastaus
const apiUrl = "/weather"; 

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?city=${city}`);
    const data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) - 273 + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "/images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "/images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "/images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "/images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "/images/mist.png";
        break;
      case "Snow":
        weatherIcon.src = "/images/snow.png";
        break;

      default:
        break;
    }
  
    document.querySelector(".weather").style.display = "block"

  } catch (error) {
    console.error(error);
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
