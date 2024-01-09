// b).Get all the countries with a population of less than 2 lakhs using Filter function


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => {
      const population = country.population;
      return population && population < 200000; 
    });

  
    countriesWithPopulationLessThan2Lakhs.forEach(country => {
      console.log('Country:', country.name.common);
      console.log('Population:', country.population || 'N/A');
      console.log('-----------------------'); 
    });
  })
  .catch(error => console.error('Error fetching data:', error));






