import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { featuredAreas, scheduleMessage, whatsappLink, defaultMessage } from "@/lib/site";

export default function Hero() {
  return (
    <section className="hero theme-dark" id="topo">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal delay={0.1} className="eyebrow">
            <span className="eyebrow-line" />
            Advocacia Cível Especializada
          </Reveal>

          <SplitText
            as="h1"
            className="hero-title"
            delay={0.25}
            text="Seus direitos,|defendidos com|{estratégia e clareza.}"
          />

          <Reveal delay={0.9}>
            <p className="lead">
              Defesa dos seus direitos com atendimento personalizado, estratégia jurídica
              e acompanhamento próximo em todas as etapas do processo.
            </p>
          </Reveal>

          <Reveal delay={1.05} className="hero-actions">
            <a
              className="btn btn-gold btn-lg"
              href={whatsappLink(scheduleMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar atendimento <span aria-hidden="true">→</span>
            </a>
            <a
              className="btn btn-ghost btn-lg"
              href={whatsappLink(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar pelo WhatsApp
            </a>
          </Reveal>

          <Reveal delay={1.2} className="hero-checks-wrap">
            <p className="hero-checks-label">Áreas em destaque</p>
            <ul className="hero-checks">
              {featuredAreas.map((c) => (
                <li key={c}>
                  <span className="check" aria-hidden="true">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.35} from="none" className="hero-media">
          <div className="hero-frame">
            <ParallaxImage
              src="/images/giovanna-1.jpg"
              alt="Dra. Giovanna Neves, advogada, sorrindo com a mão no queixo"
              priority
              position="50% 18%"
              sizes="(max-width: 900px) 90vw, 44vw"
            />
          </div>
          <div className="hero-caption">
            <span className="eyebrow-line" />
            Dra. Giovanna Neves · Advogada
          </div>
        </Reveal>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
