function formatDate(timestamp) {
	let date = new Date(timestamp);
	let dow = date.getDate();
	let hours = date.getHours();
	let time = date.getHours();
	if (time < 10) {
		time = `0${time}`;
	}
	let minutes = date.getMinutes();
	let timeMin = date.getMinutes();
	if (timeMin < 10) {
		timeMin = `0${timeMin}`;
	}
	let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
	let day = days[date.getDay()];
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
	let month = months[date.getMonth()];
	let year = date.getFullYear();
	return `${day} ${month} ${dow} ${year} ${hours}:${minutes}`;
}
function displayForecast(){
	let forecastElement=document.querySelector('#forecast');
	
	forecastElement.innerHTML="forecast";
}
function displayTemperature(response) {
	console.log(response);
	let humidityElement = document.querySelector("#humidity");
	humidityElement.innerHTML = response.data.main.humidity;
}

function updateHeader(response) {
	let searchInput = document.querySelector("#search-text-input");
	let city = document.querySelector("h2");
	city.innerHTML = `${searchInput.value} ${Math.round(
		response.data.main.temp
	)}°`;
	return response;
}

function showTemp(response) {
	console.log(response);
	let humidityElement = document.querySelector("#humidity");
	let windElement = document.querySelector("#wind");
	let dateElement = document.querySelector("#date");
	let feelsLikeElement=document.querySelector('#feelsLike');
	let minTempElement=document.querySelector('#min-temp');
	humidityElement.innerHTML = response.data.main.humidity;
	windElement.innerHTML = Math.round(response.data.wind.speed);
	dateElement.innerHTML = formatDate(response.data.dt * 1000);
	feelsLikeElement.innerHTML= Math.round(response.data.main.feels_like);
	minTempElement.innerHTML=Math.round(response.data.main.temp_min);
	
}






function searchButton(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-text-input");

	let h1 = document.querySelector("h1");
	if (searchInput.value) {
		h1.innerHTML = `Giving you the weather in ${searchInput.value}...`;
	}

	let apiKey = "ab4b6ba48697ed90f4d99633d65a976d";
	let cityName = searchInput.value;
	let units = "metric";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

	axios.get(apiUrl).then(updateHeader).then(showTemp);
}

let searchButtonIcon = document.querySelector("button");
searchButtonIcon.addEventListener("click", searchButton);

let search = document.querySelector("#search-bar");
search.addEventListener("submit", searchButton);

let apiKey = "229389c085a7d5d19cdf047833e8e2d9";
let cityName = "london";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

axios.get(apiUrl).then(showTemp);



