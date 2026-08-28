export type TechLevel = 'Em aprendizado' | 'Conhecimento' | 'Em desenvolvimento' | 'Familiaridade';

export interface Technology {
  name: string;
  level: TechLevel;
  description: string;
  category: 'principal' | 'complementar';
}

// Para adicionar uma nova tecnologia, basta incluir um novo objeto no array abaixo.
export const technologies: Technology[] = [
  {
    name: 'Java',
    level: 'Em desenvolvimento',
    description: 'Foco atual de estudo, aplicado em lógica de programação e orientação a objetos.',
    category: 'principal',
  },
  {
    name: 'C',
    level: 'Em desenvolvimento',
    description: 'Base para entender estrutura de dados, memória e fundamentos da programação.',
    category: 'principal',
  },
  {
    name: 'C++',
    level: 'Em desenvolvimento',
    description: 'Aprofundamento em orientação a objetos e estruturas mais complexas.',
    category: 'principal',
  },
  {
    name: 'Kotlin',
    level: 'Em aprendizado',
    description: 'Estudo voltado ao desenvolvimento moderno orientado a objetos.',
    category: 'principal',
  },
  {
    name: 'Python',
    level: 'Conhecimento',
    description: 'Conhecimento complementar para lógica e automação de tarefas.',
    category: 'complementar',
  },
  {
    name: 'JavaScript',
    level: 'Conhecimento',
    description: 'Noções aplicadas ao desenvolvimento web.',
    category: 'complementar',
  },
  {
    name: 'HTML',
    level: 'Familiaridade',
    description: 'Estruturação semântica de páginas web.',
    category: 'complementar',
  },
  {
    name: 'CSS',
    level: 'Familiaridade',
    description: 'Estilização e layout de interfaces web.',
    category: 'complementar',
  },
];
