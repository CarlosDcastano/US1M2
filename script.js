/* JavaScript use */

/* Change about me text */

const aboutText = document.getElementById('about-text');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', function() {
    aboutText.textContent = "¡The text has been updated! Now you know more about me.";
    aboutText.style.color = "blue";

});


/* Showing and hiding JavaScript project details */

const toggleJsBtn = document.getElementById('toggle-js-project');
const jsDetails = document.querySelector('#js-project .details');

toggleJsBtn.addEventListener('click', function() {
    if (jsDetails.style.display === 'none' || jsDetails.style.display === '') {
        jsDetails.style.display = 'block';
        toggleJsBtn.textContent = "Hide details";
    } else {
        jsDetails.style.display = 'none';
        toggleJsBtn.textContent = "Show details";
    }
});

/* Alert on pets page */

const pets = document.getElementById('pets-link');
pets.addEventListener('click', function() {
    alert('Welcome to my pets page!');
});