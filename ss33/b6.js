const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
}   
function showWeather() {
    let city = document.getElementById("search").value.split(" ").map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
    let resultElement = document.getElementById("weather-card");
    let weather = weatherData[city];
    console.log(weather);
    if (weather) {
        resultElement.innerHTML = `
            <h2>${city.charAt(0).toUpperCase() + city.slice(1)}</h2>
            <div class="weather-main">
            <div class="weather-info">
                <span class="icon">${weather.icon}</span>
                <span class="temp">${weather.temperature}°C</span>
            </div>
            <div class="weather-details">
            <p>${weather.description}</p>
            <p>Độ ẩm: ${weather.humidity}%</p>
            <p>Tốc độ gió: ${weather.windSpeed} km/h</p>
            </div>
            </div>
        `;
    } else {
        resultElement.innerHTML = "<p>Không tìm thấy thông tin thời tiết</p>";
    }
}
