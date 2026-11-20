import Reveal from "./Reveal";
import { highlights } from "@/lib/site";

export default function Highlights() {
  return (
    <section className="highlights theme-dark" aria-label="Diferenciais">
      <div className="container">
        <ul className="highlights-grid">
          {highlights.map((h, i) => (
            <Reveal as="li" key={h.text} delay={i * 0.1} className="highlight">
              <p className="highlight-value">
                {h.value}
                {h.label ? <span> {h.label}</span> : null}
              </p>
              <p className="highlight-text">{h.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
