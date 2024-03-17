const cityName = document.querySelector('.miInput');
const button = document.querySelector("button");
const apiKey = '78a3af19d8f5570f8ee3f138a3c05c4a';
//const cityName = 'London';
//const stateCode = '';
//const countryCode = ''; // Código de país para el Reino Unido
const limit = 4; // Límite de resultados

const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`;

function miFunc() {
  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al hacer la solicitud');
    }
    return response.json();
  })
  .then(data => {
    // Hacer algo con los datos obtenidos
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }


