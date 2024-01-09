// e). Print the country that uses US dollars as currency.


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
 
    const countriesWithUSD = data.filter(country => {
      const currencies = country.currencies;
      return currencies && currencies.hasOwnProperty('USD');
    });

 
    console.log('Countries that use US dollars as currency:', countriesWithUSD.map(country => country.name.common));
  })
  .catch(error => console.error('Error fetching data:', error));


