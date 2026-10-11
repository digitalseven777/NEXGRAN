import Image from "next/image";
import type { ImageSlot } from "@/config/images";

type Props = {
  slot: ImageSlot;
  /** Variação do deslocamento da textura (só afeta o placeholder). */
  seed?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Esconde o selo "textura ilustrativa" (ex.: fundos decorativos). */
  quiet?: boolean;
};

/**
 * Preenche o contêiner pai (position: relative). Mostra a foto real quando `slot.src`
 * está definido em config/images.ts; caso contrário, uma textura mineral ilustrativa.
 */
export function MediaFrame({ slot, seed = 0, sizes = "100vw", priority = false, className = "", quiet = false }: Props) {
  if (slot.src) {
    return <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className={`media-img ${className}`} />;
  }
  const ox = (seed * 73) % 360;
  const oy = (seed * 131) % 360;
  return (
    <div className={`media-tex ${className}`} role={quiet ? undefined : "img"} aria-label={quiet ? undefined : slot.alt} aria-hidden={quiet ? true : undefined}>
      <svg width="100%" height="100%" aria-hidden="true" focusable="false">
        <g transform={`translate(${-ox} ${-oy})`}>
          <rect width="2800" height="2800" fill={`url(#tex-${slot.texture})`} />
        </g>
      </svg>
      {!quiet && <span className="media-tag">Textura ilustrativa</span>}
    </div>
  );
}
