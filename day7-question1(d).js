// d). Print the total population of countries using reduce function


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
  
    const totalPopulation = data.reduce((accumulator, country) => {
      const population = country.population;
      return accumulator + (population ? population : 0);
    }, 0);

    console.log('Total Population of Countries:', totalPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));


