document.querySelector('.btn-hambuguer').addEventListener('click', () =>{
    let menu = document.querySelector('.menu-hiden')
    menu.classList.toggle('show')
})

let imagens = ["img/mulher-fundo-azul1.jpg", "img/mulher-fundo-azul2.jpg" , "img/mulher-fundo-branco.jpg"]
let barras = document.querySelectorAll('.barra')
let imagem = document.querySelector('.carrosel-img')

barras.forEach((barra, i) => {
    barra.addEventListener('click', () => {
        trocarImagem(i)
    })
})

function trocarImagem(indice) {
    imagem.src = imagens[indice]
    
    barras.forEach((barra) => barra.classList.remove('barra-selecionada'))
    barras[indice].classList.add('barra-selecionada')
}
