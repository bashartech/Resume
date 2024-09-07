var education = document.querySelector(".education");
var icon = document.querySelector(".education span img");
var sec1 = document.querySelector(".sec1");
var skills = document.querySelector(".skills");
var icon2 = document.querySelector(".skills span img");
var sec2 = document.querySelector(".sec2");
var workExperience = document.querySelector(".workExperience");
var sec3 = document.querySelector(".sec3");
var icon3 = document.querySelector(".workExperience span img");
icon.addEventListener("click", function () {
    if (sec1.style.display === "none") {
        sec1.style.display = "block";
        icon.textContent = "Hide";
    }
    else {
        sec1.style.display = "none";
        icon.textContent = "Show"; // Change button text to 'Show'
    }
});
icon2.addEventListener("click", function () {
    if (sec2.style.display === "none") {
        sec2.style.display = "block";
        icon2.textContent = "Hide";
    }
    else {
        sec2.style.display = "none";
        icon2.textContent = "Show"; // Change button text to 'Show'
    }
});
icon3.addEventListener("click", function () {
    if (sec3.style.display === "none") {
        sec3.style.display = "block";
        icon3.textContent = "Hide";
    }
    else {
        sec3.style.display = "none";
        icon3.textContent = "Show"; // Change button text to 'Show'
    }
});
