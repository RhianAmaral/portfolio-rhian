# Portfólio — Rhian Amaral

Portfólio pessoal desenvolvido em **React + TypeScript + Tailwind CSS**, com animações em **Framer Motion**.

## Como executar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Onde editar cada informação

Todos os dados pessoais ficam centralizados em `src/data/`:

- `profile.ts` — nome, cargo, texto do "Sobre mim", objetivos, mensagem do rodapé.
- `technologies.ts` — lista de tecnologias (principais e complementares).
- `projects.ts` — lista de projetos. Basta adicionar um novo objeto ao array para incluir um projeto:
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
- `education.ts` — itens da timeline de formação.
- `links.ts` — LinkedIn, GitHub, e-mail e WhatsApp. Substitua os placeholders (`[LINKEDIN]`, `[GITHUB]`, `[EMAIL]`, `[WHATSAPP]`) pelos links/contatos reais.

## Onde trocar a foto

A foto usada no Hero fica em `src/assets/rhian-photo.jpg`. Para trocá-la, substitua o arquivo mantendo o mesmo nome (ou atualize o import em `src/sections/Hero.tsx`).

## Estrutura do projeto

```
src/
├── components/   → componentes reutilizáveis (Navbar, Button, Cards, Timeline, Footer...)
├── sections/     → seções da página (Hero, Sobre, Tecnologias, Projetos, Formação, Objetivos, Contato)
├── data/         → dados editáveis (perfil, tecnologias, projetos, formação, links)
├── hooks/        → hooks utilitários (seção ativa no scroll, prefers-reduced-motion)
└── index.css     → estilos globais, fontes e regras de acessibilidade
```

## Stack e decisões técnicas

- **React + TypeScript + Vite**: build rápido e tipagem segura.
- **Tailwind CSS**: tokens de cor/tipografia centralizados em `tailwind.config.js`.
- **Framer Motion**: única biblioteca de animação usada (entradas suaves, scroll reveal, microinterações em hover), escolhida por bom equilíbrio entre qualidade e peso.
- `prefers-reduced-motion` é respeitado automaticamente (via `MotionConfig` no `App.tsx` e regra global no CSS).

## Formulário de contato

Não há backend configurado. Ao enviar, o formulário abre o cliente de e-mail do usuário com os dados preenchidos (via `mailto:`). Para integrar um envio real (ex: Formspree, EmailJS ou uma API própria), edite a função `handleSubmit` em `src/sections/Contact.tsx`.

## Adicionando projetos e tecnologias no futuro

Basta editar os arrays em `src/data/projects.ts` e `src/data/technologies.ts` — os componentes já estão preparados para renderizar qualquer quantidade de itens automaticamente.
