import ParallaxImage from "./ParallaxImage";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { site } from "@/lib/site";

const pillars = [
  { title: "Escuta atenta", text: "Cada história é única. Entender o contexto vem antes de qualquer estratégia." },
  { title: "Clareza", text: "Você sabe em que pé está o seu caso, em linguagem direta e sem juridiquês." },
  { title: "Rigor técnico", text: "Fundamentação sólida e atenção a prazos, provas e jurisprudência." },
];

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
            Sobre
          </Reveal>
          <SplitText as="h2" className="section-title" by="word" text="Dra. {Giovanna Neves}" />
          {site.oab ? (
            <Reveal delay={0.15}>
              <p className="oab">{site.oab}</p>
            </Reveal>
          ) : null}
          <Reveal delay={0.2}>
            <p className="lead lead-dark">
              Advogada dedicada a causas Cíveis, do Consumidor, Bancárias e de Família.
              Acredita que uma boa advocacia une técnica e humanidade: ouvir com atenção,
              explicar com clareza e atuar com firmeza na defesa de cada cliente.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="lead lead-dark">
              O atendimento é personalizado e confidencial. Cada caso recebe uma análise
              própria, com transparência sobre caminhos, prazos e possibilidades.
            </p>
          </Reveal>

          <ul className="pillars">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.35 + i * 0.12} className="pillar">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
