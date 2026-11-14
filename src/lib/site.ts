/**
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — edite aqui os dados da Dra. Giovanna
 * ============================================================
 *  Tudo que é texto/contato do site passa por este arquivo.
 *  Campos marcados com "PREENCHER" estão como exemplo.
 */

export const site = {
  name: "Giovanna Neves",
  title: "Advocacia",
  /** PREENCHER: número da OAB, ex.: "OAB/UF 000.000". Deixe "" para ocultar. */
  oab: "",
  /** PREENCHER: WhatsApp com DDI + DDD + número, só dígitos. Ex.: 5511999999999 */
  whatsapp: "5547991712170",
  /** PREENCHER: usuário do Instagram, sem @. Deixe "" para ocultar. */
  instagram: "",
  /** PREENCHER: e-mail profissional. Deixe "" para ocultar. */
  email: "",
  /** PREENCHER: cidade/UF do escritório. Deixe "" para ocultar. */
  city: "",
  url: "https://www.seudominio.com.br",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultMessage =
  "Olá, Dra. Giovanna! Vim pelo site e gostaria de conversar sobre o meu caso.";

/* ---------------------------------------------------------- */
/*  Áreas de atuação                                          */
/* ---------------------------------------------------------- */

export type Area = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  situations: string[];
};

export const areas: Area[] = [
  {
    id: "civil",
    number: "01",
    title: "Direito Civil e Processo Civil",
    short: "Civil",
    description:
      "Contratos, responsabilidade civil, cobranças, posse e propriedade. Uma atuação técnica e estratégica em cada fase do processo, da petição inicial aos recursos.",
    situations: [
      "Descumprimento de contrato",
      "Danos morais e materiais",
      "Cobranças e dívidas em discussão",
      "Questões de posse e propriedade",
      "Defesa e recursos em processos",
    ],
  },
  {
    id: "consumidor",
    number: "02",
    title: "Direito do Consumidor",
    short: "Consumidor",
    description:
      "Quando uma empresa falha, o consumidor tem direitos garantidos por lei. Analisamos o seu caso e as medidas cabíveis, com clareza sobre prazos e caminhos.",
    situations: [
      "Produto com defeito ou serviço não prestado",
      "Cobrança indevida em fatura",
      "Negativação indevida do nome",
      "Compra não entregue ou cancelada",
      "Voos, viagens e pacotes com problemas",
    ],
  },
  {
    id: "bancario",
    number: "03",
    title: "Direito Bancário",
    short: "Bancário",
    description:
      "Contratos, tarifas e descontos em conta merecem atenção. Revisamos a relação com instituições financeiras e avaliamos eventuais abusividades.",
    situations: [
      "Juros e tarifas questionáveis",
      "Descontos não reconhecidos em conta ou benefício",
      "Revisão de empréstimos e financiamentos",
      "Fraudes e golpes envolvendo bancos",
      "Cartão de crédito e crédito consignado",
    ],
  },
  {
    id: "familia",
    number: "04",
    title: "Direito de Família",
    short: "Família",
    description:
      "Temas delicados pedem escuta e discrição. Conduzimos cada situação com sensibilidade, priorizando soluções equilibradas e a proteção de quem importa.",
    situations: [
      "Divórcio e união estável",
      "Guarda e convivência dos filhos",
      "Pensão alimentícia",
      "Partilha de bens",
      "Inventário e herança",
    ],
  },
];

/* ---------------------------------------------------------- */
/*  Como funciona                                             */
/* ---------------------------------------------------------- */

export const steps = [
  {
    title: "Primeiro contato",
    text: "Você conta o que aconteceu, pelo WhatsApp, de forma simples e confidencial.",
  },
  {
    title: "Análise do caso",
    text: "Avaliamos documentos, prazos e fundamentos jurídicos para entender as possibilidades reais.",
  },
  {
    title: "Estratégia",
    text: "Definimos o melhor caminho: negociação, medida extrajudicial ou ação judicial.",
  },
  {
    title: "Acompanhamento",
    text: "Você é informado(a) a cada etapa, com linguagem clara e sem juridiquês.",
  },
];

/* ---------------------------------------------------------- */
/*  Dúvidas frequentes                                        */
/*  (conteúdo informativo geral — revisar antes de publicar)  */
/* ---------------------------------------------------------- */

export const faq = [
  {
    q: "Existe prazo para reclamar meus direitos como consumidor?",
    a: "Sim. O Código de Defesa do Consumidor prevê prazos como 30 dias (produtos e serviços não duráveis) e 90 dias (duráveis) para reclamar de vícios, e 5 anos para pedir reparação por danos causados por fato do produto ou serviço. Cada caso tem particularidades, por isso vale buscar orientação o quanto antes.",
  },
  {
    q: "Contratos e cobranças bancárias podem ser revistos?",
    a: "Podem ser analisados e, havendo abusividade ou irregularidade, discutidos extrajudicial ou judicialmente. A análise depende do contrato, das taxas aplicadas e da documentação disponível.",
  },
  {
    q: "Divórcio sempre precisa ir à Justiça?",
    a: "Nem sempre. Quando há consenso entre as partes, o divórcio pode ser feito em cartório, desde que atendidos os requisitos legais. Havendo filhos menores ou incapazes, ou desacordo, o caminho tende a ser diferente. Avaliamos a sua situação específica.",
  },
  {
    q: "Preciso de advogado para entrar com uma ação?",
    a: "Em causas de menor valor nos Juizados Especiais, a lei permite ação sem advogado até determinado limite. Ainda assim, a orientação profissional ajuda a evitar erros de estratégia, produção de provas e prazos.",
  },
  {
    q: "Como funciona o primeiro atendimento?",
    a: "Você entra em contato pelo WhatsApp, apresenta um resumo do caso e, se necessário, envia documentos. A partir daí, avaliamos e explicamos os próximos passos, com transparência sobre o que é possível em cada situação.",
  },
];
