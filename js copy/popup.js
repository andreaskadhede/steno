"use strict";

document.addEventListener("DOMContentLoaded", function() {

    const planet = document.getElementById("planet");
    planet.style.cursor ="pointer";


    const mainContent = document.getElementById("main-content");
    const popUp = document.getElementById("popup");
    
    const kryds = document.getElementById('kryds');
    kryds.style.cursor ="pointer";

    kryds.addEventListener("click", function() {
        close();
    });

    planet.addEventListener("click", function() {
        popup();
    });

    function popup() {
        mainContent.classList.add('hidden');
        popUp.classList.remove('hidden');
    };

    function close() {
        mainContent.classList.remove('hidden');
        popUp.classList.add('hidden');
    };

});