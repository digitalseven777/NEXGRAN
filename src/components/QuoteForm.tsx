"use client";

import { useRef, useState, type FormEvent } from "react";
import { quote } from "@/config/content";
import { site } from "@/config/site";
import { track } from "@/lib/tracking";
import { quoteMessage, whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

type Status = "idle" | "sending" | "done" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [waLink, setWaLink] = useState("");
  const started = useRef(false);
  const hasEndpoint = Boolean(site.formEndpoint);

  const onStart = () => {
    if (started.current) return;
    started.current = true;
    track("form_start", { location: "orcamento" });
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("empresa")) return; // honeypot

    const text = (k: string) => String(fd.get(k) ?? "").trim();
    const data = {
      nome: text("nome"),
      cidade: text("cidade"),
      ambiente: text("ambiente"),
      area: text("area"),
      mensagem: text("mensagem"),
    };
    const link = whatsappUrl(quoteMessage(data));
    setWaLink(link);
    track("form_submit", { environment: data.ambiente, has_endpoint: hasEndpoint });

    if (!hasEndpoint) {
      window.open(link, "_blank", "noopener,noreferrer");
      setStatus("done");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, { method: "POST", body: fd });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done" || status === "error") {
    const failed = status === "error";
    return (
      <div className="form-result" role="status">
        <h3>{failed ? "Não foi possível enviar agora" : hasEndpoint ? "Informações recebidas" : "Abrimos o WhatsApp para você"}</h3>
        <p>
          {failed
            ? "Seus dados não foram enviados. Você pode mandar as mesmas informações direto pelo WhatsApp."
            : hasEndpoint
              ? "A equipe da NEXGRAN vai entrar em contato para entender o projeto. Se quiser adiantar, continue pelo WhatsApp."
              : "A mensagem já está preenchida com os dados da sua obra. Se o WhatsApp não abriu, use o botão abaixo."}
        </p>
        <a className="btn btn--primary" href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => track("click_whatsapp", { location: "form-result" })}>
          <WhatsAppIcon />
          Continuar pelo WhatsApp
        </a>
        <button type="button" className="link-btn" onClick={() => setStatus("idle")}>
          Editar informações
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} onFocus={onStart} noValidate={false} aria-label="Solicitação de orçamento">
      <div className="field">
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="whatsapp">WhatsApp</label>
        <input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="(DDD) número" required />
      </div>
      <div className="field">
        <label htmlFor="cidade">Cidade</label>
        <input id="cidade" name="cidade" type="text" autoComplete="address-level2" required />
      </div>
      <div className="field">
        <label htmlFor="ambiente">Tipo de ambiente</label>
        <select id="ambiente" name="ambiente" required defaultValue="">
          <option value="" disabled>
            Selecione
          </option>
          {quote.environments.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="area">Área aproximada</label>
        <input id="area" name="area" type="text" inputMode="decimal" placeholder="Ex.: 40 m²" />
      </div>
      <div className="field field--full">
        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" rows={4} placeholder="Conte o que você pretende fazer, o estado atual da superfície, prazos desejados…" />
      </div>

      {hasEndpoint ? (
        <div className="field field--full">
          <label htmlFor="fotos">Fotos da área (opcional)</label>
          <input id="fotos" name="fotos" type="file" accept="image/*" multiple />
        </div>
      ) : (
        <p className="field--full form-hint">{quote.photoHintWhatsapp}</p>
      )}

      <div className="hp" aria-hidden="true">
        <label htmlFor="empresa">Empresa</label>
        <input id="empresa" name="empresa" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field--full form-actions">
        <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : quote.submit}
        </button>
      </div>
    </form>
  );
}
