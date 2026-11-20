"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { faqGroups } from "@/lib/site";

export default function Faq() {
  const [groupIdx, setGroupIdx] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const group = faqGroups[groupIdx];

  const selectGroup = (i: number) => {
    setGroupIdx(i);
    setOpen(null);
  };

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

        <div className="faq-body">
          <div className="faq-tabs" role="tablist" aria-label="Área do direito">
            {faqGroups.map((g, i) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={i === groupIdx}
                className={`faq-tab ${i === groupIdx ? "is-active" : ""}`}
                onClick={() => selectGroup(i)}
              >
                {g.title}
              </button>
            ))}
          </div>

          <div className="faq-list" key={group.id}>
            {group.sections.map((sec, si) => (
              <div key={si} className="faq-section">
                {sec.title ? <p className="faq-section-title">{sec.title}</p> : null}
                {sec.items.map((item, i) => {
                  const id = `${group.id}-${si}-${i}`;
                  const isOpen = open === id;
                  return (
                    <div key={id} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                      <h3>
                        <button
                          type="button"
                          className="faq-q"
                          aria-expanded={isOpen}
                          aria-controls={`faq-a-${id}`}
                          onClick={() => setOpen(isOpen ? null : id)}
                        >
                          <span>{item.q}</span>
                          <span className="faq-icon" aria-hidden="true" />
                        </button>
                      </h3>
                      <div id={`faq-a-${id}`} role="region" className="faq-a">
                        <div className="faq-a-inner">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
