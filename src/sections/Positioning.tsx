import { positioning } from "@/config/content";
import { images } from "@/config/images";
import { MediaFrame } from "@/components/MediaFrame";
import { SectionHead } from "@/components/SectionHead";

export function Positioning() {
  return (
    <section id="posicionamento" className="section section--light" aria-labelledby="pos-title">
      <div className="wrap">
        <div className="pos-grid">
          <SectionHead id="pos-title" title={positioning.title} className="pos-head" />
          <div className="pos-text">
            <p className="lede">{positioning.text}</p>
            <p className="note">{positioning.note}</p>
          </div>
        </div>

        <div className="composition" aria-hidden={images.positioning.src ? undefined : true}>
          <div className="comp-a"><MediaFrame slot={images.positioning} sizes="(min-width:1024px) 66vw, 100vw" seed={5} quiet /></div>
          <div className="comp-b"><MediaFrame slot={{ ...images.positioning, texture: "grafite", alt: "Textura mineral em tom grafite" }} sizes="(min-width:1024px) 40vw, 60vw" seed={9} quiet /></div>
          <span className="comp-c" />
        </div>
      </div>
    </section>
  );
}
