document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.meu-carrossel', {
        loop: true,
        slidesPerView: 3, // Passe como número, sem aspas
        spaceBetween: -30,
        centeredSlides: true,

        // Ativa o autoplay nativo
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // --- FUNÇÃO PARA ALTERNAR (TOGGLE) O AUTOPLAY ---
    let estaRodando = true;

    function autoplay() {
        if (estaRodando) {
            swiper.autoplay.stop(); // Para o carrossel
            estaRodando = false;
            console.log('Autoplay Pausado!');
        } else {
            swiper.autoplay.start(); // Retoma o carrossel
            estaRodando = true;
            console.log('Autoplay Iniciado!');
        }
    }
});