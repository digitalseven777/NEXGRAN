import { WHATSAPP_NUMBER } from "@/config/site";
import { whatsappMessages, type WhatsappContext } from "@/config/content";

/** Monta o link wa.me. Sem número configurado, abre o WhatsApp sem destinatário fixo. */
export function whatsappUrl(message: string): string {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!digits && process.env.NODE_ENV !== "production") {
    console.warn("[NEXGRAN] WHATSAPP_NUMBER está vazio em src/config/site.ts");
  }
  const base = digits ? `https://wa.me/${digits}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const whatsappFor = (context: WhatsappContext) => whatsappUrl(whatsappMessages[context]);

export type QuoteData = {
  nome: string;
  cidade: string;
  ambiente: string;
  area: string;
  mensagem: string;
};

export function quoteMessage(d: QuoteData): string {
  return [
    "Olá! Vim pelo site da NEXGRAN e gostaria de solicitar um orçamento de fulget.",
    "",
    `*Nome:* ${d.nome}`,
    `*Cidade:* ${d.cidade}`,
    `*Tipo de ambiente:* ${d.ambiente}`,
    `*Área aproximada:* ${d.area || "não informada"}`,
    `*Observações:* ${d.mensagem || "—"}`,
  ].join("\n");
}
