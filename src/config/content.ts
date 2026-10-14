/** Textos do site. Edite aqui para ajustar copy sem mexer nos componentes. */

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const footerLinks = [...nav, { label: "Orçamento", href: "#orcamento" }] as const;

/** Mensagens pré-preenchidas do WhatsApp, por ponto de contato. */
export const whatsappMessages = {
  header: "Olá! Conheci a NEXGRAN pelo site e gostaria de solicitar um orçamento de fulget.",
  hero: "Olá! Conheci a NEXGRAN pelo site e gostaria de solicitar um orçamento de fulget.",
  solutions: "Olá! Vi as soluções da NEXGRAN no site e gostaria de conversar sobre a aplicação de fulget na minha obra.",
  applications: "Olá! Vi as aplicações no site da NEXGRAN e gostaria de um orçamento para a minha área.",
  portfolio: "Olá! Gostaria de ver trabalhos da NEXGRAN e conversar sobre um orçamento de fulget.",
  quote: "Olá! Estou na página de orçamento da NEXGRAN e prefiro conversar diretamente pelo WhatsApp sobre a minha obra.",
  finalCta: "Olá! Gostaria de enviar os detalhes da minha obra para a NEXGRAN avaliar a aplicação de fulget.",
  floating: "Olá! Conheci a NEXGRAN pelo site e gostaria de solicitar um orçamento de fulget.",
  footer: "Olá! Gostaria de falar com a NEXGRAN sobre fulget e revestimentos minerais.",
} as const;
export type WhatsappContext = keyof typeof whatsappMessages;

export const hero = {
  title: "Fulget mineral aplicado diretamente no local.",
  subtitle:
    "Fulget cimentício e revestimentos minerais aplicados diretamente na obra, com acabamento, resistência e estética arquitetônica.",
  primaryCta: "Solicitar orçamento",
  secondaryCta: "Ver aplicações",
  facts: ["Aplicação direta na obra", "Paginação com filetes e juntas", "Agregados minerais aparentes"],
};

export const positioning = {
  title: "Acabamento mineral. Execução precisa.",
  text: "A NEXGRAN atua na aplicação de fulget cimentício e revestimentos minerais diretamente na obra, criando superfícies contínuas, resistentes e integradas ao projeto arquitetônico.",
  note: "Não vendemos placas nem pisos prontos. O fulget é aplicado no local, sobre a superfície preparada, e a paginação é definida junto com o projeto.",
};

export const solutions = {
  title: "O que fazemos",
  items: [
    {
      title: "Fulget cimentício",
      text: "Aplicação direta de fulget tradicional com agregados minerais, criando acabamento texturizado, resistente e integrado à superfície.",
    },
    {
      title: "Revestimentos minerais",
      text: "Soluções de acabamento mineral para diferentes necessidades arquitetônicas e construtivas.",
    },
    {
      title: "Paginação e juntas",
      text: "Execução considerando filetes, juntas e divisão das áreas para criar composição visual e acabamento organizado.",
    },
  ],
  cta: "Solicitar orçamento",
};

export const applications = {
  title: "Onde o fulget ganha espaço",
  intro: "Superfícies externas e de circulação onde textura mineral e resistência fazem diferença no projeto.",
  items: [
    { key: "externas", label: "Áreas externas" },
    { key: "calcadas", label: "Calçadas" },
    { key: "entradas", label: "Entradas" },
    { key: "garagens", label: "Garagens" },
    { key: "quintais", label: "Quintais" },
    { key: "lazer", label: "Áreas de lazer" },
    { key: "piscina", label: "Entornos de piscina" },
    { key: "comerciais", label: "Espaços comerciais" },
  ],
  cta: "Quero um orçamento",
} as const;

export const differentials = {
  title: "Por que a NEXGRAN",
  items: [
    {
      title: "Aplicação direta na obra",
      text: "O acabamento é executado diretamente sobre a superfície preparada, permitindo integração ao projeto.",
    },
    {
      title: "Estética mineral",
      text: "Agregados minerais criam textura e identidade visual únicas para cada aplicação.",
    },
    {
      title: "Execução técnica",
      text: "Processo realizado por profissional com experiência prática específica em aplicação de fulget.",
    },
    {
      title: "Atendimento personalizado",
      text: "Cada projeto é analisado de acordo com área, superfície, aplicação e resultado desejado.",
    },
  ],
};

export const process = {
  title: "Do projeto à superfície",
  steps: [
    { title: "Análise da área", text: "Entendimento do espaço, superfície existente, finalidade e características do projeto." },
    { title: "Definição da solução", text: "Avaliação do acabamento, paginação, juntas e composição adequada." },
    { title: "Preparação", text: "Preparação da base para receber o sistema de acabamento." },
    { title: "Aplicação", text: "Aplicação do fulget diretamente na obra." },
    { title: "Acabamento", text: "Tratamento final da superfície para entregar o resultado especificado." },
  ],
  note: "Prazos e etapas são definidos após a avaliação da obra.",
};

export const portfolio = {
  title: "Projetos",
  emptyTitle: "Portfólio em construção",
  emptyText:
    "A NEXGRAN está reunindo os registros dos seus próprios trabalhos. Em breve, cada projeto será apresentado aqui com fotos reais, local, aplicação, área e acabamento.",
  emptyCta: "Falar sobre o meu projeto",
  fields: ["Projeto", "Local", "Aplicação", "Área", "Acabamento"],
};

export const quote = {
  title: "Seu projeto começa aqui.",
  text: "Envie algumas informações sobre sua obra e nossa equipe entrará em contato para entender o projeto e orientar os próximos passos.",
  environments: ["Calçada", "Entrada", "Garagem", "Quintal", "Área de piscina", "Área de lazer", "Comercial", "Outro"],
  submit: "Solicitar orçamento",
  whatsappCta: "Falar diretamente pelo WhatsApp",
  photoHintWhatsapp: "Depois do primeiro contato, você pode enviar fotos da área pelo próprio WhatsApp.",
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "O que é fulget?",
      a: "Fulget é um acabamento à base de cimento com agregados minerais aparentes, que forma uma superfície texturizada. É muito usado em áreas externas e de circulação. O resultado final depende dos agregados, da paginação e da preparação da superfície de cada obra.",
    },
    {
      q: "O fulget é aplicado diretamente na obra?",
      a: "Sim. A NEXGRAN não trabalha com placas pré-moldadas: o fulget cimentício é aplicado no local, sobre a superfície preparada, com filetes e juntas que organizam a paginação da área.",
    },
    {
      q: "Em quais ambientes o fulget pode ser utilizado?",
      a: "Calçadas, entradas, garagens, quintais, áreas de lazer, entornos de piscina, áreas externas em geral e alguns espaços comerciais. A viabilidade em cada caso é confirmada na avaliação da obra.",
    },
    {
      q: "É possível escolher a aparência dos agregados?",
      a: "A aparência é parte da conversa sobre o projeto: cor e textura dos agregados e a paginação são alinhadas com você (e com o arquiteto, quando houver). As opções disponíveis são apresentadas no atendimento.",
    },
    {
      q: "Como funciona o orçamento?",
      a: "Você envia as informações da obra pelo formulário ou pelo WhatsApp: cidade, tipo de ambiente, área aproximada e observações. A equipe entra em contato para entender o projeto e orientar os próximos passos. Valores dependem da avaliação da área.",
    },
    {
      q: "É necessário enviar fotos da área?",
      a: "Não é obrigatório, mas ajuda bastante. Fotos mostram o estado da superfície e o contexto da obra, e permitem uma orientação inicial mais precisa. Você pode enviá-las pelo WhatsApp.",
    },
    {
      q: "Vocês atendem arquitetos e profissionais de obra?",
      a: "Sim. A NEXGRAN atende proprietários, arquitetos, designers de interiores, engenheiros, construtoras e empreiteiros, com atenção à especificação e à integração do acabamento ao projeto.",
    },
    {
      q: "Como funciona a preparação da superfície?",
      a: "A base precisa estar preparada para receber o sistema de acabamento. O que é necessário em cada caso depende do estado e do tipo da superfície existente, e é definido na avaliação da obra.",
    },
  ],
};

export const finalCta = {
  title: "Pronto para transformar a superfície do seu projeto?",
  text: "Envie os detalhes da sua obra. A NEXGRAN avalia a aplicação e orienta você sobre os próximos passos.",
  primary: "Solicitar orçamento",
  secondary: "WhatsApp",
};
