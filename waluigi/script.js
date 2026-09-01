document.addEventListener('DOMContentLoaded', () => {
    let swiper;
    function loadData() {
        const wrapper = document.getElementById('wrapper')

        fetch('./Conteudo.json')
            .then(response => response.json())
            .then(json => {
                json.forEach(e => {
                    wrapper.innerHTML += `
                    <div class="swiper-slide">
                        <div class="card">
                            <h1 class="Grow-Text">Projeto <br> ${e.h1}</h1>
                            <p >
                                <b>Resumo:</b> ${e.p1} <br>
                                <b>Detalhamento:</b> ${e.p2}
                            </p>
                        </div>
                    </div>
                `
                });

                swiper = new Swiper('.meu-carrossel', {
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
            })
            .catch(error => console.error("Deu merda: ", error))
    }

    loadData();

    // --- FUNÇÃO PARA ALTERNAR (TOGGLE) O AUTOPLAY ---
    let estaRodando = true;
    const autoButton = document.getElementById("auto-button")
    autoButton.onclick = (() => {
        if (estaRodando) {
            swiper.autoplay.stop(); // Para o carrossel
            estaRodando = false;
            console.log('Autoplay Pausado!');
        } else {
            swiper.autoplay.start(); // Retoma o carrossel
            estaRodando = true;
            console.log('Autoplay Iniciado!');
        }
    })
});