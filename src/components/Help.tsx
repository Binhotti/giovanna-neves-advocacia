"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";
import { helpSituations, whatsappLink } from "@/lib/site";

export default function Help() {
  const [picked, setPicked] = useState<string[]>([]);
  const [note, setNote] = useState("");

  const toggle = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const message = useMemo(() => {
    const parts = ["Olá, Dra. Giovanna! Vim pelo site e gostaria de uma análise do meu caso."];
    if (picked.length) parts.push(`Situação: ${picked.map((s) => s.replace(/\?$/, "")).join("; ")}.`);
    if (note.trim()) parts.push(`Resumo: ${note.trim()}`);
    return parts.join("\n");
  }, [picked, note]);

  return (
    <section className="section theme-dark" id="ajuda">
      <div className="container diag-grid">
        <div className="diag-intro">
          <Reveal className="eyebrow">
            <span className="eyebrow-line" />
            Situações do dia a dia
          </Reveal>
          <SplitText
            as="h2"
            className="section-title"
            by="word"
            text="Como posso|{ajudar você?}"
          />
          <Reveal delay={0.2}>
            <p className="lead">
              Veja se alguma destas situações parece com a sua. Marque as que se
              aplicam e envie pelo WhatsApp: a mensagem chega organizada para a
              Dra. Giovanna, com sigilo e sem compromisso.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="diag-panel-wrap">
          <div className="diag-panel">
            <ul className="help-list">
              {helpSituations.map((s) => {
                const on = picked.includes(s);
                return (
                  <li key={s}>
                    <button
                      type="button"
                      aria-pressed={on}
                      className={`help-option ${on ? "is-active" : ""}`}
                      onClick={() => toggle(s)}
                    >
                      <span className="help-check" aria-hidden="true">✓</span>
                      <span>{s}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <p className="diag-label">Quer resumir em uma frase? (opcional)</p>
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
              Não substitui uma consulta jurídica. Nenhum dado é armazenado no site: a
              conversa acontece direto no seu WhatsApp.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
