"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { faq } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section theme-light" id="duvidas">
      <div className="container faq-grid">
        <header className="faq-head">
          <Reveal className="eyebrow">
            <span className="eyebrow-line" />
            Dúvidas frequentes
          </Reveal>
          <SplitText
            as="h2"
            className="section-title"
            by="word"
            text="Respostas {diretas}|para dúvidas|comuns."
          />
          <Reveal delay={0.2}>
            <p className="lead lead-dark">
              Informações gerais, de caráter educativo. Cada situação exige análise
              individual.
            </p>
          </Reveal>
        </header>

        <div className="faq-list">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.07} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" className="faq-a">
                  <div className="faq-a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
