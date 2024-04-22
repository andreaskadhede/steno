# Sten i rummet - Steno Museum
## Interaktiv Storytelling Projekt

Vi har i dette projekt arbejdet med en interaktiv løsning til Steno Museet, med særlig fokus på storytelling. Løsningen er tænkt som en interaktiv historie der kan opleves på en skærm som en del af udstilingen 'Astroteket'.

### JSON-objekt

#### Jordens befolkning
Vi har i vores projekt implementeret et JSON-objekt gennem et link fra en aktiv kilde ved brug af JSON. 
Linket giver os et aktivt tal af hvor mange mennesker der befinder sig på jorden. 

Vi har valgt at bruge denne [API](http://api.worldbank.org/v2/country/WLD/indicator/SP.POP.TOTL?format=json), for at skabe en overrakelses effekt hos brugeren. Samtidig er det en af de få data om rummet, vi har adgang til at bruge.

For at få det mest aktuelle tal omkring befolkningen, har vi anvendt Java Script til at hente data hvert 6. sekund. Derved kunne der være en mulighed for, at tallet opdatere, imens man kigger på det.

#### Solens grader
Udover befolknigenstallet, havde vi intention om at få implemetret solens temperatur som et JSON-objekt. Dette var dog desværre ikke muligt, da den data ikke findes som et JSON-objekt. Vi forsøgte at anvende den tilgængelige data i stedet, både ved at omregne til grader Celsius og ved at anvende de andre data. Disse var enten ikke korrekte eller data som ikke ville være forståeligt for vores målgruppe.

### JS-Events
Vi har i vores løsning anvendt forskellige EventListeners til at udløse events på siden.

#### Skyerne på Venus
På planeten Venus har vi tilføjet en EventListener på skyerne, som aktiveres når man trykker på dem, så de fader ud og teksten under dem, bliver synlig.

    const skyer = document.getElementById("skyer-venus");
    const tekst = document.getElementById("tekst-under-skyer");

    // lytter efter tryk på skyerne, som fjerner skyerne og viser teksten under
    skyer.addEventListener("click", function() {
        skyer.style.transition = "opacity 2s";
        skyer.style.opacity = "0";
        tekst.classList.remove("hidden");
    });

#### Pop ups
På de forskellige planeter har vi anvendt en EventListener, som lytter efter et klik på de forskellige udløsere, som åbner og lukker vores pop up information.

    // kalder funktionen close() ved at trykke på kryds
    kryds.addEventListener("click", function() {
        close();
    });

    // kalder funktionen popup() ved at trykke på planeten, armen eller anden udløser
    planet.addEventListener("click", function() {
        popup();
    });

    // funktion til at vise popup vindue
    function popup() {
        mainContent.classList.add('hidden');
        popUp.classList.remove('hidden');
        stemme.pause(); /* stopper Sten med at snakke ved visning af popup */
    };

    // funktion til at fjerne popup vindue
    function close() {
        mainContent.classList.remove('hidden');
        popUp.classList.add('hidden');
    };

#### Timer
På hele siden har vi anvendt en EventListener som lytter efter om indholdet i DOM er indlæst. Når det er sket, sætter den gang i funktionen resetTimer(). Den ene timer sender brugeren tilbage til start-siden efter 50 sekunder med inaktivitet. Den anden timer er loading-skærmen der viser indholdet på siden efter minimum 2,5 sekunder, eller efter indholdet på siden er indlæst.

##### inactive.js

    document.addEventListener('DOMContentLoaded', () => {
        let inactivityTime = 50000; // Tiden i millisekunder
        let timeoutId;

        function resetTimer() {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(redirectToAnotherSite, inactivityTime);
        }

        function redirectToAnotherSite() {
            window.location.href = '/index.html'; // Ændrer sidne til index
        }

        // Genstarter timeren ved interaktion (musen bevæger sig, der trykkes på en tast)
        document.addEventListener('mousemove', resetTimer);
        document.addEventListener('keydown', resetTimer);

        // Starter timeren på ny
        resetTimer();
    });

##### loader.js

    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(() => {
            hideLoader();
            showContent();
        }, 2500); // Loaderen vises indtil sidenindholdet er loadet, men i minimum 2.5 sekunder

        // funktion til at fjerne loadinscreen
        function hideLoader() { 
            const loader = document.getElementById("loader");
            loader.style.display = "none";
        }

        // funktion til at vise sideindhold
        function showContent() {
            const content = document.getElementById("content");
            content.style.display = "block";
        }
    });
    

### Musikken i baggrunden

Vores oprindelige plan for musikken i vores løsning er, at den skal spille kontinuerligt imens brugeren intergerer med siden. Det har dog ikke været muligt at implementere, da det ville kræve mere backend-programmering end en multimediedesigner ville benytte sig af.
