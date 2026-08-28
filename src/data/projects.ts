export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  placeholder?: boolean;
}

// Adicione novos projetos incluindo um objeto neste array.
export const projects: Project[] = [
  {
    title: 'Aluga Jogos',
    description: 'Projeto de aluguel de jogos, desenvolvido como prática de estruturação e estilização de páginas web.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/RhianAmaral/alugarjogos',
  },
  {
    title: 'Sorteador de Números',
    description: 'Aplicação para sorteio de números, desenvolvida como exercício de lógica de programação e interface web.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RhianAmaral/sorteador-de-numeros',
  },
  {
    title: 'Banco Java',
    description: 'Sistema bancário simples desenvolvido em Java, aplicando lógica de programação e orientação a objetos.',
    technologies: ['Java'],
    github: 'https://github.com/RhianAmaral/banco-java',
  },
];
