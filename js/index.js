document.querySelector('.btn-hambuguer').addEventListener('click', function () {
    let menu = document.querySelector('.menu-hiden');
    menu.classList.toggle('show');
});


let imagens = ["img/mulher-fundo-azul1.jpg", "img/mulher-fundo-azul2.jpg" , "img/mulher-fundo-branco.jpg"];

for (let i = 0; i < imagens.length; i++) {
    document.querySelector('.barra:nth-child(' + (i + 1) + ')').addEventListener('click', ()=> {
        trocarImagem(i);
    });
}

function trocarImagem(indice) {
    let imagem = document.querySelector('.carrosel-img');
    imagem.src = imagens[indice];
}





