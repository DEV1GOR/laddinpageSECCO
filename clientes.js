/**
 * Lógica da página de Clientes
 */

function iniciarJornada() {
  window.location.href = "contato.html";
  // Aqui você pode colocar um window.location.href = 'contato.html';
}

function abrirChat() {
  window.location.href = "contato.html";
  // Lógica para abrir um modal ou widget de chat real (ex: WhatsApp ou Zendesk)
}

// Pequeno efeito opcional de parallax suave ao rolar a página para a ilustração
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const svgIllustration = document.querySelector(".illustration-container svg");

  if (svgIllustration) {
    // Move levemente a ilustração para baixo conforme faz scroll
    svgIllustration.style.transform = `translateY(${scrollY * 0.1}px)`;
  }
});
/* Adicione este código no final de todos os seus arquivos JS (script.js, clientes.js, servicos.js, contato.js) */

document.addEventListener("DOMContentLoaded", () => {
  // Interceptador de cliques nos links para fazer uma transição suave de saída
  const links = document.querySelectorAll(
    'a[href]:not([target="_blank"]):not([href^="#"])',
  );

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.href;

      // Efeito de saída
      document.body.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      document.body.style.opacity = "0";
      document.body.style.transform = "translateY(-10px)";

      setTimeout(() => {
        window.location.href = target;
      }, 400); // Tempo igual ao da transição
    });
  });

  // IntersectionObserver para as animações de rolagem (Scroll)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15, // Dispara a animação quando 15% do elemento entra na tela
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((el) => observer.observe(el));
});
