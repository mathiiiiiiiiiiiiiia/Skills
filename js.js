document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // Mostrar el botón cuando el usuario se desplaza hacia abajo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Mostrar el botón después de desplazarse 300px
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Desplazarse al principio de la página cuando se hace clic en el botón
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
