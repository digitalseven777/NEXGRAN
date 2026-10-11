import { logo } from "@/config/images";
import { site } from "@/config/site";

/** Símbolo N provisório: duas colunas estruturais + diagonal. Substituído pelo logo oficial via config/images.ts. */
export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false" className="logo-mark">
      <rect x="3" y="4" width="9" height="32" fill="currentColor" />
      <rect x="28" y="4" width="9" height="32" fill="currentColor" />
      <polygon points="12,4 21,4 28,36 19,36" fill="var(--orange)" />
    </svg>
  );
}

type Props = { tone?: "light" | "dark" };

/** tone="light": logo sobre fundo escuro (texto claro). tone="dark": sobre fundo claro. */
export function Logo({ tone = "light" }: Props) {
  const src = tone === "dark" ? logo.srcOnLight ?? logo.src : logo.src;
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={logo.alt} width={logo.width} height={logo.height} className="logo-img" />;
  }
  return (
    <span className={`logo logo--${tone}`}>
      <LogoMark />
      <span className="logo-word">{site.brandName}</span>
    </span>
  );
}
