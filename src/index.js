let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};
/*
// get a city from the user's input
let city = prompt("Enter a city?");

while (city === undefined || city.length === 0) {
  city = prompt("Enter a city?");
}

// standardize by making it lower case and removing excess spaces
city = city.trim().toLowerCase();

if (weather[city] !== undefined) {
  // if there's data for this city, return it

  // first get the data to return
  let tempCelsius = Math.round(weather[city].temp);
  let tempFahrenheit = Math.round((weather[city].temp * 9) / 5 + 32);

  // next form the message to return using the city's data
  let infoMessage = `It is currently ${tempCelsius}°C (${tempFahrenheit}°F) in ${city} with a humidity of ${Math.round(
    weather[city].humidity
  )}%`;

  alert(infoMessage);
} else {
  // if we don't have data for this city, then still reply to handle this case
  let cityURL = city.replace(" ", "+"); // create a url friendly name for the city (if there are spaces in it)
  let errorMessage = `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityURL}`;

  alert(errorMessage);
}
*/

// functionality to update the date the display the current day and time

// getDate() returns the updated date as a string
function getDate() {
  let now = new Date();

  // creating an array to get the string for the day, since Date objects store an integer for the day of the week
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let time = `${now.getHours()}:${now.getMinutes()}`;

  let dateString = `${day} ${time}`;
  return dateString;
}

// updateDate() updates the HTML with the current day and time
function updateDate() {
  let currentDate = document.querySelector("#current-date");
  let updatedDate = getDate();

  currentDate.innerHTML = updatedDate;
}

updateDate();

// functionality for search form

// getSearchInput() returns the input that the user entered into the city search form
function getSearchInput() {
  let searchInput = document.querySelector("#search-input").value;
  return searchInput;
}

// updates the page title with the city that was searched for
function updateCity(event) {
  event.preventDefault();
  let searchInput = getSearchInput();
  let title = document.querySelector("h1");
  title.innerHTML = searchInput;

  // also update the current time displayed
  updateDate();
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", updateCity);
