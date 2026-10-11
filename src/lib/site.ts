export const WA_NUMBER = "5521999990000";
export const PHONE_LABEL = "(21) 99999-0000";
export const EMAIL = "contato@advocacianovaiguacu.com.br";
export const ADDRESS = "Rua Exemplo, 123 — Centro, Nova Iguaçu/RJ";
export const ADDRESS_SHORT = "Centro, Nova Iguaçu · RJ";

export const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export type Area = "civil" | "trabalhista";

export interface Chamada {
  area: Area;
  tag: string;
  titulo: string;
  desc: string;
}

export const NAV_PRIMARY = [
  { label: "Civil", href: "#areas" },
  { label: "Trabalhista", href: "#areas" },
  { label: "O escritório", href: "#sobre" },
];

export const NAV_SECONDARY = [
  { label: "Informes", href: "#informes" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export interface Slide {
  tag: string;
  titulo: string;
  desc: string;
  primaria: string;
  secundaria: string;
  secundariaHref: string;
}

export const SLIDES: Slide[] = [
  {
    tag: "Destaque · Trabalhista",
    titulo: "Demitido sem receber? Descubra cada verba antes de assinar qualquer acordo.",
    desc: "Calculamos verbas rescisórias, multas e horas extras — e buscamos acordo rápido ou ação quando preciso.",
    primaria: "Agendar consulta",
    secundaria: "Ver área trabalhista",
    secundariaHref: "#areas",
  },
  {
    tag: "Destaque · Civil",
    titulo: "Contratos, cobranças e indenizações com estratégia e prova bem feita.",
    desc: "Notificações, cobranças e danos morais e materiais conduzidos com prazo transparente e linguagem clara.",
    primaria: "Falar no WhatsApp",
    secundaria: "Ver área cível",
    secundariaHref: "#areas",
  },
  {
    tag: "Atendimento",
    titulo: "Presencial no Centro ou 100% online para todo o Brasil.",
    desc: "Hora marcada, documentos digitais com recibo e canal direto com o advogado em horário comercial.",
    primaria: "Como funciona",
    secundaria: "Onde estamos",
    secundariaHref: "#contato",
  },
];

export const CHAMADAS: Chamada[] = [
  {
    area: "trabalhista",
    tag: "Rescisão",
    titulo: "Verbas rescisórias e multas",
    desc: "Saldo de salário, aviso-prévio, 13º, férias + 1/3, FGTS + 40% e multas dos arts. 467 e 477 da CLT.",
  },
  {
    area: "trabalhista",
    tag: "Jornada",
    titulo: "Horas extras e adicionais",
    desc: "Hora extra, adicional noturno, insalubridade e periculosidade com cálculo técnico do período.",
  },
  {
    area: "trabalhista",
    tag: "Acordos",
    titulo: "Vínculo e acordos extrajudiciais",
    desc: "Reconhecimento de vínculo, reversão de justa causa e acordos homologados com segurança.",
  },
  {
    area: "civil",
    tag: "Contratos",
    titulo: "Contratos e cobranças",
    desc: "Elaboração e revisão de contratos, notificações extrajudiciais e cobrança de dívidas.",
  },
  {
    area: "civil",
    tag: "Danos",
    titulo: "Indenizações por danos",
    desc: "Danos morais e materiais: negativação indevida, acidentes, defeitos e falhas de serviço.",
  },
  {
    area: "civil",
    tag: "Consumo",
    titulo: "Consumidor e responsabilidade",
    desc: "Planos, bancos, telefonia e compras: restituição em dobro, troca e reparação de prejuízos.",
  },
];

export const INFORMES = [
  {
    titulo: "Prazo trabalhista: 2 anos",
    desc: "Após o fim do contrato, o prazo para reclamar é de 2 anos. Não deixe para a última hora.",
  },
  {
    titulo: "Traga seus documentos",
    desc: "RG, CPF, carteira de trabalho e tudo sobre o caso: contrato, prints, recibos e fotos.",
  },
  {
    titulo: "Plantão no WhatsApp",
    desc: "Seg–Sex, 9h às 18h. Retornamos em até 24h úteis. Sábado, com agendamento.",
  },
  {
    titulo: "Consulta inicial sem compromisso",
    desc: "Entendemos o caso e dizemos se vale a pena seguir — honorários sempre por escrito.",
  },
];

export const PAINEL = [
  { valor: "+12", rotulo: "anos de atuação na região" },
  { valor: "+800", rotulo: "casos atendidos" },
  { valor: "98%", rotulo: "dos clientes indicam" },
];

export const DEPOIMENTOS = [
  {
    texto:
      "“Fui demitida e achei que não tinha direito a nada. Calcularam tudo e fizemos acordo em 2 meses.”",
    autor: "Ana S. — Comendador Soares",
  },
  {
    texto:
      "“Contrato de aluguel com problema e cobrança indevida. Resolveram sem eu precisar ir ao fórum.”",
    autor: "Carlos M. — Centro",
  },
  {
    texto:
      "“Explicaram cada etapa no meu caso trabalhista. Sempre responderam rápido no WhatsApp.”",
    autor: "Patrícia L. — Mesquita",
  },
];

export const FAQ = [
  {
    pergunta: "Quanto custa a primeira consulta?",
    resposta:
      "A primeira conversa é sem compromisso: entendemos o caso e dizemos se vale a pena seguir. Se seguir, os honorários vão por escrito, conforme a tabela da OAB/RJ.",
  },
  {
    pergunta: "Vocês atendem online?",
    resposta:
      "Sim. Todo o atendimento pode ser digital (WhatsApp, videochamada e assinatura eletrônica), com a mesma validade. O presencial no Centro é opcional.",
  },
  {
    pergunta: "Demora muito um processo trabalhista?",
    resposta:
      "Depende. Muitos casos se resolvem em acordo nos primeiros meses. Quando vai a julgamento, mantemos você informado de cada movimentação, sem juridiquês.",
  },
  {
    pergunta: "Quais documentos devo levar?",
    resposta:
      "RG/CPF, comprovante de residência, carteira de trabalho (física ou digital) e tudo que tiver sobre o caso: contrato, prints, recibos, fotos. Na dúvida, traga tudo — filtramos juntos.",
  },
  {
    pergunta: "E se meu caso não for Civil nem Trabalhista?",
    resposta:
      "Fale conosco mesmo assim: se não for nossa área, indicamos um colega de confiança em Nova Iguaçu em vez de deixar você sem rumo.",
  },
];
