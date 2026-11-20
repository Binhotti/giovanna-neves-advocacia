import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { site, aboutParagraphs } from "@/lib/site";

export default function About() {
  return (
    <section className="section theme-light" id="sobre">
      <div className="container about-grid">
        <Reveal from="left" className="about-media">
          <div className="about-frame">
            <ParallaxImage
              src="/images/giovanna-2.jpg"
              alt="Dra. Giovanna Neves, advogada, sentada em cadeira transparente"
              position="50% 25%"
              strength={0.05}
              sizes="(max-width: 900px) 90vw, 40vw"
            />
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal className="eyebrow">
            <span className="eyebrow-line" />
            Sobre mim
          </Reveal>
          <SplitText as="h2" className="section-title" by="word" text="Dra. {Giovanna Neves}" />
          {site.oab ? (
            <Reveal delay={0.15}>
              <p className="oab">{site.oab}</p>
            </Reveal>
          ) : null}
          <div className="about-text">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={0.15 + Math.min(i, 3) * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
