import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { commitment } from "@/lib/site";

export default function Commitment() {
  return (
    <section className="section theme-light" id="compromisso">
      <div className="container-narrow commitment">
        <Reveal className="eyebrow eyebrow-center">
          <span className="eyebrow-line" />
          Compromisso
        </Reveal>
        <SplitText
          as="h2"
          className="section-title"
          by="word"
          text="Compromisso|com {cada cliente}"
        />
        <div className="commitment-text">
          {commitment.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.12}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
