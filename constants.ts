import { ExperienceItem, EducationItem, CourseItem, SkillCategory, ProjectItem } from './types';

export const PERSONAL_INFO = {
  name: "ANDERSON WILLIAM",
  role: "Diretor de Arte e Inteligência Artificial",
  location: "Novo Hamburgo - RS",
  email: "slavedreamers@gmail.com",
  objective: "Busco oportunidades de trabalho nas áreas de design gráfico, social media e motion design, com foco no desenvolvimento de habilidades técnicas e pessoais, especialmente na criação.",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: "2025",
    company: "Otimize - Marketing Digital",
    description: ["Atuei como freelancer para a agência desenvolvendo materiais digitais e alguns vídeos."]
  },
  {
    year: "2024",
    company: "G3 - Comunicação",
    description: ["Atuei como freelancer para a agência desenvolvendo materiais off/online."]
  },
  {
    year: "2022 - 2023",
    company: "Sculpt e Agência Comversa",
    description: ["Atuei como freelancer para essas duas agências desenvolvendo materiais off/online."]
  },
  {
    year: "2020 - 2022",
    company: "Federasul",
    role: "Aux/Marketing",
    description: [
      "Produção de material gráfico para redes sociais e e-mail marketing.",
      "Auxiliei com a curadoria de conteúdo, campanhas e ações de marketing.",
      "Auxiliei na impressão e produção de materiais diversos.",
      "Acompanhamentos dos eventos anuais."
    ]
  },
  {
    year: "2019 - 2020",
    company: "Agência Tátum",
    role: "Diretor de Arte",
    description: [
      "Responsável pelo desenvolvimento de layouts, campanhas, criação de e-mail marketing e finalizações de arquivos."
    ]
  },
  {
    year: "2015",
    company: "Plus Marketing",
    role: "Ax de Arte",
    description: [
      "Auxiliar na criação de materiais gráficos: flyers, folders.",
      "Elaboração de conceitos visuais e projetos gráficos de informação impressa.",
      "Criação de artes de comunicação visual online e offline."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  { year: "2014 - 2016", institution: "ULBRA CANOAS", course: "Design" },
  { year: "2013", institution: "SENAC-NH", course: "Design Gráfico" }
];

export const COURSES: CourseItem[] = [
  { name: "Nexus - IA aplicada ao design", year: "2025" },
  { name: "Ciêntista do Marketing", provider: "v4 Company", year: "2023" },
  { name: "Photoshop Avançado", provider: "Lucas Rosa", year: "2022" },
  { name: "Fundamentos do Design Visual", year: "2020" },
  { name: "ID CLASS - Curso de Identidade Visual", year: "2019" }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Design",
    skills: ["Illustrator (Avançado)", "Photoshop (Avançado)", "Figma (Básico)"]
  },
  {
    title: "Vídeos",
    skills: ["Premiere (Básico)", "After Effects (Intermediário)", "Capcut (Intermediário)"]
  },
  {
    title: "Inteligência Artificial",
    skills: ["LLMs: Chat GPT, Gemini, Claude, Manus (Avançado)", "Imagens: MidJourney, Nano (Avançado)", "Vídeos: Gemini/VO3 (Básico)"]
  }
];

// Placeholder portfolio items to simulate Behance feed
export const PORTFOLIO_ITEMS: ProjectItem[] = [
  { id: 1, title: "Identidade Visual Corporativa", category: "Branding", imageUrl: "https://picsum.photos/600/600?random=1" },
  { id: 2, title: "Social Media Campaign", category: "Marketing", imageUrl: "https://picsum.photos/600/800?random=2" },
  { id: 3, title: "Motion Graphics Reel", category: "Video", imageUrl: "https://picsum.photos/600/400?random=3" },
  { id: 4, title: "Editorial Layout", category: "Print", imageUrl: "https://picsum.photos/600/600?random=4" },
  { id: 5, title: "Event Promo Materials", category: "Advertising", imageUrl: "https://picsum.photos/600/500?random=5" },
  { id: 6, title: "UI Experimentation", category: "Web Design", imageUrl: "https://picsum.photos/600/700?random=6" }
];