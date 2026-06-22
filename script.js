const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "Qual é a capital do Brasil?",
      alternativas: ["Rio de Janeiro", "Brasília"],
    },
    {
      enunciado: "Quantos continentes existem no mundo?",
      alternativas: ["7", "5"],
    },
    {
        enunciado: "Qual planeta é conhecido como o Planeta Vermelho?",
        alternativas: ["Marte", "Vênus"],
      },
      {
        enunciado: "Qual é o maior oceano da Terra?",
        alternativas: ["Oceano Atlântico", "Oceano Pacífico"],
      },
      {
        enunciado: "Quem escreveu o livro Dom Casmurro?",
        alternativas: ["Machado de Assis", "José de Alencar"],
      }
  ];