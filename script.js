const imagens = ["imagens/1.jpg", "imagens/2.jpg", "imagens/3.jpg", "imagens/4.jpg", "imagens/5.jpg", "imagens/6.jpg"];
let atual = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  atual = (atual + 1) % imagens.length;
  slide.src = imagens[atual];
}, 3000); // muda a cada 3 segundos

  function criarCoracao() {
  const coracoesContainer = document.querySelector('.coracoes');
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = 4 + Math.random() * 2 + 's';
  coracoesContainer.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

setInterval(criarCoracao, 300);