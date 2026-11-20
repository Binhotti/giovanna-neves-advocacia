"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { areas, whatsappLink } from "@/lib/site";

/** Faz o brilho dourado seguir o cursor dentro do cartão (desktop). */
function trackPointer(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

/**
 * Áreas de atuação.
 * - Desktop/tablet: grade de cartões só com o título; o texto aparece ao passar o mouse.
 * - Celular: carrossel horizontal com snap, cartão ativo em destaque,
 *   contador, barra de progresso e setas (controlado pelo CSS + este componente).
 */
export default function Areas() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          updateActive();
        });
      }
    };
    const onTouch = () => setTouched(true);
    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("touchstart", onTouch, { passive: true, once: true });
    updateActive();
    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("touchstart", onTouch);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [updateActive]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.max(0, Math.min(areas.length - 1, index));
    const el = track.children[i] as HTMLElement | undefined;
    if (!el) return;
    setTouched(true);
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="section theme-light" id="areas">
      <div className="container">
        <header className="section-head">
          <Reveal className="eyebrow">
            <span className="eyebrow-line" />
            Áreas de atuação
          </Reveal>
          <SplitText
            as="h2"
            className="section-title"
            by="word"
            text="Cinco áreas. {Um só compromisso:}|Defender o que é seu."
          />
          <Reveal delay={0.2}>
            <p className="lead lead-dark">
              Atuação focada para que cada caso receba profundidade técnica e atenção
              individual, do primeiro atendimento à decisão final.
            </p>
          </Reveal>
        </header>

        <Reveal className="areas-stage">
          <div
            className="areas-grid"
            ref={trackRef}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Áreas de atuação"
          >
            {areas.map((a, i) => (
              <div
                key={a.id}
                className={`area-wrap ${i === active ? "is-active" : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} de ${areas.length}`}
              >
                <article className="area-card spotlight" tabIndex={0} onMouseMove={trackPointer}>
                  <span className="area-number" aria-hidden="true">
                    {a.number}
                  </span>
                  <div className="area-body">
                    <h3 className="area-title">{a.title}</h3>
                    <div className="area-reveal">
                      <div className="area-reveal-inner">
                        <p className="area-desc">{a.description}</p>
                        <a
                          className="link-arrow"
                          href={whatsappLink(
                            `Olá, Dra. Giovanna! Gostaria de conversar sobre uma questão de ${a.title}.`,
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Falar sobre este tema <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* controles do carrossel: aparecem só no celular */}
          <div className="areas-controls" aria-hidden={false}>
            <div className="areas-progress" aria-hidden="true">
              <span
                className="areas-progress-fill"
                style={{ transform: `scaleX(${(active + 1) / areas.length})` }}
              />
            </div>

            <div className="areas-nav">
              <p className="areas-count" aria-live="polite">
                <span className="areas-count-now">{pad(active + 1)}</span>
                <span className="areas-count-sep"> / </span>
                {pad(areas.length)}
              </p>

              <p className={`areas-hint ${touched ? "is-hidden" : ""}`} aria-hidden="true">
                Deslize <span>→</span>
              </p>

              <div className="areas-arrows">
                <button
                  type="button"
                  className="areas-arrow"
                  aria-label="Área anterior"
                  disabled={active === 0}
                  onClick={() => goTo(active - 1)}
                >
                  ←
                </button>
                <button
                  type="button"
                  className="areas-arrow"
                  aria-label="Próxima área"
                  disabled={active === areas.length - 1}
                  onClick={() => goTo(active + 1)}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
