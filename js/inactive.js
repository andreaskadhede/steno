"use strict";

// document.addEventListener('DOMContentLoaded', () => {
//     let inactivityTime = 50000; // Time in milliseconds (e.g., 5000ms = 5 seconds)
//     let timeoutId;

//     function resetTimer() {
//         clearTimeout(timeoutId);
//         timeoutId = setTimeout(redirectToAnotherSite, inactivityTime);
//     }

//     function redirectToAnotherSite() {
//         window.location.href = '/index.html'; // Change the URL to the site you want to redirect to
//     }

//     // Reset the timer on user activity
//     document.addEventListener('mousemove', resetTimer);
//     document.addEventListener('keydown', resetTimer);

//     // Start the timer when the page loads
//     resetTimer();
// });

let vid = document.getElementById("baggrund_musik");
vid.volume = 0.2;

var audio = document.getElementById("delay");

// Function to play the audio after a delay
function playDelayedSound(delay) {
  setTimeout(function() {
    audio.play();
  }, delay);
}

// Call the function with a delay of 3000 milliseconds (3 seconds)
playDelayedSound(40000);
