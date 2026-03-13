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
      tags: "SAAS · IA · GEOESPACIAL",
      title: "GeoCarbo",
      desc: "Plataforma SaaS para monitoramento de créditos de carbono utilizando análise geoespacial e inteligência artificial. O sistema processa imagens de satélite e dados ambientais para estimar captura de carbono e gerar relatórios para projetos ambientais.",
      img: "img/carbo.jpeg",
    },

    gestao: {
      tags: "WEB APP · DJANGO · REACT",
      title: "Sistema de Gestão Logística",
      desc: "ERP personalizado para operações logísticas com controle de entregas, rotas, estoque e dashboards em tempo real. Desenvolvido com backend em Django e frontend em React para alta performance e escalabilidade.",
      img: "img/ERP.png",
    },

    automacao: {
      tags: "AUTOMAÇÃO · APIs · WORKFLOWS",
      title: "Plataforma de Automação Empresarial",
      desc: "Sistema de automação de processos empresariais que permite integrar diferentes serviços via APIs e criar workflows inteligentes. Automatiza tarefas operacionais e integra sistemas corporativos.",
      img: "img/autoflow.jpeg ",
    },

    analytics: {
      tags: "DATA · DASHBOARD · ANALYTICS",
      title: "Plataforma de Analytics",
      desc: "Dashboard para análise de dados empresariais com visualização de métricas, relatórios e gráficos interativos. Permite acompanhar indicadores estratégicos em tempo real.",
      img: "img/analytics.jpeg",
    },

    api: {
      tags: "API · BACKEND · INTEGRAÇÕES",
      title: "API de Integração Empresarial",
      desc: "Backend desenvolvido para integração entre diferentes sistemas corporativos utilizando APIs REST seguras, autenticação JWT e processamento de dados em larga escala.",
      img: "img/API.png",
    },

    landing: {
      tags: "LP · PERFORMANCE · SEO",
      title: "Landing Page de Conversão",
      desc: "Página de alta performance desenvolvida para lançamento de produtos digitais com foco em conversão, otimização SEO e testes A/B integrados.",
      img: "img/elite.png",
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
