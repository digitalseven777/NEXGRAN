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
    title: "Entrada residencial em fulget",
    location: "Local não informado",
    application: "Piso externo e escada",
    area: "Sob consulta",
    finish: "Fulget cimentício cinza aplicado no local",
    image: { src: "/images/obras/fulget-escada-entrada.jpg", alt: "Piso e escada de entrada residencial revestidos com fulget cinza" },
  },
  {
    title: "Caminho de jardim com degraus",
    location: "Local não informado",
    application: "Degraus externos em área ajardinada",
    area: "Sob consulta",
    finish: "Agregados minerais em tom cinza",
    image: { src: "/images/obras/escada-jardim-fulget.jpg", alt: "Degraus largos de fulget em caminho de jardim residencial" },
  },
  {
    title: "Circulação em espaço comercial",
    location: "Local não informado",
    application: "Faixa de circulação comercial",
    area: "Sob consulta",
    finish: "Fulget mineral em tom claro",
    image: { src: "/images/obras/piso-fulget-comercial.jpg", alt: "Piso de fulget claro aplicado em área de circulação comercial" },
  },
];
