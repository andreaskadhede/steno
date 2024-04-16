function fetchWorldPopulation() {
    // API endpoint for world population
    const url = "http://api.worldbank.org/v2/country/WLD/indicator/SP.POP.TOTL?format=json";

    // Fetch data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extract world population data
            const worldPopulation = data[1].filter(item => item.value !== null)[0].value;
            const formattedPopulation = worldPopulation.toLocaleString(); /* Giver det lange tal punktummer, så det er nemmere at læse */

            console.log(`World Population: ${formattedPopulation}`);
            let population = document.getElementById("population");
            population.innerHTML = `${formattedPopulation}`; /* Ændrer tallet på skærmen til det rigtige tal */



            // Format the population number with commas
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

        
}

// Fetch world population initially
fetchWorldPopulation();

// Fetch world population every day (86400000 milliseconds = 1 day)
setInterval(fetchWorldPopulation, 600);


function updateNumber() {
    let population = document.getElementById("population");
    population.innerHTML = `${worldPopulation}`;
};





/*

function fetchWorldPopulation() {
    // API endpoint for world population
    const url = "http://api.worldbank.org/v2/country/WLD/indicator/SP.POP.TOTL?format=json";

    // Fetch data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extract world population data
            const worldPopulation = data[1].filter(item => item.value !== null)[0].value;
            console.log(`World Population: ${worldPopulation}`);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Fetch world population initially
fetchWorldPopulation();

// Fetch world population every day (86400000 milliseconds = 1 day)
setInterval(fetchWorldPopulation, 600);

*/