/**
 * CONFIGURAÇÃO CENTRAL DA NEXGRAN
 * Todos os dados editáveis da empresa ficam aqui.
 */

/** Número do WhatsApp em formato internacional, apenas dígitos. Ex.: "5511912345678". */
export const WHATSAPP_NUMBER = "";

/** Região de atendimento real (ex.: "Grande São Paulo"). Vazio = não é exibida nem entra no SEO. */
export const SERVICE_REGION = "";

export const site = {
  brandName: "NEXGRAN",
  brandTitle: "NEXGRAN | Fulget & Revestimentos",
  brandDescriptor: "FULGET E REVESTIMENTOS MINERAIS",
  instagram: "nexgran.fulget",
  whatsapp: WHATSAPP_NUMBER,
  serviceRegion: SERVICE_REGION,
  email: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  /** Dados legais: só aparecem no rodapé quando preenchidos. */
  legal: { cnpj: "", address: "", city: "" },
  /** Se preenchido, o formulário envia os dados (e fotos) para este endpoint antes de abrir o WhatsApp. */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  seo: {
    title: "NEXGRAN | Fulget e Revestimentos Minerais",
    description:
      "Fulget cimentício e revestimentos minerais aplicados diretamente na obra. Soluções para áreas externas, calçadas, entradas, garagens, áreas de lazer e projetos arquitetônicos.",
  },
} as const;

export const instagramUrl = `https://instagram.com/${site.instagram}`;
