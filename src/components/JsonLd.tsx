import { faq } from "@/config/content";
import { instagramUrl, site } from "@/config/site";

/** Dados estruturados (schema.org). Só inclui campos que existem na configuração. */
export function JsonLd() {
  const business: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.brandName,
    alternateName: site.brandTitle,
    description: site.seo.description,
    slogan: site.brandDescriptor,
    sameAs: [instagramUrl],
  };
  if (site.siteUrl) business.url = site.siteUrl;
  if (site.email) business.email = site.email;
  if (site.serviceRegion) business.areaServed = site.serviceRegion;
  if (site.legal.address) business.address = site.legal.address;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
