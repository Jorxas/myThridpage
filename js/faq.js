document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }



    var latitude = 50.582350146147874 ;
    var longitude = 8.697167811151724;
  
    // Créer la carte centrée sur cette position
    var map = L.map('map').setView([latitude, longitude], 13);

    // Ajouter le fond de carte OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Ajouter un marqueur à la position fixe
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup("📍 fridensstraße 18 ,35394 Giessen")
        .openPopup();



});


