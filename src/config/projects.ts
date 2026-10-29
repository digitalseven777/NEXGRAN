/**
 * PORTFÓLIO
 * Adicione aqui projetos REAIS da NEXGRAN. Enquanto a lista estiver vazia,
 * o site mostra um estado "portfólio em construção" (nada é inventado).
 */
export type Project = {
  title: string;
  location: string;
  application: string;
  area: string;
  finish: string;
  image: { src: string; alt: string };
  /** Opcional: foto "antes" para comparação. */
  before?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    title: "Piso residencial em fulget",
    location: "Condomínio em Cotia",
    application: "Piso residencial",
    area: "Sob consulta",
    finish: "Fulget cimentício cinza aplicado no local",
    image: { src: "/images/obras/fulget-piso-residencial.jpg", alt: "Piso residencial em fulget cinza aplicado no local em condomínio de Cotia" },
  },
  {
    title: "Entrada residencial no Condomínio Oruam",
    location: "Condomínio Oruam",
    application: "Piso externo, acesso e área de garagem",
    area: "Sob consulta",
    finish: "Agregados minerais em tom cinza",
    image: { src: "/images/obras/residencia-condominio-oruam.jpg", alt: "Residência no Condomínio Oruam com piso de fulget aplicado na entrada e acesso da garagem" },
  },
  {
    title: "Circulação em espaço comercial",
    location: "Shopping Santana",
    application: "Faixa de circulação comercial",
    area: "Sob consulta",
    finish: "Fulget mineral em tom claro",
    image: { src: "/images/obras/piso-fulget-comercial.jpg", alt: "Piso de fulget claro aplicado em área de circulação comercial" },
  },
];
