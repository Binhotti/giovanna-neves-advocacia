import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section className="section theme-dark" id="como-funciona">
      <div className="container">
        <header className="section-head section-head-center">
          <Reveal className="eyebrow eyebrow-center">
            <span className="eyebrow-line" />
            Como funciona
          </Reveal>
          <SplitText
            as="h2"
            className="section-title"
            by="word"
            text="Do primeiro contato à {solução,}|passo a passo."
          />
        </header>

        <ol className="steps">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.12} className="step">
              <span className="step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
