export const translations = {
  pt: {
    common: {
      actions: {
        github: "GitHub",
        preview: "Preview",
      },
      language: {
        pt: "Português",
        en: "Inglês",
      },
    },
    header: {
      nav: {
        home: "Início",
        tech: "Tecnologias",
        projects: "Projetos",
        experience: "Experiência",
        contact: "Contato",
      },
      aria: {
        openMenu: "Abrir menu",
        closeMenu: "Fechar menu",
      },
    },
    app: {
      visitMessage: "Nova visita ao portfólio em {timestamp}.",
      hero: {
        greeting1: "Olá, sou",
        greeting2: "Miquelven Silva",
        subtitle:
          "Desenvolvedor Front-end com experiência no desenvolvimento de aplicações web, interfaces e sistemas. Trabalho principalmente com React, Next.js e TypeScript, buscando criar soluções funcionais e boas experiências para o usuário.",
        buttons: {
          contact: "Contato",
          work: "Projetos",
        },
      },
    },
    heroCard: {
      greeting: "Olá! Eu sou o",
      title: "Desenvolvedor Front-end",
      description:
        "Tenho experiência profissional com desenvolvimento de sistemas, interfaces, aplicações web e mobile, integrações e manutenção de software. Trabalho principalmente com React, Next.js e TypeScript.",
    },
    about: {
      title: {
        prefix: "Sobre Mim e",
        highlight: "Minha Jornada",
      },
      story: {
        title: "Minha História",
        p1: "Comecei a me interessar por desenvolvimento aos 16 anos, inicialmente explorando C# para criação de jogos. Após uma pausa devido a limitações técnicas, retornei ao desenvolvimento com foco em front-end.",
        p2Before:
          "Balanceando escola e trabalho, economizei para comprar um notebook e me dedicar integralmente aos estudos. Há ",
        monthsLabel: ({ count }) => (count === 1 ? "mês" : "meses"),
        p2After:
          ", venho aprimorando minhas habilidades e conhecimentos diariamente.",
        highlightBox: "Minhas principais áreas de conhecimento abrangem:",
      },
      skills: {
        title: "Habilidades Técnicas",
      },
      stats: {
        learning: {
          title: "Aprendizado Contínuo",
          description: "Sempre estudando novas tecnologias e melhores práticas",
        },
        problemSolving: {
          title: "Resolução de Problemas",
          description: "Apaixonado por encontrar soluções criativas",
        },
        innovation: {
          title: "Inovação",
          description: "Construindo aplicações modernas e eficientes",
        },
      },
    },
    techStack: {
      title: {
        prefix: "Tecnologias e",
        highlight: "Ferramentas",
      },
    },
    recentProjects: {
      title: {
        prefix: "Projetos",
        highlight: "Principais",
      },
      projects: {
        launchpad: {
          subtitle: "Landing page desenvolvida para uma tatuadora",
          category: "Landing Page",
        },
        kanbanity: {
          subtitle: "Aplicação de quadro Kanban com visual cartoon",
          category: "Produtividade",
        },
        githubAnalytics: {
          subtitle: "Dashboard para análise de perfis e repositórios",
          category: "Analytics",
        },
        mimovies: {
          subtitle: "Aplicação para explorar filmes com API externa",
          category: "Aplicação Web",
        },
        chronorun: {
          subtitle: "Projeto de games com ranking global e pessoal",
          category: "Jogo",
        },
        vinilStore: {
          subtitle: "Interface de E-commerce (Conceitual)",
          category: "Front-end",
        },
      },
    },
    experience: {
      title: {
        prefix: "Experiência",
        highlight: "Profissional",
      },
      items: {
        guicheWeb: {
          title: "Desenvolvedor Front-end",
          company: "Guichê Web",
          period: "Setembro 2024 - Janeiro 2026",
          bullets: [
            "Redesign completo do sistema interno, aprimorando interfaces e fluxos de navegação com foco em usabilidade e performance.",
            "Sustentação, manutenção e evolução contínua de aplicações web críticas.",
            "Desenvolvimento de soluções de UX/UI para novas funcionalidades e projetos do zero, garantindo consistência e usabilidade.",
            "Desenvolvimento do front-end de aplicativo para máquinas Smart (PDV) com React Native e Material UI (MUI), focando em performance e hardware embarcado.",
          ],
        },
        heptagono: {
          title: "Desenvolvedor de Automação",
          company: "Heptágono Consultoria",
          period: "Fevereiro 2026 - Maio 2026",
          bullets: [
            "Manutenção e evolução de bots de atendimento automatizado para a Hughesnet.",
            "Desenvolvimento e ajuste de fluxos conversacionais para melhorar a experiência do usuário.",
            "Implementação e manutenção de integrações com APIs e consultas SQL.",
            "Análise e correção de problemas em bots, garantindo o funcionamento adequado das automações.",
          ],
        },
      },
    },
    faq: {
      title: {
        prefix: "Seus",
        highlight: "Questionamentos",
      },
      items: {
        softSkills: {
          question: "Quais são suas soft skills?",
          answer: [
            "Resolução de problemas",
            "Comunicação",
            "Flexibilidade e trabalho em equipe",
            "Criatividade e proatividade",
          ],
        },
        fastLearning: {
          question: "O aprendizado dele é rápido para novos desafios?",
          answer:
            "Sim. Eu foco na solução e me dedico a aprender a tecnologia necessária (via documentação) no menor tempo possível. Entrego sempre código claro e organizado, priorizando a colaboração do time.",
        },
        responsiveFast: {
          question:
            "Os projetos dele funcionam bem em qualquer dispositivo e são rápidos?",
          answer:
            "Sim, é o padrão. Eu garanto que o site carregue muito rápido (otimização de código e imagens) e que funcione perfeitamente em qualquer dispositivo, priorizando a melhor experiência do usuário em todas as telas.",
        },
      },
    },
    footer: {
      goodbyeAlt: "Imagem de despedida",
      goodbyeLine1: "Até mais, obrigado",
      goodbyeLine2: "pela visita!",
    },
    toTop: {
      aria: "Botão para ir ao topo da página",
    },
    scrollProjectsCard: {
      aria: {
        fullscreen: "Abrir imagem em tela cheia",
        project: "Abrir site do projeto",
        github: "Abrir repositório no GitHub",
      },
    },
    menu: {
      aria: {
        github: "Ícone do GitHub",
        linkedin: "Ícone do LinkedIn",
        menuButton: "Botão de menu",
      },
      content: {
        about: {
          heading: "Sobre",
          subheading: "Um pouco sobre minha jornada como programador",
          alt: "Imagem do link de sobre no menu",
        },
        projects: {
          heading: "Projetos",
          subheading:
            "Exibindo meus projetos e minha paixão por desenvolvimento",
          alt: "Imagem do link de projetos no menu",
        },
        experience: {
          heading: "Experiência",
          subheading: "Minha trajetória profissional e competências",
          alt: "Imagem do link de experiência no menu",
        },
        contacts: {
          heading: "Contatos",
          subheading: "Conecte-se comigo",
          alt: "Imagem do link de contatos no menu",
        },
      },
    },
    testimonials: {
      title: {
        prefix: "O Que Dizem",
        highlight: "Do Meu Trabalho",
      },
      items: {
        thayana:
          "Atuei como gerente de projeto em que Amanda trabalhou como desenvolvedora back-end com Spring Boot/Java, e eu a recomendo fortemente como profissional. Ela se destaca pela proatividade e por consistentemente exceder expectativas. Amanda possui um conhecimento técnico incrível e está sempre disposta a expandi-lo. Durante sua participação no projeto, demonstrou notável crescimento e evolução, contribuindo com soluções criativas e excelente trabalho em equipe. Seu comprometimento, combinado com a vontade de aprender, eleva a qualidade das entregas e impulsiona o desenvolvimento do time.",
        joao: "Excelente desenvolvedor! Trabalhou em nosso projeto React com muita dedicação e entregou resultados excepcionais. Sua capacidade de resolver problemas complexos é impressionante.",
      },
    },
    contact: {
      sectionTitle: {
        prefix: "Entre em",
        highlight: "Contato",
      },
      sendMessage: "Envie uma Mensagem",
      labels: {
        email: "Email *",
        message: "Mensagem *",
      },
      placeholders: {
        email: "seu@email.com",
        message: "Sua mensagem...",
      },
      validation: {
        emailInvalid: "Email inválido",
        fieldEmpty: "O campo não pode ser vazio",
        min5: "O campo deve conter pelo menos 5 caracteres",
      },
      toasts: {
        sendError: "Erro ao enviar email. Tente novamente.",
      },
      status: {
        sending: "Enviando...",
        sent: "Email Enviado!",
        thanks: "Obrigado pelo contato",
        send: "Enviar Mensagem",
      },
    },
    sidebar: {
      aria: {
        closeMenu: "Fechar menu",
        profileAlt: "Foto de perfil de Miquelven Silva",
      },
      jobTitle: "Desenvolvedor Front End",
      contact: "Contato",
    },
    download: {
      downloading: "Baixando...",
      downloaded: "Baixado!",
      button: "Baixar CV",
      aria: "Botão para baixar o CV",
    },
    skills: {
      techAlt: "Imagem da tecnologia",
    },
  },
  en: {
    common: {
      actions: {
        github: "GitHub",
        preview: "Preview",
      },
      language: {
        pt: "Portuguese",
        en: "English",
      },
    },
    header: {
      nav: {
        home: "Home",
        tech: "Technologies",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
      },
      aria: {
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
    },
    app: {
      visitMessage: "New portfolio visit at {timestamp}.",
      hero: {
        greeting1: "Hello, I'm",
        greeting2: "Miquelven Silva",
        subtitle:
          "Front-end Developer with experience in developing web applications, interfaces, and systems. I work mainly with React, Next.js, and TypeScript, seeking to create functional solutions and good user experiences.",
        buttons: {
          contact: "Contact",
          work: "Projects",
        },
      },
    },
    heroCard: {
      greeting: "Hi! I'm",
      title: "Front-end Developer",
      description:
        "I have professional experience with systems development, interfaces, web and mobile applications, integrations, and software maintenance. I work mainly with React, Next.js, and TypeScript.",
    },
    about: {
      title: {
        prefix: "About Me and",
        highlight: "My Journey",
      },
      story: {
        title: "My Story",
        p1: "I started getting interested in development at 16, initially exploring C# for game creation. After a break due to technical limitations, I returned with a focus on front-end development.",
        p2Before:
          "Balancing school and work, I saved up to buy a laptop and fully dedicate myself to studying. For ",
        monthsLabel: ({ count }) => (count === 1 ? "month" : "months"),
        p2After: ", I've been improving my skills and knowledge every day.",
        highlightBox: "My main areas of knowledge include:",
      },
      skills: {
        title: "Technical Skills",
      },
      stats: {
        learning: {
          title: "Continuous Learning",
          description: "Always studying new technologies and best practices",
        },
        problemSolving: {
          title: "Problem Solving",
          description: "Passionate about finding creative solutions",
        },
        innovation: {
          title: "Innovation",
          description: "Building modern and efficient applications",
        },
      },
    },
    techStack: {
      title: {
        prefix: "Technologies and",
        highlight: "Tools",
      },
    },
    recentProjects: {
      title: {
        prefix: "Main",
        highlight: "Projects",
      },
      projects: {
        launchpad: {
          subtitle: "Landing page developed for a tattoo artist",
          category: "Landing Page",
        },
        kanbanity: {
          subtitle: "Kanban board application with a cartoon look",
          category: "Productivity",
        },
        githubAnalytics: {
          subtitle: "Dashboard for profile and repository analysis",
          category: "Analytics",
        },
        mimovies: {
          subtitle: "Web app for exploring movies using external API",
          category: "Web App",
        },
        chronorun: {
          subtitle: "Game project with global and personal ranking",
          category: "Game",
        },
        vinilStore: {
          subtitle: "E-commerce Interface (Conceptual)",
          category: "Front-end",
        },
      },
    },
    experience: {
      title: {
        prefix: "Professional",
        highlight: "Experience",
      },
      items: {
        guicheWeb: {
          title: "Front-end Developer",
          company: "Guichê Web",
          period: "September 2024 - January 2026",
          bullets: [
            "Complete redesign of the internal system, improving interfaces and navigation flows with a focus on usability and performance.",
            "Support, maintenance, and continuous evolution of critical web applications.",
            "Development of UX/UI solutions for new features and from-scratch projects, ensuring consistency and usability.",
            "Front-end development for Smart machines (POS) app using React Native and Material UI (MUI), focusing on performance and embedded hardware.",
          ],
        },
        heptagono: {
          title: "Automation Developer",
          company: "Heptágono Consultoria",
          period: "February 2026 - May 2026",
          bullets: [
            "Maintenance and evolution of automated service bots used by Hughesnet.",
            "Development and adjustment of conversational flows to improve user experience.",
            "Implementation and maintenance of API integrations and SQL queries.",
            "Analysis and correction of problems in bots, ensuring proper functioning of automations.",
          ],
        },
      },
    },
    faq: {
      title: {
        prefix: "Your",
        highlight: "Questions",
      },
      items: {
        softSkills: {
          question: "What are your soft skills?",
          answer: [
            "Problem solving",
            "Communication",
            "Flexibility and teamwork",
            "Creativity and proactivity",
          ],
        },
        fastLearning: {
          question: "Is your learning fast for new challenges?",
          answer:
            "Yes. I focus on the solution and dedicate myself to learning the required technology (via documentation) as quickly as possible. I always deliver clear and organized code, prioritizing team collaboration.",
        },
        responsiveFast: {
          question:
            "Do your projects work well on any device and are they fast?",
          answer:
            "Yes, it's the standard. I make sure the website loads very fast (code and image optimization) and works perfectly on any device, prioritizing the best user experience across all screen sizes.",
        },
      },
    },
    footer: {
      goodbyeAlt: "Goodbye image",
      goodbyeLine1: "See you later, thanks",
      goodbyeLine2: "for stopping by!",
    },
    toTop: {
      aria: "Button to scroll to the top of the page",
    },
    scrollProjectsCard: {
      aria: {
        fullscreen: "Open image in fullscreen",
        project: "Open project website",
        github: "Open GitHub repository",
      },
    },
    menu: {
      aria: {
        github: "GitHub icon",
        linkedin: "LinkedIn icon",
        menuButton: "Menu button",
      },
      content: {
        about: {
          heading: "About",
          subheading: "A bit about my journey as a developer",
          alt: "Menu link image for about section",
        },
        projects: {
          heading: "Projects",
          subheading: "Showcasing my projects and passion for development",
          alt: "Menu link image for projects section",
        },
        experience: {
          heading: "Experience",
          subheading: "My professional journey and skills",
          alt: "Menu link image for experience section",
        },
        contacts: {
          heading: "Contact",
          subheading: "Connect with me",
          alt: "Menu link image for contact section",
        },
      },
    },
    testimonials: {
      title: {
        prefix: "What People Say",
        highlight: "About My Work",
      },
      items: {
        thayana:
          "I acted as the project manager where Amanda worked as a backend developer with Spring Boot/Java, and I highly recommend her as a professional. She stands out for her proactivity and consistently exceeding expectations. Amanda possesses incredible technical knowledge and is always eager to expand it. During her participation in the project, she demonstrated remarkable growth and evolution, contributing creative solutions and excellent teamwork. Her commitment, combined with her willingness to learn, enhances the quality of deliverables and drives team development.",
        joao: "Excellent developer! He worked on our React project with great dedication and delivered outstanding results. His ability to solve complex problems is impressive.",
      },
    },
    contact: {
      sectionTitle: {
        prefix: "Get in",
        highlight: "Touch",
      },
      sendMessage: "Send a Message",
      labels: {
        email: "Email *",
        message: "Message *",
      },
      placeholders: {
        email: "your@email.com",
        message: "Your message...",
      },
      validation: {
        emailInvalid: "Invalid email",
        fieldEmpty: "Field cannot be empty",
        min5: "Field must contain at least 5 characters",
      },
      toasts: {
        sendError: "Error sending email. Try again.",
      },
      status: {
        sending: "Sending...",
        sent: "Email Sent!",
        thanks: "Thanks for reaching out",
        send: "Send Message",
      },
    },
    sidebar: {
      aria: {
        closeMenu: "Close menu",
        profileAlt: "Profile photo of Miquelven Silva",
      },
      jobTitle: "Front-End Developer",
      contact: "Contact",
    },
    download: {
      downloading: "Downloading...",
      downloaded: "Downloaded!",
      button: "Download CV",
      aria: "Button to download the CV",
    },
    skills: {
      techAlt: "Technology image",
    },
  },
};
