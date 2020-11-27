let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let currentDate = new Date();
console.log(currentDate);
let date = currentDate.getDate();
let months = [
	"Jan",
	"Feb",
	"March",
	"Apr",
	"May",
	"June",
	"July",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];
let month = months[currentDate.getMonth()];
let day = days[currentDate.getDay()];
let time = currentDate.getHours();
if (time < 10) {
	time = `0${time}`;
}
let timeMin = currentDate.getMinutes();

if (timeMin < 10) {
	timeMin = `0${timeMin}`;
}

let year = currentDate.getFullYear();

let heading = document.querySelector("h3");
heading.innerHTML = `${day} ${month} ${date}, ${year}  ${time}:${timeMin}`;

function displayTemperature(response){
	console.log(response)
	let humidityElement=document.querySelector("#humidity");
	humidityElement.innerHTML=response.data.main.humidity;
}

function updateHeader(response) {
	let searchInput = document.querySelector("#search-text-input");
	let city = document.querySelector("h2");
	city.innerHTML = `${searchInput.value} ${Math.round(response.data.main.temp)}°`;
	return response;
}

function showTemp(response){
	console.log(response)
	let humidityElement=document.querySelector("#humidity");
	let windElement =document.querySelector("#wind");
	humidityElement.innerHTML=response.data.main.humidity;
	windElement.innerHTML=Math.round(response.data.wind.speed);
	}

function searchButton(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-text-input");

	let h1 = document.querySelector("h1");
	if (searchInput.value) {
		h1.innerHTML = `Giving you the weather in ${searchInput.value}...`;
	}

	let apiKey = "c7c8d5df224c13c5ed3c6b8739d6a047";
	let cityName = searchInput.value;
	let units="metric";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

	axios.get(apiUrl).then(updateHeader).then(showTemp);
}



let searchButtonIcon = document.querySelector("button");
searchButtonIcon.addEventListener("click", searchButton);

let search = document.querySelector("#search-bar");
search.addEventListener("submit", searchButton);



let apiKey = "c7c8d5df224c13c5ed3c6b8739d6a047";
let cityName = "Berlin";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

console.log(cityName);
axios.get(apiUrl).then(showTemp);



