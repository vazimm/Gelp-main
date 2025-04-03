// Código para ocultar e exibir o header ao rolar a página
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Se estiver rolando para baixo, oculta o header.
        header.style.top = "-100px";
    } else {
        // Se estiver rolando para cima, exibe o header.
        header.style.top = "0";
    }
    lastScrollY = window.scrollY;
});

// Rolagem suave para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Remove a classe 'active' para minimizar o menu
            document.querySelector('nav').classList.remove('active');
        }
    });
});