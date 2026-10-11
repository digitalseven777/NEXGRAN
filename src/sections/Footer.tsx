import { footerLinks } from "@/config/content";
import { instagramUrl, site } from "@/config/site";
import { Logo } from "@/components/Logo";
import { InstagramIcon } from "@/components/Icons";
import { WhatsAppLink } from "@/components/TrackedLinks";

export function Footer() {
  const { legal } = site;
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo tone="light" />
          <p className="footer-desc">{site.brandDescriptor}</p>
          {site.serviceRegion && <p className="footer-meta">Atendimento: {site.serviceRegion}</p>}
        </div>

        <nav aria-label="Rodapé" className="footer-nav">
          <ul>
            {footerLinks.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
            <InstagramIcon /> @{site.instagram}
          </a>
          <WhatsAppLink context="footer" location="footer" variant="ghost-light">WhatsApp</WhatsAppLink>
          {site.email && <a href={`mailto:${site.email}`} className="footer-link">{site.email}</a>}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} NEXGRAN — Fulget &amp; Revestimentos</p>
        {(legal.cnpj || legal.address || legal.city) && (
          <p>{[legal.cnpj && `CNPJ ${legal.cnpj}`, legal.address, legal.city].filter(Boolean).join(" · ")}</p>
        )}
      </div>
    </footer>
  );
}
