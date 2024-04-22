# Sten i rummet - Steno Museum
## Interaktiv Storytelling Projekt

Vi har i dette projekt arbejdet med en interaktiv løsning til Steno Museet, med særlig fokus på storytelling. Løsningen er tænkt som en interaktiv historie der kan opleves på en skærm som en del af udstilingen 'Astroteket'.

### JSON-objekt

**Jordens befolkning**
Vi har i vores projekt implementeret et JSON-objekt gennem et link fra en aktiv kilde ved brug af JSON. 
Linket giver os et aktivt tal af hvor mange mennesker der befinder sig på jorden. 

[title](http://api.worldbank.org/v2/country/WLD/indicator/SP.POP.TOTL?format=json)

Vi har valgt at bruge denne API, for at skabe en overrakelses effekt hos brugeren. Samtidig er det en af de få data om rummet, vi har adgang til at bruge.

For at få det mest aktuelle tal omkring befolkningen, har vi anvendt Java Script til at hente data hvert 6. sekund. Derved kunne der være en mulighed for, at tallet opdatere, imens man kigger på det.

**Solens grader**
Udover befolknigenstallet, havde vi intention om at få implemetret solens temperatur som et JSON-objekt. Dette var dog desværre ikke muligt, da den data ikke findes som et JSON-objekt. Vi forsøgte at anvende den tilgængelige data i stedet, både ved at omregne til grader Celsius og ved at anvende de andre data. Disse var enten ikke korrekte eller data som ikke ville være forståeligt for vores målgruppe.

### JS-Events
**Skyerne på venus**
**Pop ups**
****

### Musikken i baggrunden

Vores oprindelige plan for musikken i vores løsning er, at den skal spille kontinuerligt imens brugeren intergerer med siden. Det har dog ikke været muligt at implementere, da det ville kræve mere backend-programmering end en multimediedesigner ville benytte sig af.