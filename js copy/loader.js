"use strict"

document.addEventListener("DOMContentLoaded", function() {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 2500); // Loaderen vises indtil sidenindholdet er loadet, men i minimum 3 sekunder

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
});


