let imgComputer = document.getElementById('imgComputer')
let imgSrc = []
let evolutionText = []
let i = 0
let item = [] = document.querySelectorAll(".item")

imgSrc[0] = "./imagens/cartoesPerfurados.jpg"
imgSrc[1] = "./imagens/eniacComputador.webp"
imgSrc[2] = "./imagens/segundaGeracao.webp"
imgSrc[3] = "./imagens/terceiraGeracao.webp"
imgSrc[4] = "./imagens/quartaGeracao.webp"
imgSrc[5] = "./imagens/celular.webp"

evolutionText[0] = "No início da computação, os  computadores eram enormes, nada acessíveis ao público geral e ocupavam salas inteiras. Não haviam interfaces, todas as instruções necessárias eram feitas por cartões perfurados ou fitas magnéticas. Depois de dias, os resultados eram apresentados e caso houvesse algum erro, era necessário refazer todo o processo."
evolutionText[1] = "<strong>Primeira Geração</strong><br>Nessa geração, os computadores funcionavam por meio de circuitos e válvulas eletrônicas, consumindo muita energia. O computador ao lado foi um desses, chamado ENIAC."
evolutionText[2] = "<strong>Segunda Geração</strong><br>Marcada pelo surgimento dos transistores, que funcionavam de maneira mais rápida comparado com as válvulas. A partir disso, os computadores começam a ser utilizados no meio comercial gradualmente. Foram criadas as primeiras linguagens de programação, facilitando a interação humano-computador."
evolutionText[3] = "<strong>Terceira Geração</strong><br>Nessa época houve o uso dos chamados circutos integrados, que permitiram computadores menores e mais rápidos. Foi durante esse período que criaram os primeiros sistemas operacionais, permitindo a multiprogramação por meio de linhas de comando."
evolutionText[4] = "<strong>Quarta Geração</strong><br>Com a chegada dos microprocessadores, as pessoas passaram a ter computadores pessoais. A interface gráfica com o uso do mouse e incones tornou a interação muito mais intuitiva e acessível ao público geral. O tamanho dos computadores diminuiram drasticamente, sendo possível a criação de dispositivos móveis."
evolutionText[5] = "<strong>Quinta Geração</strong><br>Atualmente em formação, ela é marcada pelo avanço da Inteligência Artificial e LLM, permitindo que os computadores entendam comandos por voz ou até respondam de maneira conversacional com os usuários. Para o futuro é estudado o uso de computadores quânticos e neurais."

function swipeRight(){
    i = (i + 1) % 6
    imgComputer.src = imgSrc[i]
    document.getElementById('evolutionText').innerHTML = evolutionText[i]
    item[i].style.backgroundColor = "#25022e"

    for(let x = 0; x < 6; x++){
        if(x != i)
            item[x].style.backgroundColor = "#e3b3ff"
    }
} 
function swipeLeft(){
    i = (i - 1 + 6) % 6
    imgComputer.src = imgSrc[i]
    document.getElementById('evolutionText').innerHTML = evolutionText[i]
    item[i].style.backgroundColor = "#25022e"

    for(let x = 0; x < 6; x++){
        if(x != i)
            item[x].style.backgroundColor = "#e3b3ff"
    }
}
