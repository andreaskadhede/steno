"use strict"

const skyer = document.getElementById("skyer-venus");
const tekst = document.getElementById("tekst-under-skyer");

skyer.addEventListener("click", function() {
    skyer.style.transition = "opacity 2s";
    skyer.style.opacity = "0";
    tekst.classList.remove("hidden");
});