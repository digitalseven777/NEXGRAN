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

export const projects: Project[] = [];
