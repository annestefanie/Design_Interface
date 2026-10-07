document.addEventListener("DOMContentLoaded", () => {
    const slideTrack = document.querySelector('.slideTrack');
    const slide = document.querySelector('.slide');

    if (!slideTrack || !slide) return;

    let posicao = 0;
    const velocidade = 1; // Ajuste a velocidade aqui (ex: 0.5 para mais lento, 2 para mais rápido)
    let emPausa = false;

    // Duplica o conteúdo para garantir loop infinito contínuo
    const grupoOriginal = slideTrack.querySelector('.slideGrupo');
    if (grupoOriginal && slideTrack.children.length === 1) {
        const clonado = grupoOriginal.cloneNode(true);
        slideTrack.appendChild(clonado);
    }

    function animarSlide() {
        if (!emPausa) {
            posicao -= velocidade;

            // Largura de metade do track (um grupo de imagens)
            const metadeLargura = slideTrack.scrollWidth / 2;

            // Reseta a posição quando metade das imagens saírem da tela
            if (Math.abs(posicao) >= metadeLargura) {
                posicao = 0;
            }

            slideTrack.style.transform = `translateX(${posicao}px)`;
        }
        requestAnimationFrame(animarSlide);
    }

    // Pausa ao passar o mouse (Hover)
    slide.addEventListener('mouseenter', () => emPausa = true);
    slide.addEventListener('mouseleave', () => emPausa = false);

    // Inicia a animação
    animarSlide();
});