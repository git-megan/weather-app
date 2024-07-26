// select elements on the page that display weather information
let cityDisplay = document.getElementById("city-name");
let currentTempDisplay = document.getElementById("current-temp");
let currentHumidityDisplay = document.getElementById("current-humidity");

// select form for the input data
let searchForm = document.querySelector("form");

// data for API call for current weather data
let apiKey = "0t46o23ed0fd5ba55b5549905c06fafe";
let citySearched = "Lisbon";

/**
 * Parses data from the api response, then calls showData to display it
 * @param {} response response from API call to get current weather data
 */
function handleApiData(response) {
  let dataObj = response.data;
  let cityName = dataObj.city;
  let currentTemp = Math.round(dataObj.temperature.current);
  let currentHumidity = Math.round(dataObj.temperature.humidity);
  showData(cityName, currentTemp, currentHumidity);
}

function showData(cityName, currentTemp, currentHumidity) {
  cityDisplay.textContent = cityName;
  currentTempDisplay.textContent = currentTemp;
  currentHumidityDisplay.textContent = currentHumidity;
}

searchForm.addEventListener("submit", (event) => {
  // prevent reloading the page
  event.preventDefault();

  // get data from the form
  const formData = new FormData(searchForm);
  let queryEntered = formData.get("search");

  // Note: currently not validating if they searched for a city we have data for
  citySearched = queryEntered;

  // construct api with new search terms
  let apiUrlCurrentTemp = `https://api.shecodes.io/weather/v1/current?query=${citySearched}&key=${apiKey}&units=metric`;

  // call API with new search term and update display
  axios.get(apiUrlCurrentTemp).then(handleApiData);
});

// code to show an updated date/time
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
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // handle the case when minutes is a single digit
  if (minutes < 10) {
    // format minutes to start with a 0
    minutes = `0${minutes}`;
  }

  let dateString = `${day} ${hours}:${minutes}`;
  return dateString;
}

// updateDate() updates the HTML with the current day and time
function updateDate() {
  let currentDate = document.querySelector("#current-date");
  let updatedDate = getDate();

  currentDate.textContent = updatedDate;
}

updateDate();
