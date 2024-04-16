"use strict"



async function fetchSolarData() {
    const apiUrl = 'https://api.nasa.gov/DONKI/CMEAnalysis?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=zSx2Iu8ukldPWxN9spYdba7gUUDYsuZqXZMtGboI';
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // The temperature data might be in a different API endpoint or within the response
        // This is just a placeholder, you'll need to find the correct endpoint or key for the temperature
        const temperature = data.temperature; 
        
        console.log(`Surface temperature of the Sun: ${temperature}°C`);
        let grader = document.getElementById("grader");
        grader.innerHTML = `${temperature}°C`; /* Ændrer tallet på skærmen til det rigtige tal */

    } catch (error) {
        console.error('Error fetching solar data:', error);
        let grader = document.getElementById("grader");
        grader.innerHTML = `Error fetching solar data:', error`; /* Ændrer tallet på skærmen til det rigtige tal */

    }
}

fetchSolarData();




const apiKey = 'zSx2Iu8ukldPWxN9spYdba7gUUDYsuZqXZMtGboI';
const apiUrl = `https://api.nasa.gov/DONKI/notifications?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&type=solar_wind&api_key=${apiKey}`;

// Get yesterday's date
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const formattedDate = yesterday.toISOString().split('T')[0];

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Filter the data to find the solar wind speed
    const solarWindData = data.filter(item => item.messageType === 'SWPC_Solar_Wind').pop();
    
    if (solarWindData) {
      // Extract the surface temperature from the data
      const surfaceTemperature = solarWindData.parameters.find(param => param.name === 'Temperature').value;
      console.log(`Yesterday's surface temperature of the Sun: ${surfaceTemperature} degrees Celsius`);
    } else {
      console.log('No data available for yesterday\'s surface temperature of the Sun.');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });



  async function getSunSurfaceTemperature() {
    const apiUrl = 'https://api.nasa.gov/DONKI/notifications?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&api_key=zSx2Iu8ukldPWxN9spYdba7gUUDYsuZqXZMtGboI';
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Assuming the temperature data is in the first notification
        const firstNotification = data[0];
        const sunSurfaceTemperature = firstNotification.eventValue;

        return sunSurfaceTemperature;
    } catch (error) {
        console.error('There was a problem fetching the data:', error);
    }
}

getSunSurfaceTemperature().then(temperature => {
    console.log(`The surface temperature of the Sun is ${temperature} K.`);
});
