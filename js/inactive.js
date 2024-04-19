"use strict";

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