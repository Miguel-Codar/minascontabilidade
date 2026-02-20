import { 
  Stethoscope, 
  FileText, 
  TrendingUp, 
  Building2, 
  Briefcase, 
  CheckCircle,
  Users,
  Activity,
  Calculator,
  ShieldCheck,
  BarChart,
  Lightbulb
} from 'lucide-react';
import { 
  ServiceSegment, 
  StatItem, 
  ServiceDifferential, 
  PricingPlan, 
  ExtraService, 
  FAQItem, 
  BlogPost 
} from './types';

// Using ServiceSegment type for the main Services section
export const segments: ServiceSegment[] = [
  {
    title: "Contabilidade para Médicos",
    description: "Gestão contábil completa para consultórios, clínicas, dentistas e profissionais da saúde, com foco em redução de impostos e conformidade fiscal.",
    Icon: Stethoscope
  },
  {
    title: "BPO Financeiro",
    description: "Terceirização do financeiro para organizar entradas, saídas, relatórios e fluxo de caixa, trazendo mais controle e tranquilidade para sua rotina.",
    Icon: TrendingUp
  },
  {
    title: "Planejamento Tributário",
    description: "Análise estratégica do seu cenário para reduzir legalmente a carga tributária e evitar pagamentos desnecessários de impostos.",
    Icon: FileText
  },
  {
    title: "Abertura de Empresas",
    description: "Abertura de CNPJ, definição do melhor regime tributário e acompanhamento completo de toda a documentação.",
    Icon: Building2
  },
  {
    title: "Consultoria Empresarial",
    description: "Apoio estratégico para tomada de decisões, crescimento sustentável e organização financeira do consultório.",
    Icon: Briefcase
  },
  {
    title: "Regularização Fiscal",
    description: "Regularização de pendências fiscais, declarações em atraso e resolução de problemas junto aos órgãos competentes.",
    Icon: CheckCircle
  }
];

export const stats: StatItem[] = [
  { value: "345+", label: "clientes atendidos com excelência" },
  { value: "99%", label: "de satisfação dos clientes" },
  { value: "10+", label: "anos de atuação no mercado" },
];

export const differentials: string[] = [
  "Especialistas no segmento de saúde",
  "Atendimento humano, próximo e sem robôs",
  "Processos digitais, simples e ágeis",
  "Economia tributária comprovada",
  "Equipe qualificada e sempre atualizada",
  "Suporte rápido e direto via WhatsApp"
];

export const howItWorksSteps = [
  {
    step: "1",
    title: "Você fala com um especialista",
    description: "Entendemos sua necessidade inicial."
  },
  {
    step: "2",
    title: "Analisamos sua situação",
    description: "Verificamos a parte contábil e tributária atual."
  },
  {
    step: "3",
    title: "Assumimos a burocracia",
    description: "Cuidamos da organização financeira e papelada."
  },
  {
    step: "4",
    title: "Você ganha tempo",
    description: "Previsibilidade e tranquilidade para focar nos pacientes."
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essencial",
    price: "149",
    features: [
      "Abertura de empresa grátis",
      "Contabilidade completa",
      "Emissão de notas fiscais",
      "Atendimento via WhatsApp",
      "Imposto de Renda PJ"
    ]
  },
  {
    name: "Profissional",
    price: "249",
    isPopular: true,
    features: [
      "Tudo do plano Essencial",
      "BPO Financeiro Básico",
      "Planejamento Tributário",
      "Certificado Digital incluso (A1)",
      "Relatórios mensais de performance"
    ]
  },
  {
    name: "Clínica",
    price: "499",
    features: [
      "Tudo do plano Profissional",
      "BPO Financeiro Completo",
      "Gestão de Folha de Pagamento",
      "Consultoria Financeira Trimestral",
      "Suporte prioritário"
    ]
  }
];

export const extraServices: ExtraService[] = [
  {
    title: "Recuperação Tributária",
    description: "Análise profunda dos últimos 5 anos para identificar impostos pagos a maior e solicitar a restituição.",
    Icon: Calculator
  },
  {
    title: "Blindagem Patrimonial",
    description: "Estruturação jurídica para proteger seu patrimônio pessoal de riscos empresariais.",
    Icon: ShieldCheck
  },
  {
    title: "Valuation",
    description: "Avaliação precisa do valor da sua clínica ou consultório para venda, fusão ou entrada de sócios.",
    Icon: BarChart
  },
  {
    title: "Gestão de Processos",
    description: "Otimização de fluxos de trabalho internos para aumentar a produtividade e reduzir custos.",
    Icon: Lightbulb
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Como funciona a troca de contador?",
    answer: "É muito simples. Nós cuidamos de todo o processo de migração. Entramos em contato com seu contador atual, solicitamos a documentação necessária e fazemos a transferência de responsabilidade técnica. Você não precisa se preocupar com a burocracia."
  },
  {
    question: "Atendem apenas médicos?",
    answer: "Nosso foco principal é a área da saúde (médicos, dentistas, clínicas, psicólogos, etc), pois conhecemos profundamente as particularidades tributárias deste setor. No entanto, também atendemos outros prestadores de serviços sob consulta."
  },
  {
    question: "Preciso ter certificado digital?",
    answer: "Sim, o certificado digital e-CNPJ é obrigatório para a emissão de notas fiscais e entrega de obrigações acessórias. Se você ainda não tem, nós auxiliamos na emissão com nossos parceiros com valores diferenciados."
  },
  {
    question: "Como é feito o atendimento?",
    answer: "Nosso atendimento é humanizado e multicanal. Você pode falar conosco via WhatsApp, E-mail, Telefone ou Videoconferência. Temos um time de especialistas pronto para tirar suas dúvidas rapidamente."
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "Carnê-Leão x PJ: Qual a melhor opção para médicos?",
    excerpt: "Entenda as diferenças tributárias entre atuar como Pessoa Física e Pessoa Jurídica e saiba como economizar até 60% em impostos.",
    date: "15 Out 2023",
    author: "Dra. Ana Silva",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-217358c7e618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "carne-leao-ou-pj-para-medicos",
    content:
      "Ao iniciar a atividade médica, surge a dúvida: atuar como Pessoa Física no Carnê-Leão ou abrir um CNPJ (PJ)? Em geral, o regime como PJ permite uma carga tributária menor quando há faturamento recorrente e despesas dedutíveis, especialmente em regimes como o Simples Nacional ou o Lucro Presumido. Já o Carnê-Leão costuma ser mais oneroso conforme a renda aumenta.\n\nComo PJ, é possível planejar a tributação, organizar pró-labore e distribuição de lucros, além de ganhar acesso a benefícios como emissão de notas fiscais e contratação de equipe. Por outro lado, atuar como PF pode ser adequado para rendimentos eventuais e valores menores, exigindo menos estrutura.\n\nA melhor escolha depende do volume de receitas, do tipo de prestação de serviços e da possibilidade de deduções. Uma análise personalizada indica o regime ideal para pagar menos impostos com segurança.",
  },
  {
    title: "5 erros financeiros que médicos cometem",
    excerpt: "Misturar finanças pessoais com as do consultório é apenas um deles. Descubra como evitar armadilhas que prejudicam seu patrimônio.",
    date: "22 Set 2023",
    author: "Carlos Mendes",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "erros-financeiros-medicos",
    content:
      "Entre os erros mais comuns estão a falta de separação entre contas pessoais e do consultório, ausência de reserva de impostos, inexistência de fluxo de caixa, contratação inadequada do regime tributário e não emissão de notas. Com organização e apoio contábil, é possível corrigir rapidamente.",
  },
  {
    title: "A importância do BPO Financeiro para clínicas",
    excerpt: "Terceirizar o financeiro pode ser a chave para ter mais tempo e previsibilidade de caixa. Veja como funciona na prática.",
    date: "10 Ago 2023",
    author: "Mariana Costa",
    imageUrl: "https://images.unsplash.com/photo-1554224155-9840635290aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    slug: "bpo-financeiro-para-clinicas",
    content:
      "O BPO Financeiro organiza entradas, saídas, conciliações, relatórios e indicadores. Com processos claros, a clínica ganha previsibilidade e decisões mais seguras. É um aliado estratégico do gestor e do contador.",
  },
];
