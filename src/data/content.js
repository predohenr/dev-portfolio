export const profile = {
  name: 'Pedro Lopes',
  fullName: 'Pedro Henrique Lopes dos Santos',
  photo: 'images/pedro.jpg',
  photoAlt: 'images/pedro-2.jpg',
  cvUrl: null,
  email: 'predohnr@gmail.com',
  formspree: 'https://formspree.io/f/xvgpqkyz',
  links: {
    github: 'https://github.com/predohenr',
    linkedin: 'https://www.linkedin.com/in/predohenr/',
    lattes: 'http://lattes.cnpq.br/9302354041102246',
    cin: 'https://www.cin.ufpe.br/',
  },
}

export const ui = {
  pt: {
    langLabel: 'Idioma',
    themeToLight: 'Mudar para tema claro',
    themeToDark: 'Mudar para tema escuro',
    menu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    skip: 'Pular para o conteúdo',
    branch: 'feat/mestrado',
    seeProjects: 'Ver projetos',
    lattes: 'Currículo Lattes',
    cv: 'Baixar CV',
    code: 'Código',
    paper: 'Artigo',
    replication: 'Pacote de replicação',
    slides: 'Slides',
    private: 'Projeto institucional',
    seeAll: 'Ver todos os eventos',
    seeLess: 'Mostrar menos',
    advisor: 'Orientação',
    coadvisor: 'Coorientação',
    thesis: 'TCC',
    project: 'Projeto',
    question: 'Pergunta de pesquisa',
    since: 'desde',
    now: 'atual',
    courses: 'Cursos e certificados',
    expected: 'Previsão de conclusão',
    journeyTabs: 'Categorias da trajetória',
    email: 'E-mail',
    form: {
      title: 'Me mande uma mensagem',
      name: 'Seu nome',
      email: 'Seu e-mail',
      message: 'Mensagem',
      send: 'Enviar mensagem',
      sending: 'Enviando…',
      ok: 'Mensagem enviada! Respondo assim que puder.',
      error: 'Não consegui enviar agora. Tente de novo ou me chame no LinkedIn.',
      invalid: 'Preencha nome, um e-mail válido e a mensagem.',
    },
    footer: 'obrigado pela visita',
    rights: 'feito com react e muito café.',
  },
  en: {
    langLabel: 'Language',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    menu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to content',
    branch: 'feat/masters',
    seeProjects: 'See projects',
    lattes: 'Lattes CV',
    cv: 'Download CV',
    code: 'Code',
    paper: 'Paper',
    replication: 'Replication package',
    slides: 'Slides',
    private: 'Institutional project',
    seeAll: 'See all events',
    seeLess: 'Show less',
    advisor: 'Advisor',
    coadvisor: 'Co-advisor',
    thesis: 'Thesis',
    project: 'Project',
    question: 'Research question',
    since: 'since',
    now: 'present',
    courses: 'Courses and certificates',
    expected: 'Expected completion',
    journeyTabs: 'Journey categories',
    email: 'E-mail',
    form: {
      title: 'Send me a message',
      name: 'Your name',
      email: 'Your e-mail',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      ok: 'Message sent! I’ll get back to you soon.',
      error: 'Couldn’t send it right now. Try again or reach me on LinkedIn.',
      invalid: 'Please fill in your name, a valid e-mail and a message.',
    },
    footer: 'thanks for visiting',
    rights: 'built with react and lots of coffee.',
  },
}

export const sections = [
  { id: 'inicio', hash: 'a3f9c1', label: { pt: 'início', en: 'home' } },
  { id: 'sobre', hash: '7b2e04', label: { pt: 'sobre mim', en: 'about' } },
  { id: 'trajetoria', hash: 'd84a2c', label: { pt: 'trajetória', en: 'journey' } },
  { id: 'projetos', hash: '1fc63e', label: { pt: 'projetos', en: 'projects' } },
  { id: 'skills', hash: '9a07d5', label: { pt: 'skills', en: 'skills' } },
  { id: 'pesquisa', hash: 'c19d8a', label: { pt: 'pesquisa', en: 'research' }, onBranch: true },
  { id: 'publicacoes', hash: '5e0b7f', label: { pt: 'publicações', en: 'publications' }, onBranch: true },
  { id: 'fora-do-codigo', hash: 'e6b21a', label: { pt: 'vida pessoal', en: 'personal life' }, merge: true },
  { id: 'contato', hash: '0c4f98', label: { pt: 'contato', en: 'contact' } },
]

export const hero = {
  path: '~/cariri → recife',
  role: {
    pt: 'Desenvolvedor FullStack & Engenheiro de Software',
    en: 'FullStack Developer & Software Engineer',
  },
  intro: {
    pt: 'Mestrando em Ciência da Computação no ==CIn-UFPE==, pesquisando ==ferramentas de merge== e ==workflows com Git==.',
    en: 'M.Sc. student in Computer Science at ==CIn-UFPE==, researching ==merge tools== and ==Git workflows==.',
  },
  log: [
    { hash: 'a3f9c1', head: true, msg: { pt: 'instrutor de DS no Senac', en: 'Systems Dev instructor at Senac' } },
    { hash: '5e0b7f', msg: { pt: 'artigo publicado no SBES 2025 e 2026', en: 'paper published at SBES 2025 and 2026' } },
    { hash: 'c19d8a', msg: { pt: 'mestrado no CIn-UFPE', en: 'M.Sc. at CIn-UFPE' } },
  ],
  badge: 'cariri · ceará → recife · pernambuco → ',
}

export const about = {
  kicker: { pt: 'biografia', en: 'biography' },
  title: { pt: 'Sobre mim', en: 'About me' },
  paragraphs: {
    pt: [
      'Olá, me chamo Pedro! Sou natural do Ceará, canhoto, moro em Recife e sou ==desenvolvedor full-stack==, ==instrutor de Desenvolvimento de Sistemas== no Senac e ==mestrando em Ciência da Computação== no Centro de Informática da UFPE, na área de Engenharia de Software.',
      'Minha pesquisa gira em torno de ==ferramentas de merge== e ==fluxos de trabalho com o Git==, mais especificamente em ferramentas de merge semiestruturadas, desenvolvimento baseado em branches e em tronco.',
      'Na graduação, fui monitor bolsista de Programação Orientada a Objetos e Laboratório de Programação e passei dois anos na Iniciação Científica investigando ==conflitos de integração de código==. Gosto de entender as coisas a fundo e de aprender coisas novas e, longe do teclado do computador, estou no do piano.',
    ],
    en: [
      'Hi, I’m Pedro! I’m from the Cariri region of Ceará, I live in Recife, and I’m a ==full-stack developer==, a ==Systems Development instructor== at Senac and an ==M.Sc. student in Computer Science== at UFPE’s Center of Informatics (CIn), in the Software Engineering area.',
      'My research revolves around ==Git workflows== and ==merge tools==: I compare approaches such as trunk-based and branch-based development and their impact on productivity and product quality, trying to understand which workflow fits best in each scenario.',
      'During my bachelor’s at UFCA I was a teaching assistant for Object-Oriented Programming and Programming Lab, and spent two years as an undergraduate researcher studying ==code integration conflicts==. I like understanding things deeply and learning new stuff — and when I’m away from the computer keyboard, I’m usually at the piano one.',
    ],
  },
  photoCaption: { pt: 'colação de grau · UFCA', en: 'graduation day · UFCA' },
  facts: [
    { k: { pt: 'base', en: 'based in' }, v: 'Recife, PE' },
    { k: { pt: 'origem', en: 'from' }, v: 'Barro, CE' },
    { k: { pt: 'idiomas', en: 'languages' }, v: 'PT · EN · ES' },
  ],
}

export const research = {
  kicker: { pt: 'pesquisa', en: 'research' },
  title: { pt: 'Pesquisa', en: 'Pesquisa' },
  lead: {
    pt: 'No mestrado, no CIn-UFPE, investigo como ferramentas de merge podem reduzir o custo de integrar mudanças e tenho interesse em entender como diferentes fluxos de trabalho com o Git afetam o dia a dia dos times.',
    en: "At CIn-UFPE, my master's research focuses on how merge tools can reduce the cost of integrating code changes. I am particularly interested in understanding how different Git workflows impact the daily operations of development teams."
,
  },
  advisors: [
    { role: 'advisor', name: 'Paulo Henrique Monteiro Borba' },
    { role: 'coadvisor', name: 'Paola Rodrigues de Godoy Accioly' },
  ],
  lines: [
    {
      icon: 'branch',
      title: { pt: 'Fluxos de trabalho com o Git', en: 'Git workflows' },
      text: {
        pt: 'Trunk-based ou branch-based? Como os times organizam branches, integrações e entregas, e o que cada escolha custa em produtividade e qualidade.',
        en: 'Trunk-based or branch-based? How teams organize branches, integrations and releases, and what each choice costs in productivity and quality.',
      },
      since: '2022 -> 2024',
    },
    {
      icon: 'merge',
      title: { pt: 'Ferramentas de merge', en: 'Merge tools' },
      text: {
        pt: 'Ferramentas que ajudam a integrar código e a lidar com conflitos com menos esforço manual e menos erros.',
        en: 'Tools that help integrate code and handle conflicts with less manual effort and fewer mistakes.',
      },
      since: '2024 -> current',
    },
  ],
}

export const publications = {
  kicker: { pt: 'O que já saiu do forno', en: 'Fresh out of the oven' },
  title: { pt: 'Publicações & Eventos', en: 'Publications & Events' },
  papers: [
    {
      title: 'Choosing the Right Git Workflow: A Comparative Analysis of Trunk-based vs. Branch-based Approaches',
      authors: ['Pedro Lopes', 'Paola Accioly', 'Paulo Borba', 'Vitor Menezes'],
      venue: 'XXXIX Simpósio Brasileiro de Engenharia de Software (SBES 2025)',
      year: 2025,
      type: { pt: 'Artigo completo em anais', en: 'Full paper in proceedings' },
      url: 'https://doi.org/10.5753/sbes.2025.9903',
      replication: 'https://zenodo.org/records/15932802',
      slides: 'https://drive.google.com/file/d/1e9Szz7Ena2b0cTUQJMHUqU6KN-qMdgCQ/view?usp=sharing',
    },
    {
      title: 'MergirafSemi: A Language-Agnostic Semistructured Merge Tool',
      authors: ['Pedro Lopes', 'Paulo Borba', 'Paola Accioly', 'Guilherme Cavalcanti'],
      venue: 'XL Simpósio Brasileiro de Engenharia de Software (SBES 2026)',
      year: 2026,
      type: { pt: 'Artigo completo em anais', en: 'Full paper in proceedings' },
      url: 'https://arxiv.org/abs/2608.11345v1',
      replication: 'https://zenodo.org/records/21422483',
      slides: 'https://docs.google.com/presentation/d/1-BTDnYRNjE9dkgiouCHOZcvXBCxYiLYdYhPUm3dlH2E/edit?usp=sharing',
    },
  ],
  eventsTitle: { pt: 'Eventos e seminários', en: 'Events and seminars' },
  events: [
    { year: 2026, title: 'Congresso Brasileiro de Software (CBSoft - XL SBES)', type: { pt: 'Apresentação de artigo', en: 'Paper presentation' }, featured: true },
    { year: 2026, title: 'I Workshop on Artificial Intelligence for Software Integration and Variability (WAISIV)', type: { pt: 'Apresentação em Workshop', en: 'Workshop Presentation' }, featured: true },
    { year: 2025, title: 'Congresso Brasileiro de Software (CBSoft - XXXIX SBES)', type: { pt: 'Apresentação de artigo', en: 'Paper presentation' }},
    { year: 2024, title: 'Transformando Palavras em Dados: Análises Textuais com o software IRAMUTEQ', type: { pt: 'Seminário', en: 'Seminar' } },
    { year: 2023, title: 'Acessibilidade e Games: Como desenvolver jogos inclusivos?', type: { pt: 'Seminário', en: 'Seminar' } },
    { year: 2023, title: 'Aperta o Play: Psicologia e Games, como se relacionam?', type: { pt: 'Seminário', en: 'Seminar' } },
    { year: 2023, title: 'Ciência de dados sociais: Na teoria e na prática', type: { pt: 'Seminário', en: 'Seminar' } },
    { year: 2023, title: 'Como Identificar erro de Software usando APM', type: { pt: 'Seminário', en: 'Seminar' } },
    { year: 2023, title: 'Ecomaps: Um projeto que envolve tecnologia e educação ambiental', type: { pt: 'Exposição', en: 'Exhibition' } },
    { year: 2023, title: 'Introdução ao Processamento de Linguagem Natural e o ChatGPT', type: { pt: 'Seminário', en: 'Seminar' } },
    { year: 2023, title: 'O fim da programação, de novo!', type: { pt: 'Seminário', en: 'Seminar' } },
    { year: 2023, title: 'Mercado de Trabalho', type: { pt: 'Evento', en: 'Event' } },
  ],
}

// Trajetória em abas (uma "branch" por categoria), do mais recente ao mais antigo.
// kind: 'edu' (formação) | 'research' (pesquisa) | 'work' (profissional)
// badge: etiqueta curta opcional ao lado do período. current: true = em andamento.
export const journey = {
  kicker: { pt: 'git log --graph', en: 'git log --graph' },
  title: { pt: 'Trajetória', en: 'Journey' },
  lead: {
    pt: 'Formação Profissional e Acadêmica.',
    en: 'Academic and Professional Background.',
  },
  defaultTab: 'edu',
  tabs: [
    { id: 'edu', label: { pt: 'formação', en: 'education' }, slug: { pt: 'formacao', en: 'education' } },
    { id: 'research', label: { pt: 'pesquisa', en: 'research' }, slug: { pt: 'pesquisa', en: 'research' } },
    { id: 'work', label: { pt: 'profissional', en: 'professional' }, slug: { pt: 'profissional', en: 'professional' } },
  ],
  items: [
    // ── formação
    {
      kind: 'edu',
      period: { pt: '2024 — atual', en: '2024 — present' },
      badge: 'CAPES',
      title: { pt: 'Mestrado em Ciência da Computação', en: 'M.Sc. in Computer Science' },
      org: 'Centro de Informática — UFPE',
      text: {
        pt: 'Bolsista CAPES, dedicação exclusiva. Linha de pesquisa em ferramentas de merge, dentro de Engenharia de Software.',
        en: 'CAPES scholarship holder, full-time. Research line on merge tools, within Software Engineering.',
      },
      meta: [
        { k: 'advisor', v: 'Paulo Borba' },
        { k: 'coadvisor', v: 'Paola Accioly' },
        { k: 'expected', v: '2026' },
      ],
      tags: [{ pt: 'Engenharia de Software', en: 'Software Engineering' }, 'Merge', 'Git'],
      current: true,
    },
    {
      kind: 'edu',
      period: { pt: '2019 — 2024', en: '2019 — 2024' },
      title: { pt: 'Bacharelado em Ciência da Computação', en: 'B.Sc. in Computer Science' },
      org: 'Centro de Ciência e Tecnologia — UFCA',
      text: {
        pt: 'Graduação com bolsas de Iniciação Científica (2019–2021) e de Iniciação à Docência (2021–2023), além de estágio pela PRPI-UFCA.',
        en: 'Bachelor’s degree with undergraduate research (2019–2021) and teaching initiation (2021–2023) scholarships, plus an internship through PRPI-UFCA.',
      },
      meta: [
        { k: 'thesis', v: { pt: '“Desenvolvimento com Git baseado em branches ou em trunk? O que os especialistas falam sobre isso”', en: '“Branch-based or trunk-based Git development? What experts say about it”' } },
        { k: 'advisor', v: 'Paola Accioly' },
      ],
      tags: ['Trunk-based', 'Branch-based'],
    },
    {
      kind: 'edu',
      period: { pt: '2016 — 2018', en: '2016 — 2018' },
      title: { pt: 'Ensino Médio', en: 'High school' },
      org: 'Escola Técnica de Saúde de Cajazeiras — ETSC/UFCG',
      text: null,
      tags: [],
    },

    // ── pesquisa
    {
      kind: 'research',
      period: { pt: '2024 — atual', en: '2024 — present' },
      badge: 'CAPES',
      title: { pt: 'Pesquisador em Ferramentas de Merge', en: 'Merge Tools Researcher' },
      org: 'Centro de Informática — UFPE',
      text: {
        pt: 'Pesquiso ferramentas de merge e fluxos de trabalho com Git, incluindo o MergirafSemi, uma ferramenta de merge semiestruturado independente de linguagem.',
        en: 'I research merge tools and Git workflows, including MergirafSemi, a language-agnostic semistructured merge tool.',
      },
      tags: ['Merge', { pt: 'Merge semiestruturado', en: 'Semistructured merge' }, 'Git'],
      current: true,
    },
    {
      kind: 'research',
      period: { pt: '2020 — 2021', en: '2020 — 2021' },
      badge: 'CNPq',
      title: { pt: 'Pesquisador bolsista de Iniciação Científica', en: 'Undergraduate research fellow' },
      org: 'Centro de Ciência e Tecnologia — UFCA',
      text: {
        pt: 'Pesquisei e escrevi artigos sobre conflitos de integração de código no GitHub, investigando estratégias para evitar e prevenir conflitos antes que aconteçam.',
        en: 'I researched and wrote papers on code integration conflicts on GitHub, studying strategies to avoid and prevent conflicts before they happen.',
      },
      meta: [{ k: 'question', v: { pt: '“É possível prever conflitos de integração de código?”', en: '“Is it possible to predict code integration conflicts?”' } }],
      tags: [{ pt: 'Conflitos de integração', en: 'Integration conflicts' }, 'GitHub'],
    },
    {
      kind: 'research',
      period: { pt: '2019 — 2020', en: '2019 — 2020' },
      badge: 'CNPq',
      title: { pt: 'Pesquisador bolsista de Iniciação Científica', en: 'Undergraduate research fellow' },
      org: 'Centro de Ciência e Tecnologia — UFCA',
      text: {
        pt: 'Primeiro contato com pesquisa em Engenharia de Software, investigando o histórico de repositórios Git.',
        en: 'First contact with Software Engineering research, investigating the history of Git repositories.',
      },
      meta: [{ k: 'question', v: { pt: '“É possível recuperar cenários de merge que não aparecem no grafo de commits do Git?”', en: '“Can we recover merge scenarios that don’t show up in Git’s commit graph?”' } }],
      tags: ['Git', { pt: 'Grafo de commits', en: 'Commit graph' }, 'Merge'],
    },

    // ── profissional
    {
      kind: 'work',
      period: { pt: '2026 — atual', en: '2026 — present' },
      title: { pt: 'Instrutor de Desenvolvimento de Sistemas', en: 'Systems Development Instructor' },
      org: 'Senac',
      text: {
        pt: 'Instrutor na área de Desenvolvimento de Sistemas, ensinando programação e desenvolvimento de software e preparando os alunos para o mercado de tecnologia.',
        en: 'Instructor in Systems Development, teaching programming and software development and preparing students for the tech job market.',
      },
      tags: [{ pt: 'Ensino', en: 'Teaching' }, { pt: 'Desenvolvimento de Sistemas', en: 'Systems Development' }],
      current: true,
    },
    {
      kind: 'work',
      period: { pt: '2023 — 2024', en: '2023 — 2024' },
      badge: { pt: 'estágio', en: 'internship' },
      title: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
      org: 'Núcleo de Gerenciamento de Dados — UFCA',
      text: {
        pt: 'Desenvolvi soluções em PHP com Laravel, melhorando a produtividade e a experiência dos usuários nos sistemas. Iniciei o desenvolvimento de um sistema para o cadastro das Ações de Extensão da Pró-Reitoria de Extensão, agilizando a coleta de dados fundamentais para a Universidade.',
        en: 'I built PHP solutions with Laravel, improving productivity and user experience across the university’s systems. I started the development of a system to register the Extension Actions of the Office of Extension, speeding up the collection of key data for the University.',
      },
      tags: ['PHP', 'Laravel'],
    },
    {
      kind: 'work',
      period: { pt: '2021 — 2023', en: '2021 — 2023' },
      badge: { pt: 'iniciação à docência', en: 'teaching fellowship' },
      title: { pt: 'Monitor bolsista — Programação Orientada a Objetos', en: 'Teaching assistant — Object-Oriented Programming' },
      org: 'Centro de Ciência e Tecnologia — UFCA',
      text: {
        pt: 'Ensinei e tirei dúvidas dos alunos sobre Programação Orientada a Objetos em Java, com aulas sobre classes e métodos, herança, polimorfismo, interfaces e tratamento de exceções.',
        en: 'I taught and helped students with Object-Oriented Programming in Java, giving classes on classes and methods, inheritance, polymorphism, interfaces and exception handling.',
      },
      tags: ['Java', { pt: 'POO', en: 'OOP' }],
    },
    {
      kind: 'work',
      period: { pt: '2021 — 2023', en: '2021 — 2023' },
      badge: { pt: 'iniciação à docência', en: 'teaching fellowship' },
      title: { pt: 'Monitor bolsista — Laboratório de Programação', en: 'Teaching assistant — Programming Lab' },
      org: 'Centro de Ciência e Tecnologia — UFCA',
      text: {
        pt: 'Tirei dúvidas sobre desenvolvimento de sistemas — front-end, back-end, banco de dados e boas práticas de versionamento. Planejei e conduzi projetos práticos com os alunos, preparando-os para o mercado de tecnologia.',
        en: 'I helped students with systems development — front-end, back-end, databases and version control best practices. I planned and ran hands-on projects with them, preparing them for the tech job market.',
      },
      meta: [
        { k: 'project', v: { pt: '“O quão impactante é o uso de ferramentas de programação online para o aprendizado dos alunos? O CodeCombat como ferramenta didática”', en: '“How impactful are online programming tools for students’ learning? CodeCombat as a teaching tool”' } },
      ],
      tags: ['Front-end', 'Back-end', 'Git'],
    },
  ],
  courses: [
    { name: 'Santander Tech+ e Skill+', org: 'Santander', year: 2025 },
    { name: { pt: 'Inglês — nível B1', en: 'English — B1 level' }, org: 'UFCA', year: 2022, hours: 32 },
    { name: { pt: 'Git e GitHub', en: 'Git and GitHub' }, org: 'UFCA', year: 2019, hours: 4 },
    { name: { pt: 'Introdução à Programação com Python', en: 'Intro to Programming with Python' }, org: 'UFCA', year: 2019, hours: 6 },
    { name: { pt: 'Introdução ao Linux', en: 'Intro to Linux' }, org: 'UFCA', year: 2019, hours: 4 },
  ],
}

export const projects = {
  kicker: { pt: 'projetos', en: 'projects' },
  title: { pt: 'Coisas que eu construí', en: 'Things I’ve built' },
  items: [
    {
      name: 'MergirafSemi',
      branch: 'feat/mergiraf-semi',
      text: {
        pt: 'Ferramenta de merge desenvolvida no meu mestrado: adaptei o Mergiraf, um merge driver estruturado e agnóstico de linguagem para o Git, para fazer merge semiestruturado. A estrutura do código orienta a integração das mudanças, sem depender de uma linguagem específica.',
        en: 'Merge tool built during my master’s: I adapted Mergiraf, a language-agnostic structured merge driver for Git, to perform semistructured merge. The code structure guides how changes are integrated, without being tied to a specific language.',
      },
      stack: ['Rust', 'tree-sitter', 'Git'],
      repo: 'https://github.com/predohenr/mergiraf-semi',
      paper: 'https://arxiv.org/abs/2608.11345v1',
      image: 'images/projects/mergiraf-semi.png',
      imageAlt: { pt: 'Tirinha: dois bonecos brigando, uma girafa os envolve e eles viram um só', en: 'Comic: two figures fighting, a giraffe wraps around them and they become one' },
      imageFit: 'illustration',
    },
    {
      name: 'LabKey',
      branch: 'feat/labkey',
      text: {
        pt: 'Aplicativo mobile para gerenciar o acesso e o empréstimo das chaves dos laboratórios do Centro de Ciência e Tecnologia da UFCA para os alunos.',
        en: 'Mobile app to manage students’ access to and borrowing of lab keys at UFCA’s Center of Science and Technology.',
      },
      stack: ['React Native', 'TypeScript'],
      repo: 'https://github.com/predohenr/labkey',
      image: 'images/projects/labkey.png',
      imageFit: 'contain',
    },
    {
      name: 'Hestia',
      branch: 'feat/hestia',
      text: {
        pt: 'Aplicação web para a Diretoria de Logística e Apoio Operacional da UFCA gerenciar o empréstimo e a devolução das chaves das salas — processo que antes era feito só no papel.',
        en: 'Web app for UFCA’s Logistics and Operational Support office to manage room key loans and returns — a process that used to be paper-only.',
      },
      stack: ['PHP', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
      repo: null,
      image: 'images/projects/hestia.jpg',
    },
    {
      name: 'MetaTrade',
      branch: 'feat/metatrade',
      text: {
        pt: 'Plataforma web que aproxima fornecedores de produtos e clientes, automatizando pedidos que antes eram feitos por telefone ou pessoalmente.',
        en: 'Web platform that connects product suppliers and customers, automating orders that used to be placed by phone or in person.',
      },
      stack: ['PHP', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
      repo: 'https://github.com/predohenr/metatrade',
      image: 'images/projects/metatrade.jpg',
    },
  ],
}

export const skills = {
  kicker: { pt: 'skills', en: 'skills' },
  title: { pt: 'Skills', en: 'Skills' },
  groups: [
    { title: { pt: 'Linguagens', en: 'Languages' }, items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'PHP'] },
    { title: { pt: 'Web & mobile', en: 'Web & mobile' }, items: ['React', 'React Native', 'Laravel', 'HTML5', 'CSS3', 'Bootstrap'] },
    { title: { pt: 'Ferramentas', en: 'Tools' }, items: ['Git', 'GitHub', 'Linux', 'Figma'] },
    {
      title: { pt: 'Pesquisa', en: 'Research' },
      items: [
        { pt: 'Engenharia de Software', en: 'Software Engineering' },
        { pt: 'Fluxos de trabalho com Git', en: 'Git workflows' },
        { pt: 'Ferramentas de merge', en: 'Merge tools' },
        { pt: 'Conflitos de integração', en: 'Integration conflicts' },
      ],
    },
  ],
  languages: {
    title: { pt: 'Idiomas', en: 'Languages spoken' },
    items: [
      { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'nativo', en: 'native' }, value: 5 },
      { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'avançado', en: 'advanced' }, value: 4 },
      { name: { pt: 'Espanhol', en: 'Spanish' }, level: { pt: 'intermediário', en: 'intermediate' }, value: 2 },
    ],
  },
}

export const offCode = {
  kicker: { pt: 'fora do código', en: 'off the clock' },
  title: { pt: 'Vida Pessoal', en: 'Personal Life' },
  music: {
    title: { pt: 'Piano & Coral', en: 'Piano & Choir' },
    text: {
      pt: 'Música é uma de minhas paixões. Estudei piano, arranjo e já cantei em dois corais!',
      en: 'Music is one of my passions. I studied piano, arrangement and sang in two choirs!',
    },
    courses: [
      { name: { pt: 'Piano', en: 'Piano' }, org: 'C. C. Schoenberg, UFRN', year: '2019'},
      { name: { pt: 'Composição e Arranjo', en: 'Composition & Arrangement' }, org: 'UFRN', year: '2020'},
      { name: { pt: 'Coral da UFCA', en: 'UFCA Choir'}, org: 'UFCA', year: '2022 - 2024'},
      { name: { pt: 'O Curió', en: 'O Curió'}, org: 'CPM', year: '2024 - current'},
    ],
  },
  playlist: {
    title: { pt: 'No repeat', en: 'On repeat' },
    note: {
      pt: 'Escuto de tudo, mas o coração é alternativo/indie. Os discos que mais escuto:',
      en: 'I listen to a bit of everything, but my heart is alt/indie. The records I keep coming back to:',
    },
    albums: [
      { title: 'Carrie & Lowell', artist: 'Sufjan Stevens' },
      { title: 'the record', artist: 'boygenius' },
      { title: 'Not to Disappear', artist: 'Daughter'},
      { title: 'Coisas Naturais', artist: 'Marina Sena' },
    ],
  },
  roots: {
    title: { pt: 'Cariri → Recife', en: 'Cariri → Recife' },
    text: {
      pt: 'Cresci no Cariri cearense, entre a Chapada do Araripe e o calor do sertão, e hoje vivo em Recife. As cores deste site vêm da minha terra com o mar.',
      en: 'I grew up in the Cariri region of Ceará, between the Araripe plateau and the heat of the sertão, and now I live in Recife. This site’s colors come from my home and the sea.',
    },
  },
}

export const contact = {
  kicker: { pt: 'contato', en: 'contact' },
  title: { pt: 'Vamos conversar?', en: 'Let’s talk?' },
  text: {
    pt: 'Tem uma proposta, uma dúvida sobre pesquisa ou só quer trocar uma ideia? Me escreve.',
    en: 'Got a proposal, a research question or just want to chat? Drop me a line.',
  },
  location: 'Recife, Pernambuco — Brasil',
}
