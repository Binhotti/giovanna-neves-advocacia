import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { whatsappLink, defaultMessage } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="section cta theme-dark" id="contato">
      <div className="container cta-grid">
        <div className="cta-copy">
          <Reveal className="eyebrow">
            <span className="eyebrow-line" />
            Contato
          </Reveal>
          <SplitText
            as="h2"
            className="cta-title"
            text="Vamos conversar|sobre o {seu caso?}"
          />
          <Reveal delay={0.5}>
            <p className="lead">
              Conte o que aconteceu. Você recebe uma primeira orientação com atenção,
              discrição e sem juridiquês.
            </p>
          </Reveal>
          <Reveal delay={0.65}>
            <a
              className="btn btn-gold btn-lg"
              href={whatsappLink(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp <span aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <Reveal from="right" delay={0.2} className="cta-media">
          <div className="cta-frame">
            <ParallaxImage
              src="/images/giovanna-3.jpg"
              alt="Dra. Giovanna Neves, advogada, de óculos e sorrindo"
              position="50% 14%"
              strength={0.05}
              sizes="(max-width: 900px) 80vw, 34vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
