document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById("toggle-opinion-btn");
    const opinionDiv = document.querySelector(".opiniao-intrutor");

    toggleBtn.addEventListener("click", function() {
        if (opinionDiv.style.display === "block") {
            opinionDiv.style.display = "none";
            toggleBtn.textContent = "Mostrar Opinião do Instrutor";
        } else {
            opinionDiv.style.display = "block";
            toggleBtn.textContent = "Ocultar Opinião do Instrutor";
        }
    });
});