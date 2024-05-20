const jogarButton = document.getElementById('jogar');
const creditosButton = document.getElementById('creditos');
const configuracoesButton = document.getElementById('configuracoes');
const sairButton = document.getElementById('sair');
const body = document.querySelector('body');
const textElements = document.querySelectorAll('.texto');
const buttons = document.querySelectorAll('button');
const creditosBtn = document.getElementById('creditos');
const fecharPortfolioBtn = document.getElementById('fecharPortfolio');
const portfolio = document.getElementById('portfolio');
const links = document.querySelectorAll('a');

function toggleTheme() {
    body.classList.toggle('white-mode');
    document.querySelector('header').classList.toggle('white-mode');
    document.querySelector('footer').classList.toggle('white-mode');
    jogarButton.classList.toggle('white-mode');
    creditosButton.classList.toggle('white-mode');
    configuracoesButton.classList.toggle('white-mode');
    sairButton.classList.toggle('white-mode');
    textElements.forEach(element => {
        element.classList.toggle('white-mode');
    });
    buttons.forEach(button => {
        button.classList.toggle('white-mode');
    });
}

function mostrarConteudo() {
    document.body.classList.add('ativo');
}

function fadeIn(element) {
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.3;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

function fadeOut(element) {
    let opacity = 1;
    const interval = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.9;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
            portfolio.classList.add('escondido');
        }
    }, 20);
}

jogarButton.addEventListener('click', () => {
    window.location.href = "demo.html";
});

sairButton.addEventListener('click', () => {
    window.location.href = "https://github.com/TechGui/Imersao_IA_Gemini";
});

configuracoesButton.addEventListener('click', toggleTheme);

creditosBtn.addEventListener('click', () => {
    portfolio.classList.remove('escondido');
    portfolio.style.opacity = 0;
    fadeIn(portfolio);
});

fecharPortfolioBtn.addEventListener('click', () => {
    fadeOut(portfolio);
});

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

window.addEventListener('mouseover', function () {
    const audiomenu = document.getElementById('audiomenu');
    audiomenu.play();
});

if (localStorage.getItem('tema') === 'claro') {
    toggleTheme();
}

setTimeout(mostrarConteudo, 1400);

document.querySelector('.barra-carregamento').classList.add('animado');

creditosBtn.addEventListener('click', () => {
    buttons.forEach(button => {
        if (button == creditosButton) {
            button.style.display = 'none';
        }
    });
    portfolio.style.display = 'block';
    document.querySelector('aside').style.display = 'none';
});

fecharPortfolioBtn.addEventListener('click', () => {
    buttons.forEach(button => {
        if (button == fecharPortfolioBtn) {
            button.style.display = 'block';
        }
    });
    portfolio.style.display = 'none';
    document.querySelector('aside').style.display = 'block';
    creditosButton.style.display = 'block'; // Add this line to make creditosButton appear again
});

window.onload = function() {
    setTimeout(function() {
      document.body.style.backgroundSize = "100%"; /* Define o tamanho final da imagem */
    }); /* Ajusta o valor para 10000 para uma transição de 10 segundos */
  };