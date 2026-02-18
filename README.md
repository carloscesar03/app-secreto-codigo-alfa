# Código Alfa - Landing Page

Esta é a landing page de vendas do produto **Código Alfa**. O projeto utiliza React, Vite e Tailwind CSS.

## 🚀 Como colocar no ar (Vercel + GitHub)

O projeto está configurado com **Vite**, o que significa que a Vercel vai reconhecê-lo automaticamente como um projeto React moderno.

### Passo 1: GitHub
1. Faça o upload de **todos** os arquivos novos para o seu repositório (incluindo `vite.config.ts`, `tsconfig.json` e o novo `package.json`).

### Passo 2: Vercel
1. Na Vercel, importe o projeto do GitHub.
2. **Framework Preset:** A Vercel deve detectar **Vite** automaticamente.
   - Se não detectar, selecione **Vite** na lista.
3. **Build Command:** `vite build` (Automático)
4. **Output Directory:** `dist` (Automático)
5. Clique em **Deploy**.

## 🛠 Estrutura

- `index.html`: Ponto de entrada.
- `index.tsx`: Renderização do React.
- `vite.config.ts`: Configuração do bundler.
