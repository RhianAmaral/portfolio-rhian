# Portfólio — Rhian Amaral

Portfólio pessoal desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion.

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar e visualizar a versão de produção:

```bash
npm run build
npm run preview
```

## Personalização

Edite os arquivos em `src/data/`:

- `profile.ts` — informações pessoais, apresentação e objetivos.
- `technologies.ts` — tecnologias.
- `projects.ts` — projetos.
- `education.ts` — formação.
- `links.ts` — redes sociais e contatos. Substitua os placeholders pelos dados reais.

Para adicionar um projeto, inclua um objeto em `src/data/projects.ts`:

```ts
{
  title: "Nome do projeto",
  description: "Descrição breve",
  technologies: ["React", "Node"],
  image: "/caminho/da/imagem.png", // opcional
  github: "https://github.com/...",
  demo: "https://...", // opcional
}
```

## Foto

Substitua `src/assets/rhian-photo.jpg` ou atualize o import em `src/sections/Hero.tsx`.

## Estrutura

```text
src/
├── components/  # Componentes reutilizáveis
├── sections/    # Seções da página
├── data/        # Informações editáveis
├── hooks/       # Hooks utilitários
└── index.css    # Estilos globais
```

## Formulário de contato

O formulário abre o cliente de e-mail com os dados preenchidos via `mailto:`. Para integrar um serviço de envio, edite `handleSubmit` em `src/sections/Contact.tsx`.

As animações usam Framer Motion, e a preferência `prefers-reduced-motion` é respeitada.
