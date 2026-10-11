"use client";
import { useEffect, useState } from "react";
import { WhatsAppLink } from "./TrackedLinks";

/** Botão flutuante, apenas no mobile (via CSS), exibido após rolar um pouco. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const on = () => setVisible(window.scrollY > 480);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className={`fab ${visible ? "is-visible" : ""}`}>
      <WhatsAppLink context="floating" location="floating" variant="wa-solid" className="fab-btn">
        WhatsApp
      </WhatsAppLink>
    </div>
  );
}
