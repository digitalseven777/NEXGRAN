/**
 * Camada de eventos de conversão.
 * Eventos: view_page, click_whatsapp, click_orcamento, form_start, form_submit.
 *
 * Envia para o que estiver carregado (GTM/GA4 via dataLayer/gtag, Meta Pixel via fbq).
 * Sem IDs configurados, nada acontece. Para a Meta Conversions API (servidor),
 * use o `event_id` gerado aqui para deduplicar com o Pixel.
 */
export type TrackEvent = "view_page" | "click_whatsapp" | "click_orcamento" | "form_start" | "form_submit";

const GOOGLE_ADS_QUOTE_CONVERSION = {
  send_to: "AW-18547031663/AvrXCKadqa8dEO_89ItF",
  value: 1.0,
  currency: "BRL",
} as const;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const META_MAP: Partial<Record<TrackEvent, string>> = {
  click_whatsapp: "Contact",
  form_submit: "Lead",
};

export function track(event: TrackEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const event_id = `${event}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const payload = { ...params, event_id };

  if (window.gtag) window.gtag("event", event, payload);
  else window.dataLayer?.push({ event, ...payload });

  const metaEvent = META_MAP[event];
  if (metaEvent && window.fbq) window.fbq("track", metaEvent, params, { eventID: event_id });

  if (process.env.NODE_ENV !== "production") console.debug("[track]", event, payload);
}

export function trackQuoteConversion(): void {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", "conversion", GOOGLE_ADS_QUOTE_CONVERSION);
  } else {
    window.dataLayer?.push(["event", "conversion", GOOGLE_ADS_QUOTE_CONVERSION]);
  }
}
