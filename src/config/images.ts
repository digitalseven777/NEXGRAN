/**
 * IMAGENS DO SITE
 * Enquanto `src` for null, o site mostra uma textura mineral ilustrativa gerada em SVG
 * (sem fotos de terceiros). Para usar uma foto real da NEXGRAN:
 *   1. coloque o arquivo em /public/images (ex.: /public/images/hero.jpg)
 *   2. troque `src: null` por `src: "/images/hero.jpg"` e ajuste o `alt`.
 * Use fotos grandes (≥ 1600px de largura); o Next gera WebP/AVIF automaticamente.
 */
export type TextureVariant = "claro" | "pedra" | "grafite" | "quente";

export type ImageSlot = {
  src: string | null;
  alt: string;
  texture: TextureVariant;
};

const slot = (alt: string, texture: TextureVariant): ImageSlot => ({ src: null, alt, texture });

export const images = {
  hero: slot("Superfície de fulget cimentício com agregados minerais e filetes de paginação", "pedra"),
  positioning: slot("Detalhe de textura de agregados minerais em superfície de fulget", "quente"),
  applications: {
    externas: slot("Área externa com acabamento mineral", "pedra"),
    calcadas: slot("Calçada com acabamento de fulget", "claro"),
    entradas: slot("Entrada residencial com acabamento mineral", "quente"),
    garagens: slot("Piso de garagem com fulget", "grafite"),
    quintais: slot("Quintal com superfície de fulget", "claro"),
    lazer: slot("Área de lazer com acabamento mineral", "pedra"),
    piscina: slot("Entorno de piscina com fulget", "quente"),
    comerciais: slot("Espaço comercial com acabamento mineral", "grafite"),
  },
  finalCta: slot("Textura de agregados minerais em tom grafite", "grafite"),
} as const;

/**
 * LOGO
 * Enquanto `src` for null, é usado o símbolo N provisório (src/components/Logo.tsx).
 * Para usar o logo oficial: coloque em /public/images/logo.svg e troque para src: "/images/logo.svg".
 * Sugestão: dois arquivos (versão clara e escura) — ajuste `srcLight`/`srcDark` se necessário.
 */
export const logo = {
  src: null as string | null,
  srcOnLight: null as string | null,
  width: 168,
  height: 36,
  alt: "NEXGRAN — Fulget e Revestimentos Minerais",
};
