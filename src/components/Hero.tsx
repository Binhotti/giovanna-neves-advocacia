import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { whatsappLink, defaultMessage } from "@/lib/site";

const checks = [
  "Atendimento confidencial",
  "Análise individualizada do caso",
  "Resposta direta no WhatsApp",
];

export default function Hero() {
  return (
    <section className="hero theme-dark" id="topo">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal delay={0.1} className="eyebrow">
            <span className="eyebrow-line" />
            Advocacia · Civil · Consumidor · Bancário · Família
          </Reveal>

          <SplitText
            as="h1"
            className="hero-title"
            delay={0.25}
            text="Seus direitos,|defendidos com|{estratégia e clareza.}"
          />

          <Reveal delay={0.9}>
            <p className="lead">
              Atuação especializada em Direito Civil, do Consumidor, Bancário e de Família.
              Entenda se o seu caso tem fundamento jurídico em uma análise individualizada,
              com discrição e linguagem simples.
            </p>
          </Reveal>

          <Reveal delay={1.05}>
            <a
              className="btn btn-gold btn-lg"
              href={whatsappLink(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Analisar meu caso <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          <Reveal delay={1.2} className="hero-checks-wrap">
            <ul className="hero-checks">
              {checks.map((c) => (
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
