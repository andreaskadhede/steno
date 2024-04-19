"use strict"

document.addEventListener("DOMContentLoaded", function() {


    function fetchWorldPopulation() {
        // API endpoint for verdens population
        const url = "http://api.worldbank.org/v2/country/WLD/indicator/SP.POP.TOTL?format=json";

        // Fetch data fra API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // henter populations data
                const worldPopulation = data[1].filter(item => item.value !== null)[0].value;
                const formattedPopulation = worldPopulation.toLocaleString(); /* Giver det lange tal punktummer, så det er nemmere at læse */

                console.log(`World Population: ${formattedPopulation}`);
                let population = document.getElementById("population");
                population.innerHTML = `${formattedPopulation}`; /* Ændrer tallet på skærmen til det rigtige tal */

            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });

            
    }

    // Kalder funktionen for at hente data
    fetchWorldPopulation();

    // Henter data hvert 6 sekund
    setInterval(fetchWorldPopulation, 6000);

});

