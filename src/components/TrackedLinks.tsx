"use client";

import type { ReactNode } from "react";
import { track } from "@/lib/tracking";
import { whatsappFor } from "@/lib/whatsapp";
import type { WhatsappContext } from "@/config/content";
import { WhatsAppIcon } from "./Icons";

type Variant = "primary" | "ghost-light" | "ghost-dark" | "wa-solid";

type BaseProps = {
  /** Onde o CTA está na página (vai para o evento de tracking). */
  location: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

const cls = (variant: Variant | undefined, extra?: string) =>
  ["btn", variant ? `btn--${variant}` : "", extra ?? ""].filter(Boolean).join(" ");

/** Link para o WhatsApp com mensagem pré-preenchida conforme o contexto. */
export function WhatsAppLink({ context, location, variant = "ghost-light", className, children, icon = true }: BaseProps & { context: WhatsappContext; icon?: boolean }) {
  return (
    <a
      href={whatsappFor(context)}
      target="_blank"
      rel="noopener noreferrer"
      className={cls(variant, className)}
      onClick={() => track("click_whatsapp", { location })}
    >
      {icon && <WhatsAppIcon />}
      {children}
    </a>
  );
}

/** Âncora para a seção de orçamento. */
export function QuoteLink({ location, variant = "primary", className, children }: BaseProps) {
  return (
    <a href="#orcamento" className={cls(variant, className)} onClick={() => track("click_orcamento", { location })}>
      {children}
    </a>
  );
}
