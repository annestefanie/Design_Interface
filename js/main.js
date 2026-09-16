function abrirDiv(id, dados){
    const item = dados.find(p => p.id === id);
    if (!item) return

    document.getElementById('conteudoPrincipio').innerHTML = item.detalhes
    document.getElementById('divPrincipios').classList.add("ativo")
    document.getElementById('overlay').classList.add("ativo")
}

function fecharDiv(){
    document.getElementById('divPrincipios').classList.remove("ativo")
    document.getElementById('overlay').classList.remove("ativo")
}