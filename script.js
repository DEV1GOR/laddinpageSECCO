document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      console.log(
        `Você clicou no card: ${card.querySelector(".service-title").innerText}`,
      );
    });
  });
});

/* =========================================
   SCRIPT JAVASCRIPT PARA O MODAL
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Banco de dados simulado com as informações de cada projeto
  const projectsData = {
    geocarbo: {
      tags: "SAAS &middot; IA &middot; SUSTENTABILIDADE",
      title: "GeoCarbo",
      desc: "A GeoCarbo é uma plataforma inovadora de Software as a Service (SaaS) dedicada ao monitoramento e mensuração de créditos de carbono, com foco inicial no bioma Caatinga. Utilizando imagens de satélite avançadas e algoritmos de Inteligência Artificial, o sistema analisa a biomassa e o potencial de sequestro de carbono em tempo real, oferecendo relatórios precisos para proprietários de terras e investidores sustentáveis.",
      img: "img/carbo.jpeg  ", // Placeholder de satélite/terra
    },
    gestao: {
      tags: "WEB APP &middot; DJANGO &middot; REACT",
      title: "Sistema de Gestão Logística",
      desc: "Desenvolvimento de um ERP (Enterprise Resource Planning) totalmente customizado para atender às necessidades complexas de operações logísticas. O sistema conta com um backend robusto em Python/Django, garantindo segurança e escalabilidade, e um frontend reativo em React. Oferece dashboards dinâmicos em tempo real, gestão de frotas, controle de estoque e integração com APIs de roteirização.",
      img: "img/ERP.png", // Placeholder de dashboard
    },
    landing: {
      tags: "LP &middot; PERFORMANCE &middot; SEO",
      title: "Landing Page de Alta Conversão",
      desc: "Página estratégica desenvolvida para o lançamento de um infoproduto no mercado digital. Focada inteiramente em performance (Load time < 1s) e otimização para motores de busca (SEO). A página inclui testes A/B nativos integrados para analisar o comportamento do usuário e maximizar as taxas de captura de leads e vendas diretas, utilizando copy persuasiva e design centrado no usuário.",
      img: "img/elite.png", // Placeholder de web design
    },
  };

  // 2. Selecionando os elementos do DOM
  const modal = document.getElementById("project-modal");
  const closeBtn = document.querySelector(".modal-close");
  const cards = document.querySelectorAll(".portfolio-card");

  // Elementos internos do modal que serão alterados
  const modalImg = document.getElementById("modal-img");
  const modalTags = document.getElementById("modal-tags");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");

  // 3. Função para abrir o modal com os dados corretos
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // Pega o ID do projeto armazenado no atributo data-project (ex: 'geocarbo')
      const projectId = card.getAttribute("data-project");
      const data = projectsData[projectId];

      // Verifica se os dados existem
      if (data) {
        // Preenche o modal
        modalImg.src = data.img;
        modalImg.alt = `Imagem do projeto ${data.title}`;
        modalTags.innerHTML = data.tags;
        modalTitle.innerText = data.title;
        modalDesc.innerText = data.desc;

        // Mostra o modal (adiciona a classe CSS)
        modal.classList.add("show");
        // Impede o scroll da página ao fundo
        document.body.style.overflow = "hidden";
      }
    });
  });

  // 4. Função para fechar o modal
  const closeModal = () => {
    modal.classList.remove("show");
    // Restaura o scroll da página
    document.body.style.overflow = "auto";

    // Limpa o src da imagem após a animação (opcional, bom para performance)
    setTimeout(() => {
      modalImg.src = "";
    }, 300);
  };

  // Fechar ao clicar no botão X
  closeBtn.addEventListener("click", closeModal);

  // Fechar ao clicar fora do conteúdo do modal (no fundo escuro)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fechar ao apertar a tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
});

/* =========================================
   SCRIPT JAVASCRIPT: ENVIO PARA WHATSAPP
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const formWhatsapp = document.getElementById("form-whatsapp");

  if (formWhatsapp) {
    formWhatsapp.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o recarregamento da página

      // Captura os valores dos campos
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const telefone = document.getElementById("telefone").value;
      const assunto = document.getElementById("assunto").value;
      const mensagem = document.getElementById("mensagem").value;
      const numeroSecco = "5581991413580";

      // Monta o texto da mensagem com formatação para o WhatsApp (*negrito*)
      const textoMensagem =
        `*Novo Contato pelo Site - Secco*\n\n` +
        `*Nome:* ${nome}\n` +
        `*E-mail:* ${email}\n` +
        `*Telefone:* ${telefone ? telefone : "Não informado"}\n` +
        `*Assunto:* ${assunto}\n` +
        `*Mensagem:* ${mensagem}`;

      // Codifica o texto para URL (substitui espaços, quebras de linha, etc)
      const textoCodificado = encodeURIComponent(textoMensagem);

      // Cria a URL do WhatsApp
      const urlWhatsapp = `https://wa.me/${numeroSecco}?text=${textoCodificado}`;

      // Abre o WhatsApp em uma nova aba
      window.open(urlWhatsapp, "_blank");
    });
  }
});

/* =========================================
   ADICIONE NO FINAL DO SEU SCRIPT.JS
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  const animatedElements = document.querySelectorAll(
    ".animate-up, .animate-left, .animate-right",
  );
  animatedElements.forEach((el) => observer.observe(el));
});
