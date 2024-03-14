const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weaterBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-fund');

search.addEventListener('click', () => {
    const APIKey = '602a024c1b297a8cce3a206deb137234';
    const city = document.querySelector('.search-box input').value;

    if(city === '')
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&
            units=metric&appid=${APIKey}`).then(response => response.json()).then
    (json => {
        if(json.cod === '404'){
            container.style.height = '400px';
            weaterBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = docuemnt.querySelector('.weather-box img');
        const temperature = docuemnt.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humedity = document.querySelector('.weather-details .humedity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weater[0].main){
            case 'Clear':
                image.src = 'images/clear.png';
                break;
            
            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/snow.png';
                break;

            case 'Clouds':
                image.src = 'images/clouds.png';
                break;

            case 'Hzae':
                image.src = 'images/haze.png';
                break;

            default:
                image.src = '';

        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weater[0].description}`;
        humedity.innerHTML = `${json.main.humedity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weaterBox.style.display = '';
        weatherDetails.style.display = '';
        weaterBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '590px';


    });
});