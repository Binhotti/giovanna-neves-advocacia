"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { areas, whatsappLink } from "@/lib/site";

export default function Diagnostic() {
  const [areaId, setAreaId] = useState<string>(areas[0].id);
  const [picked, setPicked] = useState<string[]>([]);
  const [note, setNote] = useState("");

  const area = useMemo(() => areas.find((a) => a.id === areaId) ?? areas[0], [areaId]);

  const selectArea = (id: string) => {
    setAreaId(id);
    setPicked([]);
  };

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const message = useMemo(() => {
    const parts = [`Olá, Dra. Giovanna! Vim pelo site e gostaria de uma análise do meu caso.`, `Área: ${area.title}.`];
    if (picked.length) parts.push(`Situação: ${picked.join("; ")}.`);
    if (note.trim()) parts.push(`Resumo: ${note.trim()}`);
    return parts.join("\n");
  }, [area, picked, note]);

  return (
    <section className="section theme-dark" id="diagnostico">
      <div className="container diag-grid">
        <div className="diag-intro">
          <Reveal className="eyebrow">
            <span className="eyebrow-line" />
            Diagnóstico inicial
          </Reveal>
          <SplitText
            as="h2"
            className="section-title"
            by="word"
            text="Descubra por|onde {começar.}"
          />
          <Reveal delay={0.2}>
            <p className="lead">
              Selecione a área e a situação que mais se aproxima do seu caso. Sua mensagem
              chega organizada para a Dra. Giovanna, e a análise é feita com sigilo e sem
              compromisso.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="diag-panel-wrap">
          <div className="diag-panel">
            <p className="diag-label">1 · Qual é a área?</p>
            <div className="chips" role="tablist" aria-label="Área do direito">
              {areas.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  aria-selected={a.id === areaId}
                  className={`chip ${a.id === areaId ? "is-active" : ""}`}
                  onClick={() => selectArea(a.id)}
                >
                  {a.short}
                </button>
              ))}
            </div>

            <p className="diag-label">2 · O que aconteceu?</p>
            <div className="chips" key={area.id}>
              {area.situations.map((s, i) => (
                <button
                  key={s}
                  type="button"
                  aria-pressed={picked.includes(s)}
                  className={`chip chip-soft ${picked.includes(s) ? "is-active" : ""}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                  onClick={() => toggle(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <p className="diag-label">3 · Quer resumir em uma frase? (opcional)</p>
            <textarea
              className="diag-note"
              rows={3}
              maxLength={400}
              placeholder="Ex.: fui cobrado por um serviço que cancelei há dois meses…"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <a
              className="btn btn-gold btn-lg diag-submit"
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar pelo WhatsApp <span aria-hidden="true">→</span>
            </a>
            <p className="diag-foot">
              Este formulário não substitui uma consulta jurídica. Nenhum dado é armazenado
              no site: a conversa acontece direto no seu WhatsApp.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
