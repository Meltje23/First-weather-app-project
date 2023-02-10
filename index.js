let currentTime = new Date();

let hour = currentTime.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minute = currentTime.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let liCurrentTime = document.querySelector(".currentTime");
liCurrentTime.innerHTML = `${day} ${hour}:${minute}`;

function showCity(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = `${cityInput.value}`;
}
let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", showCity);
