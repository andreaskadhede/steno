"use strict"

// Når der trykkes på skærmen, føres man videre til cockpittet
document.addEventListener("click", backToCockpit)

function backToCockpit() {
    window.location.href = '/cockpit-no-load.html';
};


document.addEventListener('DOMContentLoaded', function() {
    let inactivityTime = 10000; // Tiden i millisekunder
    let timeoutId;

    function timer() {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(redirectToAnotherSite, inactivityTime);
    }

    function redirectToAnotherSite() {
        window.location.href = '/cockpit-no-load.html'; // Ændrer sidne til cockpit efter 10 sekunder
    }

    // Starter timeren på ny
    timer();
});