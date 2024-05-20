
const body = document.querySelector('body');
const textElements = document.querySelectorAll('.texto');
const buttons = document.querySelectorAll('button');
const links = document.querySelectorAll('a');

function mostrarConteudo() {
    document.body.classList.add('ativo');
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const audio = document.querySelector('audio');
        audio.play();
    });

    button.addEventListener('mouseover', function () {
        const audiohover = document.getElementById('audiohover');
        audiohover.play();
    });
});

links.forEach(link => {
    link.addEventListener('click', function () {
        const audio = document.querySelector('audio');
        audio.play();
    });
});

setTimeout(mostrarConteudo, 600);

document.querySelector('.barra-carregamento').classList.add('animado');


