import centralItLogo from '../img/central_it.jpeg';

export interface ExperienceItem {
  id: number;
  company: string;
  companyUrl: string;
  logo: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Central IT - Tecnologia em Negócios',
    companyUrl: 'https://www.centralit.com.br',
    logo: centralItLogo,
    role: 'Desenvolvedor de Software',
    type: 'Tempo integral',
    period: 'mar de 2024 – o momento · 2 anos 3 meses',
    location: 'Distrito Federal, Brasil · Remota',
    description: [
      'Desenvolvimento e personalização de formulários utilizando AngularJS, Angular e Bootstrap, atendendo empresas públicas e privadas com ambientes de grande escala (mais de 50.000 usuários)',
      'Atuação com a plataforma CITSmart (CIT 9 e CIT X), realizando customizações avançadas e desenvolvimento de novas funcionalidades',
      'Criação e manutenção de APIs REST para integração entre sistemas internos e externos',
      'Desenvolvimento de novas filas de atendimento (tickets) com uso de requisições nativas, incluindo construção de interfaces completas (front-end e regras de negócio)',
      'Modelagem e implementação de formulários dinâmicos (low-code), com foco em usabilidade e performance',
      'Elaboração de consultas SQL avançadas para extração, análise e tratamento de dados, incluindo criação de filtros personalizados e relatórios gerenciais',
      'Integração com sistemas legados, WebServices (SOAP/REST) e bancos de dados diversos',
      'Criação e otimização de fluxos de trabalho (workflows) voltados para gestão de chamados, incidentes, mudanças e requisições',
      'Manutenção evolutiva e corretiva de aplicações legadas, com foco em melhoria de desempenho e escalabilidade',
      'Geração de relatórios analíticos e dashboards para suporte à tomada de decisão, com foco em indicadores como volume de tickets, SLA, fluxos e comportamento de usuários',
      'Desenvolvimento de componentes reutilizáveis para formulários low-code, garantindo padronização, escalabilidade e melhor experiência para usuários finais',
      'Participação ativa na definição de soluções técnicas junto ao time de produto, contribuindo para evolução contínua da plataforma',
    ],
  },
];

export default experiences;
