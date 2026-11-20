import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { reasons } from "@/lib/site";

export default function Why() {
  return (
    <section className="section theme-dark" id="diferenciais">
      <div className="container">
        <header className="section-head section-head-center">
          <Reveal className="eyebrow eyebrow-center">
            <span className="eyebrow-line" />
            Diferenciais
          </Reveal>
          <SplitText
            as="h2"
            className="section-title"
            by="word"
            text="Por que escolher|{meu trabalho?}"
          />
        </header>

        <ul className="why-grid">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r} delay={i * 0.08} className="why-item">
              <span className="check" aria-hidden="true">✓</span>
              <span>{r}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
