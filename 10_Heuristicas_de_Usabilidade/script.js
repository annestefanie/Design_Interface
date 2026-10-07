let barraNav = document.querySelector('nav')
let btnToggle = document.querySelector('.btnToggle')

function ocultarNav(){
    barraNav.classList.toggle = 'recolhida'  
    barraNav.style.paddingLeft = '1rem'  
}
function abrir10HN(){
    addEventListener('click', () => {
    const opcoesHN = document.createElement('div')
    opcoesHN.id = 'opcoesHN'
    opcoesHN.classList.toggle = 'fechada'

    const umHN = document.createElement('a');
    const doisHN = document.createElement('a');
    const tresHN = document.createElement('a');
    const quatroHN = document.createElement('a');
    const cincoHN = document.createElement('a');
    const seisHN = document.createElement('a');
    const seteHN = document.createElement('a');
    const oitoHN = document.createElement('a');
    const noveHN = document.createElement('a');
    const dezHN = document.createElement('a');

    const botoesHN = [] = [umHN, doisHN, tresHN, quatroHN, cincoHN, seisHN, seteHN, oitoHN, noveHN, dezHN]
    
    for(let i = 0; i < 10; i++){
        botoesHN[i].classList.add = 'botoesHN'
        botoesHN[i].innerHTML = `${botoesHN[i].textContent}`
        barraNav.appendChild(botoesHN[i])
    }
    
    barraNav.appendChild(opcoesHN)

    })
}