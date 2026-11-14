"use client";

import { createElement, type CSSProperties } from "react";
import { useInView } from "@/lib/useInView";

type Props = {
  /**
   * Use {chaves} para destacar trechos em dourado. Ex.: "Seus direitos, {com estratégia.}"
   * Use "|" para quebrar a linha. Mantenha a pontuação colada à palavra, dentro das chaves, para não quebrar linha sozinha.
   */
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  /** atraso inicial em segundos */
  delay?: number;
  /** "letter" anima letra por letra; "word" anima palavra por palavra */
  by?: "letter" | "word";
};

type Token = { word: string; accent: boolean };

function tokenize(text: string): Token[] {
  const out: Token[] = [];
  text.split(/(\{[^}]+\})/g).forEach((part) => {
    if (!part) return;
    const accent = part.startsWith("{") && part.endsWith("}");
    const clean = accent ? part.slice(1, -1) : part;
    clean
      .split(/\s+/)
      .filter(Boolean)
      .forEach((word) => out.push({ word, accent }));
  });
  return out;
}

export default function SplitText({
  text,
  as = "h2",
  className = "",
  delay = 0,
  by = "letter",
}: Props) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.25 });
  const lines = text.split("|").map((l) => tokenize(l));
  // caracteres da maior linha: usado no CSS para ajustar o tamanho da fonte à coluna
  const chars = Math.max(
    ...lines.map((tokens) => tokens.reduce((n, t) => n + t.word.length, 0) + Math.max(tokens.length - 1, 0)),
  );
  const plain = text.replace(/[{}]/g, "").replace(/\|/g, " ");

  let charIndex = 0;
  let wordIndex = 0;

  const renderWord = (t: Token, wi: number, total: number) => {
    const letters = by === "letter" ? Array.from(t.word) : [t.word];
    const wIdx = wordIndex++;
    return (
      <span className="split-word" key={wi} aria-hidden="true">
        <span className={t.accent ? "split-inner is-accent" : "split-inner"}>
          {letters.map((ch, ci) => {
            const i = by === "letter" ? charIndex++ : wIdx;
            const style = { "--i": i } as CSSProperties;
            return (
              <span className="split-char" style={style} key={ci}>
                {ch}
              </span>
            );
          })}
        </span>
        {wi < total - 1 ? "\u00A0" : null}
      </span>
    );
  };

  const children = lines.map((tokens, li) => {
    // agrupa palavras consecutivas com o mesmo destaque; o grupo destacado nunca quebra no meio
    const groups: { accent: boolean; items: { t: Token; wi: number }[] }[] = [];
    tokens.forEach((t, wi) => {
      const last = groups[groups.length - 1];
      if (last && last.accent === t.accent) last.items.push({ t, wi });
      else groups.push({ accent: t.accent, items: [{ t, wi }] });
    });

    return (
      <span className="split-line" key={li}>
        {groups.map((g, gi) => {
          const words = g.items.map(({ t, wi }) => renderWord(t, wi, tokens.length));
          return g.accent ? (
            <span className="split-group" key={gi}>
              {words}
            </span>
          ) : (
            <span key={gi}>{words}</span>
          );
        })}
      </span>
    );
  });

  const style = { "--d": `${delay}s`, "--chars": chars } as CSSProperties;

  return createElement(
    as,
    {
      ref,
      className: `split ${by === "word" ? "split-by-word" : ""} ${inView ? "is-in" : ""} ${className}`.trim(),
      style,
      "aria-label": plain,
    },
    children,
  );
}
