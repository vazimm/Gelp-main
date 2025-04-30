document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById("toggle-opinion-btn");
    const opinionDiv = document.querySelector(".opiniao-intrutor");
    const verifDiv = document.getElementById("verificadores"); // Pode ser null em módulo 4

    toggleBtn.addEventListener("click", function () {
        // Verifica se a opinião está oculta
        let opHidden = opinionDiv && (opinionDiv.style.display === "none" || opinionDiv.style.display === "");
        // Se existir verifDiv, verifica; caso contrário, já consideramos como oculta
        let verifHidden = !verifDiv || (verifDiv.style.display === "none" || verifDiv.style.display === "");

        if (opHidden && verifHidden) {
            if (opinionDiv) opinionDiv.style.display = "block";
            if (verifDiv) verifDiv.style.display = "block";
            toggleBtn.textContent = "Ocultar Opinião e Verificadores";
        } else {
            if (opinionDiv) opinionDiv.style.display = "none";
            if (verifDiv) verifDiv.style.display = "none";
            toggleBtn.textContent = "Mostrar Opinião e Verificadores";
        }
    });
});