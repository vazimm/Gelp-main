document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById("toggle-opinion-btn"); // Renomeie o botão se necessário
    const opinionDiv = document.querySelector(".opiniao-intrutor");
    const verifDiv = document.getElementById("verificadores");

    toggleBtn.addEventListener("click", function() {
        // Verifica se ambos estão ocultos
        if ((opinionDiv.style.display === "none" || opinionDiv.style.display === "") &&
            (verifDiv.style.display === "none" || verifDiv.style.display === "")) {
            opinionDiv.style.display = "block";
            verifDiv.style.display = "block";
            toggleBtn.textContent = "Ocultar Opinião e Verificadores";
        } else {
            opinionDiv.style.display = "none";
            verifDiv.style.display = "none";
            toggleBtn.textContent = "Mostrar Opinião e Verificadores";
        }
    });
});