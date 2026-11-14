"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  /** posição do foco da imagem, ex.: "50% 20%" */
  position?: string;
  /** intensidade do parallax (0 desliga) */
  strength?: number;
};

/** Imagem com leve parallax conforme o scroll (respeita prefers-reduced-motion). */
export default function ParallaxImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  position = "50% 20%",
  strength = 0.06,
}: Props) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner || strength === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (acima da tela) … 0 (centro) … 1 (abaixo da tela)
      const p = (rect.top + rect.height / 2 - vh / 2) / vh;
      const y = Math.max(-1, Math.min(1, p)) * rect.height * strength;
      inner.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(1.08)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div className="parallax" ref={wrapRef}>
      <div className="parallax-inner" ref={innerRef}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: "cover", objectPosition: position }}
        />
      </div>
    </div>
  );
}
