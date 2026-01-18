let form = document.querySelector('#weatherForm');
let textInput = document.querySelector('#input');

async function getData(city) {
    let url = `https://api.weatherapi.com/v1/current.json?key=de87215a9091497b9a310005261801&q=${city}`;
    let request = await fetch(url);
    let response = await request.json();

    let weatherData = {
        feelsLikeTemp: response.current.feelslike_f,
        accTemp: response.current.temp_f,
        windSpeed: response.current.wind_mph,
    };
    
    console.log(response);
    console.log(weatherData);
    return weatherData;
};

async function updateUI(city) {
    const weatherData = await getData(city);
    const container = document.querySelector('#content');
    const content = document.createElement('div');
    const realTemp = weatherData.accTemp;
    const feelsLikeTemp = weatherData.feelsLikeTemp;
    const windSpeed = weatherData.windSpeed;

    content.append(realTemp, feelsLikeTemp, windSpeed);
    container.appendChild(content);
    
    console.log(weatherData);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    updateUI(textInput.value);
})