import { links } from './links';

export interface EducationItem {
  title: string;
  institution: string;
  description?: string;
  status: 'Concluído' | 'Em andamento';
  link?: {
    text: string;
    href: string;
  };
}

export const education: EducationItem[] = [
  {
    title: 'Ensino Médio',
    institution: 'Colégio São Luiz Unidade 3',
    status: 'Concluído',
  },
  {
    title: 'Informática Básica',
    institution: 'SENAI São Paulo',
    description: 'Fundamentos de computadores, internet e pacote Microsoft Office.',
    status: 'Concluído',
  },
  {
    title: 'Formação Alura',
    institution: 'Alura',
    description:
      'Formações completas em programação, front-end, back-end e lógica de programação, com foco na prática e na construção de projetos.',
    status: 'Concluído',
    link: {
      text: 'Confira minhas certificações no LinkedIn.',
      href: links.linkedin,
    },
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'FATEC Zona Sul',
    description: 'Formação em andamento, com foco em lógica de programação e desenvolvimento de software.',
    status: 'Em andamento',
  },
];
