"use client";
import { useEffect, useState } from "react";
import { nav } from "@/config/content";
import { Logo } from "./Logo";
import { QuoteLink, WhatsAppLink } from "./TrackedLinks";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`header ${scrolled || open ? "is-solid" : ""}`}>
      <div className="wrap header-bar">
        <a href="#inicio" className="header-logo" aria-label="NEXGRAN — início" onClick={() => setOpen(false)}>
          <Logo tone="light" />
        </a>

        <nav className="header-nav" aria-label="Principal">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <QuoteLink location="header" className="header-cta-desktop">
            Solicitar orçamento
          </QuoteLink>
          <WhatsAppLink context="header" location="header-mobile" variant="primary" className="header-cta-mobile">
            Orçamento
          </WhatsAppLink>
          <button
            type="button"
            className={`burger ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="menu-mobile" className={`menu-mobile ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Menu mobile">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <QuoteLink location="menu-mobile" className="menu-cta">
          Solicitar orçamento
        </QuoteLink>
      </div>
    </header>
  );
}
