# Código Alfa - Landing Page

Esta é a landing page de vendas do produto **Código Alfa**.

## 🚨 SOLUÇÃO DE ERROS NO DEPLOY (VERCEL)

Se você ver o erro `No Output Directory named "public" found`, siga estes passos:

1. Vá no painel da **Vercel** > **Settings** (do seu projeto) > **Build & Development**.
2. No campo **Framework Preset**, selecione **Vite**.
3. Verifique se o **Output Directory** mudou automaticamente para `dist`.
   - Se não, clique em "Override" e digite: `dist`
4. Vá na aba **Deployments** e clique em **Redeploy** no último commit.

## 🚀 Como colocar no ar

1. Faça o upload dos arquivos para o GitHub.
2. Conecte na Vercel.
3. Se a Vercel não detectar automaticamente:
   - **Build Command:** `vite build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

## 🛠 Estrutura

- `index.html`: Ponto de entrada (sem importmap, usando Vite).
- `index.tsx`: Renderização do React.
- `vite.config.ts`: Configuração do bundler.
