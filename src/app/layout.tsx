import type { Metadata, Viewport } from "next";
import "@fontsource-variable/sora";
import "@fontsource-variable/manrope";
import "./globals.css";
import { site } from "@/config/site";
import { TextureDefs } from "@/components/TextureDefs";
import { TrackingScripts } from "@/components/TrackingScripts";
import { JsonLd } from "@/components/JsonLd";

const base = site.siteUrl || "http://localhost:3000";
const region = site.serviceRegion ? ` Atendimento: ${site.serviceRegion}.` : "";
const description = site.seo.description + region;

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: site.seo.title,
  description,
  applicationName: site.brandName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.brandName,
    title: site.seo.title,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#292D30",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip">Ir para o conteúdo</a>
        <TextureDefs />
        {children}
        <JsonLd />
        <TrackingScripts />
      </body>
    </html>
  );
}
