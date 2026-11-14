"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/lib/useInView";

type Props = {
  children: ReactNode;
  className?: string;
  /** atraso em segundos */
  delay?: number;
  /** direção de entrada */
  from?: "up" | "left" | "right" | "none";
  as?: "div" | "li" | "section" | "p";
};

/** Faz o conteúdo surgir suavemente (fade + deslocamento) ao entrar na tela. */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  from = "up",
  as: Tag = "div",
}: Props) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 });
  const style = { "--d": `${delay}s` } as CSSProperties;

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal reveal-${from} ${inView ? "is-in" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
