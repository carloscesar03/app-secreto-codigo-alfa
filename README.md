# Código Alfa - Landing Page

Esta é a landing page de vendas do produto **Código Alfa**. O projeto foi construído utilizando React e Tailwind CSS, otimizado para alta conversão e carregamento rápido.

## 🚀 Como colocar no ar (Vercel + GitHub)

Como este projeto usa importações ES Modules via CDN (esm.sh), ele não precisa de um processo de "Build" complexo (npm run build). Ele funciona nativamente no navegador.

### Passo 1: GitHub
1. Crie um novo repositório no GitHub.
2. Faça o upload de **todos** os arquivos deste projeto para lá.

### Passo 2: Vercel
1. Crie uma conta na [Vercel](https://vercel.com).
2. Clique em **"Add New..."** -> **"Project"**.
3. Selecione o repositório do GitHub que você acabou de criar.
4. **Configuração de Build (Importante):**
   - Framework Preset: **Other** (ou deixe vazio se ele detectar HTML).
   - Build Command: Deixe vazio.
   - Output Directory: Deixe vazio (ou `.` se pedir).
5. Clique em **Deploy**.

## 🛠 Estrutura do Projeto

- `index.html`: Arquivo principal. Contém o Pixel do Facebook e configurações de importação.
- `App.tsx`: Componente raiz que organiza as seções da página.
- `components/`: Pasta contendo todas as seções da página (Hero, Benefícios, Prova Social, Preço, etc).
- `vercel.json`: Arquivo de configuração para garantir que a Vercel sirva o site corretamente.

## 📈 Pixel e Rastreamento

O Pixel do Facebook já está instalado no `<head>` do arquivo `index.html` com o ID `869387576093655`.

## 🎨 Design

- **Estilo:** Minimalista / Dark Mode & High Contrast.
- **Cor de Conversão:** Laranja (`#f97316`).
- **Fonte:** Montserrat (Google Fonts).
