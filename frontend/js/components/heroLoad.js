// Este codigo carga el navbar

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona la clase del contenedor del hero
    const heroElement = document.querySelector(".hero-container");

    if (heroElement) {
        fetch("/frontend/views/components/hero.html")

        .then(response => {
        if (!response.ok) throw new Error("Error al cargar el hero");
        return response.text();
        })
        .then(data => {
        heroElement.innerHTML = data;
        })
    .catch(error => console.error("Error cargando hero:", error));   
    }    

});