let imgMudancas = document.getElementById('imgMudancas')
let imgSrc = []
let textoMudancas = []
let tituloMudancas = []
let i = 0

imgSrc[0] = "./img/eniac1.jpg"
imgSrc[1] = "./img/decada60.webp"
imgSrc[2] = "./img/decada70.webp"
imgSrc[3] = "./img/decada80.webp"
imgSrc[4] = "./img/decada90.webp"
imgSrc[5] = "./img/anos2000.webp"

tituloMudancas[0] = "Década de 50"
tituloMudancas[1] = "Década de 60"
tituloMudancas[2] = "Década de 70"
tituloMudancas[3] = "Década de 80"
tituloMudancas[4] = "Década de 90"
tituloMudancas[5] = "Anos 2000 +"

textoMudancas[0] = 
    "Nessa geração, os computadores funcionavam por meio de circuitos e válvulas eletrônicas, consumindo muita energia. O computador ao lado foi um desses, chamado ENIAC. Ele exigia profissonais muito expeientes para manuseá-los, sem interfaces."
textoMudancas[1] = 
    "Até a década de 60, interface gráfica não existia da forma como conhecemos, eram apenas linha de código. Já existiam estudos sobre a computação gráfica e a utilização de canetas como marcadores de tela."
textoMudancas[2] = 
    "Em 1973, foi desenvolvido o primeiro computador a apresentar uma interface gráfica de usuário que tinham como características janelas, que possuíam bordas e barras de títulos que permitiam a identificação e o reposicionamento delas, além de conter o primeiro menu de dropdown fixo. Nessa época também foi apresentados os mouses e joysticks"
textoMudancas[3] =
     "No início da década de 1980, a única mídia disponível para uso era o texto formatado. Conforme o fim da década foi se aproximando, novas tecnologias foram desenvolvidas: Hypertext, HyperCard, formatos padrões de imagem, formatos de discurso sintético. Além da difusão dos computadores e primeiros sistemas multimídia."
textoMudancas[4] =  
    "Tela com ícones, barra de tarefas de cor cinza, necessário a utilização de um mouse para conseguir clicar nos ícones e acessar suas respectivas informações. Ícones contornados, cores não muito vivas. Alguns aparelhos contavam com a utilização de botões (por hardware). Passou a difundir a hipermídia e a internet e com o advento dos microprocessadores e arquitetura ARM foi possível a criação de celulares."
textoMudancas[5] =  
    "Tela touch screen, comandos por voz, realidade virtual, inteligência artificial...Para o futuro é estudado o uso de computadores quânticos e neurais."

function swipeRight(){
    i = (i + 1) % 6
    imgMudancas.classList = 'imgMudancas'
    imgMudancas.src = imgSrc[i]
    document.getElementById('tituloMudancas').innerHTML = tituloMudancas[i]
    document.getElementById('textoMudancas').innerHTML = textoMudancas[i]
} 
function swipeLeft(){
    i = (i - 1 + 6) % 6
    imgMudancas.src = imgSrc[i]
    document.getElementById('tituloMudancas').innerHTML = tituloMudancas[i]
    document.getElementById('textoMudancas').innerHTML = textoMudancas[i]
}