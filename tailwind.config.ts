import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        button: "2rem", // Exemplo de tamanho de padding para botões
        input: "2rem",
      },
      borderRadius: {
        button: "0.5rem",
        input: "0.5rem",
      },
      // Se você quiser definir uma largura ou altura específica para os botões
      width: {
        button: "200px", // Exemplo de largura para botões
        input: "300px",
      },
      height: {
        button: "50px", // Exemplo de altura para botões
        input: "30px",
      },
      colors: {
        // Definindo cores personalizadas
        buttonBlue: "#007bff", // Substitua pelo seu código de cor azul
        buttonRed: "#dc3545", // Substitua pelo seu código de cor vermelho
        buttonGreen: "#28a745", // Substitua pelo seu código de cor verde
        buttonWhite: "#0000ff", // Substitua pelo seu código de cor verde
        inputWhite: "#0000ff",
      },
      fontSize: {
        // Tamanhos de fonte para botões
        button: "1rem", // Exemplo de tamanho, ajuste conforme necessário
        input: "1rem",
      },
      fontWeight: {
        // Peso da fonte para botões
        button: "bold", // 'bold' é um valor válido para fontWeight
        input: "semi-bold",
      },
      backgroundColor: {
        // Definindo as cores de fundo dos botões
        "action-blue": "#007bff", // Use as cores definidas acima
        "action-red": "#dc3545",
        "action-green": "#28a745",
        "action-white": "#ffffff",
      },
      textColor: {
        // Definindo a cor do texto dos botões
        button: "#ffffff", // Cor branca para o texto dos botões
        input: "#ffffff",
      },
    },
    buttonColorWhite: {
      " background-color": "black",
    },
  },
  plugins: [],
};
export default config;
