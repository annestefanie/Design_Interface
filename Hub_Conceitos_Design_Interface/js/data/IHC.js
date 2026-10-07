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

const principiosData = [
    {
        id:"consistencia",
        detalhes: 
        `
        <h3>Constistência</h3>
        <p class="paragrafo">
            É sobre manter elementos iguais e previsíveis em todo o sistema. Isso ajuda a 
            aprender mais rápido e não ficar confuso.
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
            Pense em botões de ação em sites. Se todos os botões de confirmação, como salvar
            ou continuar forem verdes e posicionados em um só lugar em todas as páginas, isso 
            é consistência.
        </p>
        <img src="img/salvar.webp">
        `
    },
    {
        id: "feedback",
        detalhes: 
        `
        <h3>Feedback</h3>
        <p class="paragrafo">
            É sobre dar uma resposta imediata para o usuário sobre a ação que ele acabou de tomar.
            Sem isso, o usuário pode ficar confuso de funcionou ou não.
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
            Quando preenchemos um formulário, e ao clicar em enviar, recebemos uma mensagem 
            dizendo que a ação foi realizada com sucesso.
        </p>
        <img src="img/feedback.webp">
        `
    },
    {
        id: "visibilidade",
        detalhes: 
        `
        <h3>Visibilidade</h3>
        <p class="paragrafo">
            Significa que os controles e opções mais importantes devem estar claros e acessíveis
            para o usuário. Se está escondido, a pessoa pode ter dificuldade de realizar uma tarefa.
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
            O botão de sair ou Log Out em um painel de usuário deve ficar bem claro com uma cor contrastante
            para que a pessoa saiba como encerrar a sessão.
        </p>
        <img src="img/sair.webp">
        `
    },
    {
        id: "recuperacaoDeErros",
        detalhes: 
        `
        <h3>Recuperação de Erros</h3>
        <p class="paragrafo">
            Permita que o usuário corrija algum equívoco ou uma ação errada usando mecanismos de "desfazer" ou
            avisos claros antes de uma ação irreversível.
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
            O botão "desfazer" do e-mail permite isso. Após um envio, ele aparece ou uma mensagem de confirmação
            antes de apagar um arquivo permanente.
        </p>
        <img src="img/desfazer.webp">
        `
    },
    {
        id: "restricao",
        detalhes: 
        `
        <h3>Restrição</h3>
        <p class="paragrafo">
            Partindo do princípio que os usuários podem cometer erros, é necessário desativar algumas opções de forma 
            que ajude ele a evitar. 
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
            Num site de agendamento de viagens, é impossível escolher datas que já passaram no calendário
        </p>
        <img src="img/restricao.webp">
        `
    },
    {
        id: "aprendizado",
        detalhes: 
        `
        <h3>Aprendizado</h3>
        <p class="paragrafo">
            É sobre como um sistema intuitivo permite que novos usuários comecem a usá-lo rapidamente e com mínimo
            de esforço ou treinamento.
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
            Num app de comida, a maioria das pessoas não vão ter dificuldades para escolher a comida, pedir, pagar e
            fechar o pedido sem um manual.
        </p>
        <img src="img/aprendizado.webp">
        `
    },
    {
        id: "simplicidade",
        detalhes: 
        `
        <h3>Simplicidade</h3>
        <p class="paragrafo">
            Significa reduzir ao mínimo as informações e ações necessárias, focando no que é
            necessário para o usuário realizar suas tarefas.
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
            O google possui basicamente a caixa de pesquisa em sua home page, para evitar distrações
        </p>
        <img src="img/simplicidade.webp">
        `
    },
    {
        id: "modelosMentais",
        detalhes: 
        `
        <h3>Modelos Mentais</h3>
        <p class="paragrafo">
            São as expectativas que o usuário já tem sobre como o sistema funciona, baseadas na suas 
            experiências passadas. Uma boa interface respeita esses modelos.
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
            O carrinho de compras em aplicações web é o símbolo da compra. Já é amplamente utilizado em 
            e-commerces e os usuários entendem que a funcionalidade do botão é adicionar a lista de compras.
        </p>
        <img src="img/modelos.webp">
        `
    },
    {
        id: "affordance",
        detalhes: 
        `
        <h3>Affordance</h3>
        <p class="paragrafo">
            São as propriedades de um objeto em interfaces digitais, que mostram claramente a função de um componente
            por meio de elementos visuais.
        </p>
        <h4>Exemplo</h4>
        <p class="paragrafo">
           Um exemplo é um botão com sombreamento ou profundidade que parece saltar da tela, indentificando que ele pode 
           ser pressionado
        </p>
        <img src="img/affordance.webp">
        `
    }
]