"use strict"

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


