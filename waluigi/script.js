document.addEventListener('DOMContentLoaded', () => {
        const swiper = new Swiper('.meu-carrossel', {
            // Configurações opcionais
            loop: true, // Faz o carrossel voltar ao início infinitamente

            slidesPerView: 3,

            spaceBetween: 50,

            centeredSlides: true,

            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },

            // Ativa a paginação por pontinhos
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Ativa as setas de navegação
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // effect: fade,
        });
})