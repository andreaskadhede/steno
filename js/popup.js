"use strict";

document.addEventListener("DOMContentLoaded", function() {

    const planet = document.getElementById("planet");
    planet.style.cursor ="pointer";
    const stemme = document.getElementById("stemme");


    const mainContent = document.getElementById("main-content");
    const popUp = document.getElementById("popup");
    
    const kryds = document.getElementById('kryds');
    kryds.style.cursor ="pointer";

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

});