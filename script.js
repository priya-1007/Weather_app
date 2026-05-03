async function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Enter a city name");
        return;
    }

    let apiKey = "8d0661da0eb3faaab5343be82aa742b6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;`;

    try {
        let response = await fetch(url);
        let data = await response.json();

    
        if (data.cod !== 200) {
            document.getElementById("result").innerHTML = data.message;
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error fetching data";
    }
}
