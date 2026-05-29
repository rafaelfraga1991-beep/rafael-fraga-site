# Rafael Fraga — Site Pessoal

> **Mobile-first:** Este projeto foi construído com abordagem mobile-first.
> Sempre valide alterações primeiro no modo mobile antes de ajustar desktop.
> Breakpoints: **Mobile** ≤ 640px · **Tablet** 641px–1024px · **Desktop** > 1024px

Site executivo pessoal, bilíngue (PT/EN), responsivo e com tema escuro premium.

## Como rodar o projeto

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento (localhost)
npm run dev

# 3. Abrir no navegador
http://localhost:3000
```

Para gerar a versão de produção:
```bash
npm run build
npm start
```

---

## Como trocar textos

Todos os textos do site estão em um único arquivo:

**`src/data/content.js`**

- A chave `pt-BR` contém todos os textos em português
- A chave `en-US` contém todos os textos em inglês

Exemplo: para mudar o título da seção Hero, edite `hero.title` em ambas as línguas.

---

## Como adicionar imagens

1. Copie a imagem para a pasta `public/images/`
2. No arquivo `src/data/content.js`, na seção `portfolio.images`, adicione um novo item:

```js
{ src: '/images/nome-da-sua-imagem.jpg', alt: 'Descrição', caption: 'Legenda exibida' }
```

**Imagens necessárias** (colocar em `public/images/`):
- `profile-photo.jpg` — foto do perfil no Hero
- `keynote-01.jpg`, `keynote-02.jpg` — fotos para portfólio
- `product-launch-01.jpg`, `product-launch-02.jpg`
- `team-01.jpg`, `event-01.jpg`
- `project-backoffice-mpn.jpg`, `project-cloud-erp.jpg`, `project-saas-transformation.jpg`

---

## Como adicionar novos projetos

Em `src/data/content.js`, na seção `projects.items`, adicione um novo objeto seguindo o mesmo modelo:

```js
{
  title:    'Nome do Projeto',
  category: 'Categoria',
  year:     '2025',
  image:    '/images/nome-projeto.jpg',
  summary:  'Resumo curto exibido no card',
  results:  ['Resultado 1', 'Resultado 2', 'Resultado 3'],
  tags:     ['Tag 1', 'Tag 2'],
  modalBody: 'Descrição completa exibida no modal ao clicar no card.',
}
```

---

## Como alterar cores do tema

As cores principais estão definidas em dois lugares:

**`tailwind.config.js`** — adicione ou altere cores no objeto `colors`:
```js
'neon-green': '#00ff88',
'neon-blue':  '#00b4ff',
'neon-orange':'#ff6b35',
```

**`src/app/globals.css`** — variáveis CSS globais no bloco `:root`:
```css
--neon-green:  #00ff88;
--neon-blue:   #00b4ff;
--neon-orange: #ff6b35;
```

---

## Como publicar o site

### Opção 1 — Vercel (recomendado, gratuito)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte o repositório GitHub
3. Clique em **Deploy** — a Vercel detecta Next.js automaticamente

### Opção 2 — Export estático

```bash
# Em next.config.mjs, adicione:
output: 'export'

# Depois rode:
npm run build
# Os arquivos estarão em /out — faça upload para qualquer hospedagem estática
```
