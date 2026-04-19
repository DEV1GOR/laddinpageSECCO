document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    let textoWhatsapp = `Olá! Me chamo *${nome}*`;

    if (empresa) {
      textoWhatsapp += ` da empresa *${empresa}*`;
    }

    textoWhatsapp += `.\n\nMeu email de contato é: ${email}\n\n*Mensagem:*\n${mensagem}`;

    const textoCodificado = encodeURIComponent(textoWhatsapp);
    const numeroWhatsapp = "5581995718479";

    const url = `https://wa.me/${numeroWhatsapp}?text=${textoCodificado}`;

    window.open(url, "_blank");
  });

function iniciarJornada() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function abrirChat() {
  window.location.href = "contato.html";
}
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
