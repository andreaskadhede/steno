"use strict"


let vid = document.getElementById("baggrund_musik");
vid.volume = 0.15;


// window.addEventListener('DOMContentLoaded', (event) => {
//     const backgroundSound = document.getElementById('baggrund_musik');

//     // Play the sound when the page is loaded
//     backgroundSound.play();

//     // Pause the sound when the page is hidden
//     document.addEventListener('visibilitychange', () => {
//         if (document.hidden) {
//             backgroundSound.pause();
//         } else {
//             backgroundSound.play();
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     var audio = document.getElementById('backgroundAudio');
    
//     // Check if audio is not null (i.e., audio element exists)
//     if(audio) {
//         // Check if audio is already playing from a previous page
//         var isAudioPlaying = sessionStorage.getItem('isAudioPlaying') === 'true';

//         if (!isAudioPlaying) {
//             audio.play().catch(function(error) {
//                 console.error("Playback prevented:", error);
//             }); // Start playing the audio
//             sessionStorage.setItem('isAudioPlaying', 'true');
//         }

//         // Pause audio when navigating away from the page
//         window.addEventListener('beforeunload', function() {
//             audio.pause();
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundAudio');
    
    // Check if audio is not null (i.e., audio element exists)
    if(audio) {
        // Check if audio is already playing from a previous page
        var isAudioPlaying = sessionStorage.getItem('isAudioPlaying') === 'true';

        if (!isAudioPlaying) {
            audio.play().then(function() {
                // Audio is playing
            }).catch(function(error) {
                console.error("Playback prevented:", error);
            }); // Start playing the audio
            sessionStorage.setItem('isAudioPlaying', 'true');
        }

        // Pause audio when navigating away from the page
        window.addEventListener('beforeunload', function() {
            audio.pause();
        });
    }
});