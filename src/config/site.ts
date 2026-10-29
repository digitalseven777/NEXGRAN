/**
 * CONFIGURAÇÃO CENTRAL DA NEXGRAN
 * Todos os dados editáveis da empresa ficam aqui.
 */

/** Número do WhatsApp em formato internacional, apenas dígitos. Ex.: "5511912345678". */
export const WHATSAPP_NUMBER = "5511966939916";

/** Região de atendimento real (ex.: "Grande São Paulo"). Vazio = não é exibida nem entra no SEO. */
export const SERVICE_REGION = "São Paulo e região";

export const site = {
  brandName: "NEXGRAN",
  brandTitle: "NEXGRAN | Fulget & Revestimentos",
  brandDescriptor: "FULGET E REVESTIMENTOS MINERAIS",
  instagram: "nexgran.fulget",
  whatsapp: WHATSAPP_NUMBER,
  serviceRegion: SERVICE_REGION,
  email: "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexgran.vercel.app",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "BNTIs6jFzXoojC1aET2VAHivIkMU7SzfS2Gt4RWZ-II",
  /** Dados legais: só aparecem no rodapé quando preenchidos. */
  legal: { cnpj: "", address: "", city: "" },
  /** Se preenchido, o formulário envia os dados (e fotos) para este endpoint antes de abrir o WhatsApp. */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  seo: {
    title: "Aplicação de Fulget no Local da Obra | NEXGRAN",
    description:
      "Aplicação de fulget cimentício feita diretamente no local da obra. Revestimentos minerais para calçadas, entradas, garagens, escadas, varandas e áreas comerciais. Solicite um orçamento à NEXGRAN.",
  },
} as const;

export const instagramUrl = `https://instagram.com/${site.instagram}`;
