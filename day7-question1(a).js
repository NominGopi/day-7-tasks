// a). Get all the countries from Asia continent /region using Filter function

// Fetching the data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Filtering countries from Asia
    const asianCountries = data.filter(country => country.region === 'Asia' || country.subregion === 'Southern Asia');

    // Logging the result
    console.log('Countries in Asia:', asianCountries);
  })
  .catch(error => console.error('Error fetching data:', error));







