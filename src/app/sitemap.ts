import type { MetadataRoute } from "next";
import { site } from "@/config/site";

/** Só gera entradas quando NEXT_PUBLIC_SITE_URL estiver definido. Adicione novas páginas aqui. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.siteUrl) return [];
  return [{ url: site.siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
