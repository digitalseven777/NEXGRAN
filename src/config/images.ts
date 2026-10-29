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
  hero: { src: "/images/obras/fulget-entrada-residencial.jpg", alt: "Entrada residencial com piso de fulget aplicado no local pela NEXGRAN", texture: "pedra" as const },
  positioning: { src: "/images/obras/fulget-piso-residencial-detalhe.jpg", alt: "Detalhe dos agregados minerais em piso de fulget residencial", texture: "quente" as const },
  applications: {
    externas: { src: "/images/obras/fulget-entrada-residencial.jpg", alt: "Piso de fulget em entrada residencial", texture: "pedra" as const },
    calcadas: { src: "/images/obras/calcada-fulget.jpg", alt: "Calçada revestida com fulget cinza aplicado diretamente no local", texture: "claro" as const },
    entradas: { src: "/images/obras/escada-jardim-fulget.jpg", alt: "Degraus de fulget em entrada residencial ajardinada", texture: "quente" as const },
    garagens: { src: "/images/obras/residencia-condominio-oruam.jpg", alt: "Entrada residencial ampla com piso de fulget, adequada para acesso de garagem", texture: "grafite" as const },
    quintais: slot("Quintal com superfície de fulget", "claro"),
    lazer: { src: "/images/obras/fulget-varanda-agregado.jpg", alt: "Piso mineral aplicado em área de lazer", texture: "pedra" as const },
    piscina: slot("Entorno de piscina com fulget", "quente"),
    comerciais: { src: "/images/obras/piso-fulget-comercial.jpg", alt: "Piso de fulget em corredor de espaço comercial", texture: "grafite" as const },
  },
  finalCta: { src: "/images/obras/escada-jardim-fulget.jpg", alt: "Acabamento de fulget em degraus externos", texture: "grafite" as const },
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
