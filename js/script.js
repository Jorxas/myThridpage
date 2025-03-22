document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navContainer = document.getElementById("nav-container");

    menuToggle.addEventListener("click", function () {
        navContainer.classList.toggle("active"); // Afficher / cacher la navigation
    });
});