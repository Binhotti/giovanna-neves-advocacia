import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Advocacia especializada em Direito Civil e Processo Civil, Direito do Consumidor, Direito Bancário e Direito de Família. Atendimento confidencial e análise individualizada do seu caso.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Advocacia — Civil, Consumidor, Bancário e Família`,
  description,
  openGraph: {
    title: `${site.name} | Advocacia`,
    description,
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/giovanna-1.jpg", width: 1200, height: 1800 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal,.split-char{opacity:1!important;transform:none!important}.statement-word{opacity:1!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
