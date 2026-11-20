/**
 * ============================================================
 *  CONFIGURAÇÃO DO SITE — edite aqui os dados da Dra. Giovanna
 * ============================================================
 *  Tudo que é texto/contato do site passa por este arquivo.
 *  Campos vazios ("") ficam ocultos no site.
 */

export const site = {
  name: "Giovanna Neves",
  title: "Advocacia",
  oab: "OAB/SC 67.506",
  /** WhatsApp com DDI + DDD + número, só dígitos. */
  whatsapp: "5547991712170",
  /** Usuário do Instagram, sem @. Deixe "" para ocultar. */
  instagram: "",
  /** E-mail profissional. Deixe "" para ocultar. */
  email: "giovanna67506@oab-sc.org.br",
  /** Cidade/UF do escritório. Deixe "" para ocultar. */
  city: "",
  url: "https://giovannanevesadv.com.br",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultMessage =
  "Olá, Dra. Giovanna! Vim pelo site e gostaria de conversar sobre o meu caso.";

export const scheduleMessage =
  "Olá, Dra. Giovanna! Vim pelo site e gostaria de agendar um atendimento.";

/* ---------------------------------------------------------- */
/*  Destaques (primeira tela)                                 */
/* ---------------------------------------------------------- */

export const featuredAreas = [
  "Direito do Consumidor",
  "Direito Bancário",
  "Direito de Família",
  "Ações Indenizatórias",
  "Direito à Educação (vagas em creches e escolas)",
  "Atendimento em todo o Brasil",
];

/** Indicadores de autoridade logo abaixo da primeira tela. */
export const highlights = [
  { value: "+8", label: "anos", text: "de atuação em Direito Civil e Processo Civil" },
  { value: "6", label: "pós-graduações", text: "jurídicas" },
  { value: "Sigilo", label: "", text: "Atendimento personalizado e sigiloso" },
  { value: "Brasil", label: "", text: "Atuação em todo o território nacional" },
];

/* ---------------------------------------------------------- */
/*  Como posso ajudar você? (situações do dia a dia)          */
/* ---------------------------------------------------------- */

export const helpSituations = [
  "Teve seu nome negativado indevidamente?",
  "Sofreu um golpe do Pix?",
  "O banco realizou descontos que você não reconhece?",
  "Está enfrentando problemas com empréstimos consignados ou cartão RMC?",
  "Está superendividado e não consegue reorganizar suas finanças?",
  "Precisa garantir uma vaga em creche ou escola para seu filho?",
  "Está passando por um divórcio ou precisa regularizar guarda e pensão alimentícia?",
];

/* ---------------------------------------------------------- */
/*  Por que escolher meu trabalho?                            */
/* ---------------------------------------------------------- */

export const reasons = [
  "Atendimento individualizado",
  "Comunicação clara e transparente",
  "Estratégias jurídicas personalizadas",
  "Atualização constante",
  "Atuação técnica e responsável",
  "Compromisso com ética, transparência e dedicação",
];

/* ---------------------------------------------------------- */
/*  Sobre                                                     */
/* ---------------------------------------------------------- */

export const aboutParagraphs = [
  "Meu nome é Giovanna Neves, sou advogada inscrita na OAB/SC nº 67.506 e atuo há mais de oito anos na área do Direito Civil e Processo Civil.",
  "Ao longo da minha trajetória profissional, construí minha atuação com base em um princípio que considero essencial: cada cliente merece ser ouvido com atenção e ter sua situação analisada de forma individualizada.",
  "Minha experiência foi desenvolvida em escritórios de reconhecida atuação jurídica, onde participei da condução de demandas complexas envolvendo Direito do Consumidor, Direito Bancário, ações indenizatórias e processos cíveis em geral. Essa vivência proporcionou sólida formação técnica e estratégica, permitindo a construção de soluções jurídicas seguras e adequadas para cada caso.",
  "Sempre em busca de aperfeiçoamento profissional, concluí seis pós-graduações nas áreas de Direito Civil, Processo Civil, Direito Bancário, Direito de Família e Sucessões, Docência no Ensino Superior, Investigação Forense e Perícia Criminal, mantendo atualização constante diante das mudanças legislativas e da evolução da jurisprudência.",
  "Minha atuação é pautada pela ética, responsabilidade, transparência e dedicação. Acredito que exercer a advocacia vai muito além da elaboração de peças processuais: significa compreender a realidade de cada cliente, orientar com clareza, apresentar soluções juridicamente seguras e conduzir cada demanda com comprometimento e estratégia.",
  "Tenho profundo respeito pelas histórias que chegam ao meu escritório e procuro oferecer um atendimento próximo, acessível e personalizado, buscando a defesa dos direitos dos meus clientes com seriedade, excelência técnica e atenção aos detalhes.",
  "Atualmente, realizo atendimentos presenciais e digitais, o que me permite atuar em demandas em todo o território nacional, oferecendo praticidade, agilidade e acompanhamento próximo, independentemente da localização do cliente.",
];

/* ---------------------------------------------------------- */
/*  Áreas de atuação                                          */
/* ---------------------------------------------------------- */

export type Area = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const areas: Area[] = [
  {
    id: "consumidor",
    number: "01",
    title: "Direito do Consumidor",
    description:
      "Atuação em demandas envolvendo cobranças indevidas, inscrição irregular em cadastros de inadimplentes, produtos ou serviços defeituosos, responsabilidade civil, indenizações e demais relações de consumo.",
  },
  {
    id: "bancario",
    number: "02",
    title: "Direito Bancário",
    description:
      "Defesa de consumidores em ações envolvendo empréstimos não reconhecidos, Reserva de Margem Consignável (RMC), descontos indevidos, revisão contratual, superendividamento, fraudes bancárias, golpes do Pix, cartões consignados, contratos abusivos e responsabilidade das instituições financeiras.",
  },
  {
    id: "familia",
    number: "03",
    title: "Direito de Família",
    description:
      "Atuação em divórcios, dissolução de união estável, guarda, alimentos, regulamentação de convivência, revisão de pensão alimentícia e demais demandas familiares, sempre buscando soluções jurídicas que preservem a dignidade das partes envolvidas.",
  },
  {
    id: "educacao",
    number: "04",
    title: "Direito à Educação",
    description:
      "Atuação em ações judiciais destinadas à obtenção de vagas em creches e instituições de ensino, especialmente quando houver omissão do Poder Público, assegurando o acesso ao direito fundamental à educação.",
  },
  {
    id: "indenizatorias",
    number: "05",
    title: "Ações Indenizatórias",
    description:
      "Atuação na busca pela reparação de danos materiais e morais decorrentes de condutas ilícitas praticadas por particulares, empresas, instituições financeiras ou pelo Poder Público, sempre com análise criteriosa das circunstâncias do caso e dos direitos envolvidos.",
  },
];

/* ---------------------------------------------------------- */
/*  Compromisso                                               */
/* ---------------------------------------------------------- */

export const commitment = [
  "Mais do que processos, cada demanda representa uma história, uma preocupação e a expectativa de encontrar uma solução.",
  "Por isso, meu compromisso é oferecer um atendimento próximo, transparente e fundamentado na técnica jurídica, buscando orientar cada cliente com clareza sobre seus direitos, os riscos envolvidos e as estratégias mais adequadas para a defesa de seus interesses.",
  "A confiança depositada em meu trabalho é tratada com responsabilidade, dedicação e absoluto respeito.",
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
/*  Conteúdo informativo geral: cada caso exige análise       */
/*  individual. Revisar antes de publicar.                    */
/* ---------------------------------------------------------- */

export type FaqItem = { q: string; a: string };
export type FaqSection = { title: string; items: FaqItem[] };
export type FaqGroup = { id: string; title: string; sections: FaqSection[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "bancario",
    title: "Direito Bancário",
    sections: [
      {
        title: "RMC (Reserva de Margem Consignável)",
        items: [
          {
            q: "O que é RMC e por que ela gera tantas ações judiciais?",
            a: "A RMC é uma modalidade de cartão de crédito consignado, em que uma parte da margem do benefício ou do salário fica reservada para o cartão. Todo mês, o valor mínimo da fatura é descontado direto da folha, e o restante vira dívida com juros do crédito rotativo. Muita gente acredita ter contratado um empréstimo comum e só descobre depois, por falta de informação clara. Por isso há tantas ações discutindo a validade da contratação e a abusividade do contrato.",
          },
          {
            q: "Como descobrir se tenho um cartão RMC sem saber?",
            a: "Confira o extrato do benefício ou o contracheque e procure por descontos como “reserva de margem consignável” ou “cartão de crédito consignado”. Aposentados e pensionistas do INSS podem consultar os contratos pelo Meu INSS ou pela central 135. Você também pode pedir ao banco, por escrito, cópia do contrato e dos extratos do cartão.",
          },
          {
            q: "Banco desconta RMC do meu benefício: o que fazer?",
            a: "Reúna extratos e comprovantes dos descontos, peça ao banco o contrato e os extratos do cartão e registre a reclamação (SAC, ouvidoria, Procon ou consumidor.gov.br), guardando os protocolos. Se não houver solução, o caso pode ser levado à Justiça. Uma análise individual indica o melhor caminho.",
          },
          {
            q: "Posso cancelar o cartão consignado e pedir devolução dos valores?",
            a: "O cancelamento pode ser solicitado e, em muitos casos, é possível discutir a devolução do que foi pago indevidamente, às vezes em dobro, quando a cobrança for considerada indevida e não houver engano justificável. O resultado depende do contrato, de como foi feita a contratação e das provas do caso.",
          },
          {
            q: "Tenho direito à indenização por descontos de RMC?",
            a: "Pode haver direito à restituição dos valores e, a depender das circunstâncias, à indenização por danos morais, por exemplo quando a contratação não foi devidamente informada ou os descontos comprometeram a renda. Não existe garantia de resultado: cada caso é analisado individualmente.",
          },
        ],
      },
      {
        title: "Empréstimos",
        items: [
          {
            q: "Descobri um empréstimo que nunca contratei. E agora?",
            a: "Guarde extratos e comprovantes, peça cópia do contrato ao banco e registre reclamação nos canais oficiais, anotando os protocolos. Se o desconto for em benefício do INSS, é possível bloquear novas contratações pelo Meu INSS. Em seguida, procure orientação jurídica para avaliar a nulidade do contrato, a devolução dos valores e eventual indenização.",
          },
          {
            q: "O banco pode fazer empréstimo sem assinatura?",
            a: "Hoje muitos contratos são eletrônicos, com biometria, senha ou assinatura digital, então a assinatura física nem sempre é exigida. O que importa é que o banco consiga comprovar que você realmente quis contratar e foi bem informado. Se ele não comprovar, o contrato pode ser considerado inválido.",
          },
          {
            q: "Como provar que um empréstimo é fraudulento?",
            a: "Os principais elementos são o extrato mostrando se o dinheiro entrou na sua conta, o contrato apresentado pelo banco, boletim de ocorrência, registros de reclamação e conversas com a instituição. Em muitos casos a Justiça facilita a defesa do consumidor, e pode ser pedida perícia sobre assinatura ou dados da contratação.",
          },
          {
            q: "Quais documentos preciso para processar um banco?",
            a: "Em geral: documento de identificação com foto, CPF, comprovante de residência, extratos bancários ou do benefício, contratos e faturas (se tiver), prints de conversas e aplicativos, protocolos de reclamação e boletim de ocorrência, quando houver. Se faltar algo, é possível pedir ao banco ou à Justiça.",
          },
          {
            q: "Em quanto tempo posso entrar com ação?",
            a: "Em regra, o prazo para discutir danos decorrentes de falha na prestação de serviços bancários é de 5 anos, contados a partir do conhecimento do dano e de quem o causou. Há situações particulares, e quanto antes você agir, mais fácil é reunir provas.",
          },
        ],
      },
      {
        title: "Golpe do Pix",
        items: [
          {
            q: "Sofri um golpe do Pix. O banco é responsável?",
            a: "Depende do caso. A Justiça entende que bancos respondem por falhas de segurança em suas operações, mas, quando o próprio cliente realiza a transferência induzido pelo golpista, a análise é mais detalhada: perfil das transações, alertas e bloqueios, rapidez do banco ao ser avisado e outros fatores. Por isso, cada situação precisa ser avaliada individualmente.",
          },
          {
            q: "É possível recuperar o dinheiro perdido em um golpe do Pix?",
            a: "Às vezes. O Banco Central prevê o Mecanismo Especial de Devolução (MED), que permite pedir o bloqueio e a devolução dos valores, dentro de prazo limitado, se ainda houver saldo na conta do golpista. Além disso, é possível discutir na Justiça a responsabilidade do banco. Quanto mais rápido você agir, maiores as chances.",
          },
          {
            q: "O que fazer nas primeiras 24 horas após sofrer um golpe?",
            a: "Avise imediatamente o seu banco pelos canais oficiais e peça a contestação da transação e o bloqueio dos valores. Registre um boletim de ocorrência, guarde prints, comprovantes e conversas, troque senhas e bloqueie acessos suspeitos. Depois, procure orientação jurídica para planejar os próximos passos.",
          },
          {
            q: "Quais golpes do Pix são mais comuns?",
            a: "Entre os mais frequentes estão: falsa central do banco ou falso funcionário pedindo transferência, “novo número” de parente ou amigo pedindo dinheiro pelo WhatsApp, links e QR Codes falsos, vendas e anúncios fraudulentos, boletos adulterados e falsas ofertas de investimento ou emprego.",
          },
          {
            q: "Como funciona a responsabilidade dos bancos nesses casos?",
            a: "Os bancos respondem pelos riscos próprios da atividade, inclusive fraudes de terceiros em operações bancárias, quando houver falha na segurança. Mas se ficar demonstrado que a culpa foi exclusivamente do cliente, essa responsabilidade pode ser afastada. Cada caso depende das provas e das circunstâncias da fraude.",
          },
        ],
      },
      {
        title: "Superendividamento",
        items: [
          {
            q: "O que é a Lei do Superendividamento?",
            a: "É a Lei 14.181/2021, que reforçou o Código de Defesa do Consumidor. Ela cuida da situação de quem não consegue pagar suas dívidas de consumo sem comprometer o mínimo necessário para viver, e prevê mecanismos de renegociação coletiva com todos os credores, além de regras para prevenir o endividamento excessivo.",
          },
          {
            q: "Quem pode pedir a renegociação das dívidas?",
            a: "Em regra, a pessoa física de boa-fé, com dívidas de consumo vencidas e vincendas que não consegue pagar sem comprometer o mínimo existencial. Algumas dívidas ficam de fora, como as contraídas com intenção de não pagar ou ligadas a produtos e serviços de luxo de alto valor. A análise do caso confirma o enquadramento.",
          },
          {
            q: "Posso impedir descontos que comprometem minha renda?",
            a: "Em algumas situações, sim. Quando os descontos comprometem o mínimo necessário para a sua subsistência, é possível pedir judicialmente a limitação desses descontos, inclusive em caráter de urgência. Não é recomendável deixar de pagar por conta própria: o caminho deve ser avaliado com um advogado.",
          },
          {
            q: "Tenho muitas dívidas. Existe uma solução judicial?",
            a: "Sim. A lei permite pedir a repactuação das dívidas, com um plano de pagamento negociado com todos os credores, preservando seu mínimo existencial. Se não houver acordo, a Justiça pode conduzir um processo mais amplo de revisão dos contratos e definir um plano de pagamento.",
          },
          {
            q: "Como funciona a audiência de conciliação prevista na Lei do Superendividamento?",
            a: "Na audiência, o consumidor apresenta uma proposta de plano de pagamento, e os credores são chamados a negociar em conjunto. Havendo acordo, ele é homologado pela Justiça. Em regra, o plano tem prazo máximo de cinco anos e respeita o mínimo existencial. Credores que faltam sem justificativa podem sofrer consequências previstas em lei.",
          },
        ],
      },
      {
        title: "Nome negativado",
        items: [
          {
            q: "Meu nome foi negativado injustamente. Quais são meus direitos?",
            a: "Você pode pedir a retirada do registro, a declaração de inexistência da dívida e, conforme o caso, indenização por danos morais. Em situações urgentes, é possível pedir liminar para a exclusão imediata do nome dos cadastros enquanto o processo segue. Guarde comprovantes, protocolos e prints das consultas.",
          },
          {
            q: "Quanto posso receber de indenização?",
            a: "Não existe valor fixo. O juiz avalia as circunstâncias: tempo de negativação, transtornos causados, conduta da empresa e outros elementos. Se já havia outras negativações legítimas no seu nome, o dano moral pode ser afastado. Por isso, não é possível prometer valores sem analisar o caso.",
          },
          {
            q: "O banco pode negativar meu nome sem avisar?",
            a: "Não. Antes de incluir seu nome em cadastros de inadimplentes, o órgão responsável pelo cadastro deve notificá-lo previamente. A inclusão sem essa comunicação pode ser considerada irregular e gerar o dever de indenizar, conforme o caso.",
          },
          {
            q: "Nome negativado por dívida já paga: o que fazer?",
            a: "Reúna os comprovantes de pagamento e peça a baixa do registro ao credor. Após o pagamento, o credor deve providenciar a exclusão do nome do cadastro em até cinco dias úteis. Se isso não acontecer, é possível buscar a retirada na Justiça e discutir indenização.",
          },
        ],
      },
    ],
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    sections: [
      {
        title: "Compras",
        items: [
          {
            q: "Comprei um produto e nunca recebi.",
            a: "Registre reclamação com o vendedor e guarde comprovante de pagamento, anúncio e conversas. A lei permite exigir a entrega, aceitar outro produto equivalente ou pedir o cancelamento com devolução do valor pago. Se não houver solução, é possível acionar o Procon, o consumidor.gov.br ou a Justiça.",
          },
          {
            q: "Produto apresentou defeito. Quais são meus direitos?",
            a: "O fornecedor tem, em regra, 30 dias para consertar. Se o defeito não for resolvido nesse prazo, você pode escolher entre a substituição do produto, a devolução do valor pago ou o abatimento proporcional do preço. Guarde a nota fiscal e os registros dos contatos feitos.",
          },
          {
            q: "Posso exigir um produto novo?",
            a: "Sim, em algumas situações. Se o defeito não for sanado em 30 dias, você pode pedir a troca por outro produto da mesma espécie. Em casos como produto essencial ou quando o conserto comprometer a qualidade ou diminuir o valor do produto, a troca pode ser exigida imediatamente.",
          },
          {
            q: "Loja pode negar troca?",
            a: "Se houver defeito, a loja não pode simplesmente recusar: valem os prazos e direitos do Código de Defesa do Consumidor. Já a troca por simples desistência, na loja física, depende da política da loja. Em compras pela internet ou fora do estabelecimento, existe o direito de arrependimento em até 7 dias.",
          },
          {
            q: "Como funciona a garantia legal?",
            a: "É a garantia prevista em lei, independente de a loja oferecer outra: 30 dias para produtos não duráveis e 90 dias para duráveis, contados da entrega do produto ou, em caso de defeito oculto, de quando ele aparece. A garantia dada pelo fabricante ou pela loja é um complemento a ela.",
          },
        ],
      },
      {
        title: "Serviços",
        items: [
          {
            q: "Internet não funciona. Posso pedir indenização?",
            a: "É possível pedir abatimento proporcional da mensalidade e, dependendo do tempo sem serviço e dos transtornos causados, indenização por danos morais ou materiais. Guarde protocolos de atendimento e registre reclamação na operadora e na Anatel. Cada caso é analisado individualmente.",
          },
          {
            q: "Companhia aérea cancelou meu voo. Tenho direitos?",
            a: "Sim. Em caso de cancelamento, a companhia deve prestar assistência material (comunicação, alimentação e, se necessário, hospedagem e transporte) e oferecer opções como reacomodação, reembolso ou execução do serviço por outro meio. Dependendo do caso, pode haver direito a indenização por danos materiais e morais.",
          },
          {
            q: "Plano de saúde negou tratamento. O que fazer?",
            a: "Peça a negativa por escrito, com o motivo, e reúna o relatório médico. Muitas negativas podem ser contestadas, inclusive de forma urgente na Justiça, por meio de liminar. Se o caso envolver risco à saúde, procure orientação o quanto antes.",
          },
          {
            q: "Cobrança indevida gera dano moral?",
            a: "Nem sempre de forma automática. A cobrança indevida, por si só, geralmente dá direito à restituição, e, se o valor foi pago, em alguns casos em dobro. O dano moral costuma ser reconhecido quando há transtornos relevantes, como negativação, cobranças insistentes ou prejuízos concretos.",
          },
        ],
      },
    ],
  },
  {
    id: "familia",
    title: "Direito de Família",
    sections: [
      {
        title: "",
        items: [
          {
            q: "Como funciona o divórcio atualmente?",
            a: "Hoje não é preciso aguardar prazo de separação, e o divórcio pode ser pedido mesmo que o outro cônjuge não concorde. Se houver consenso e os requisitos legais forem atendidos, pode ser feito em cartório. Caso contrário (por exemplo, divergências sobre guarda ou bens), é necessário ir à Justiça.",
          },
          {
            q: "Quanto tempo demora um divórcio?",
            a: "Depende. O divórcio consensual em cartório costuma ser rápido. Na Justiça, o tempo varia conforme a complexidade e a existência de acordo sobre guarda, pensão e partilha. Quando há conflito, o processo tende a ser mais longo.",
          },
          {
            q: "Como funciona a guarda compartilhada?",
            a: "É a regra no ordenamento brasileiro: ambos os pais dividem as responsabilidades e as decisões importantes sobre os filhos. Isso não significa, necessariamente, dividir o tempo exatamente ao meio: costuma haver uma residência de referência e um convívio equilibrado com o outro genitor.",
          },
          {
            q: "Quem fica com os bens?",
            a: "Depende do regime de bens. No regime mais comum, a comunhão parcial, os bens adquiridos onerosamente durante o casamento costumam ser divididos, e os anteriores ao casamento, os recebidos por herança ou doação, em regra, não entram. Outros regimes têm regras próprias.",
          },
          {
            q: "Como funciona a pensão alimentícia?",
            a: "É o valor destinado a garantir o sustento de quem tem direito a ele, como os filhos. Não há percentual fixo: o valor considera a necessidade de quem recebe e a possibilidade de quem paga. O não pagamento pode levar a medidas de cobrança e, em certos casos, à prisão civil.",
          },
          {
            q: "Posso pedir revisão da pensão?",
            a: "Sim, quando houver mudança relevante na situação financeira de quem paga ou nas necessidades de quem recebe. O pedido é feito por ação própria. Até a decisão, vale o valor atualmente fixado: não deixe de pagar por conta própria.",
          },
          {
            q: "Como funciona a guarda unilateral?",
            a: "É quando um dos pais fica com a guarda, e o outro tem o direito de conviver com o filho e o dever de supervisionar sua criação. Costuma ser adotada quando a guarda compartilhada não é possível ou recomendável. O critério central é sempre o melhor interesse da criança.",
          },
          {
            q: "O pai pode visitar quando quiser?",
            a: "O ideal é que a convivência seja regulamentada, com dias e horários definidos por acordo ou decisão judicial, respeitando a rotina da criança. Isso traz segurança e evita conflitos. A convivência é um direito do filho e também um dever de quem não tem a guarda.",
          },
          {
            q: "União estável gera direito aos bens?",
            a: "Sim. Salvo contrato escrito dispondo de outra forma, aplica-se, em regra, o regime da comunhão parcial de bens, e o companheiro pode ter direitos em caso de dissolução ou falecimento. É importante comprovar a união e, se possível, formalizá-la.",
          },
        ],
      },
    ],
  },
  {
    id: "educacao",
    title: "Direito à Educação",
    sections: [
      {
        title: "",
        items: [
          {
            q: "Meu filho tem direito à vaga em creche?",
            a: "Sim. A Constituição garante o atendimento em creche e pré-escola às crianças de até cinco anos, e o Poder Público tem o dever de oferecer vagas. Esse direito pode ser exigido judicialmente quando não for atendido.",
          },
          {
            q: "O Município pode negar vaga?",
            a: "Pode haver lista de espera e critérios de prioridade, mas a falta de vaga não pode se prolongar sem solução. Quando o Município se omite, é possível exigir a matrícula pela Justiça.",
          },
          {
            q: "Quanto tempo demora uma ação?",
            a: "Varia conforme a região e a fase do processo. Como o assunto costuma ser urgente, o pedido de liminar costuma ser analisado com mais rapidez que o restante do processo, mas não é possível garantir prazo.",
          },
          {
            q: "Posso conseguir uma liminar?",
            a: "É possível pedir. A liminar costuma ser solicitada quando há urgência, como a criança ainda sem vaga, e depende de comprovar a inscrição, a negativa ou a demora do Município. A decisão fica a cargo do juiz.",
          },
          {
            q: "Como funciona a ação para vaga em creche?",
            a: "Em geral, reúnem-se documentos (certidão de nascimento, comprovante de residência e comprovante de inscrição ou negativa da vaga) e a ação é proposta contra o Município, com pedido de liminar. Se a vaga for determinada, o Município é intimado a efetuar a matrícula em prazo fixado, sob pena de multa.",
          },
          {
            q: "Meu filho com deficiência possui prioridade?",
            a: "A lei assegura à pessoa com deficiência o direito à educação inclusiva, com apoio e atendimento educacional especializado, e normas locais podem prever prioridade na matrícula. É importante reunir laudos e documentos que comprovem a necessidade.",
          },
          {
            q: "Posso pedir transporte escolar?",
            a: "Em muitos casos, sim, principalmente quando a escola da rede pública fica distante ou o acesso é difícil, como em áreas rurais. O pedido pode ser feito primeiro à Secretaria de Educação e, se não for atendido, à Justiça.",
          },
        ],
      },
    ],
  },
];
