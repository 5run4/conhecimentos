
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual é a capital do Brasil?",
    alternativas: [
      {
        texto: "Rio de Janeiro",
        correta: false,
        afirmacao: "Errado"
      },
      {
        texto: "Brasília",
        correta: true,
        afirmacao: "Correto"
      }
    ]
  },
  {
    enunciado: "Quantos continentes existem no mundo?",
    alternativas: [
      {
        texto: "7",
        correta: true,
        afirmacao: "Correto"
      },
      {
        texto: "5",
        correta: false,
        afirmacao: "Errado"
      }
    ]
  },
  {
    enunciado: "Qual planeta é conhecido como o Planeta Vermelho?",
    alternativas: [
      {
        texto: "Marte",
        correta: true,
        afirmacao: "Correto"
      },
      {
        texto: "Vênus",
        correta: false,
        afirmacao: "Errado"
      }
    ]
  },
  {
    enunciado: "Qual é o maior oceano da Terra?",
    alternativas: [
      {
        texto: "Oceano Atlântico",
        correta: false,
        afirmacao: "Errado"
      },
      {
        texto: "Oceano Pacífico",
        correta: true,
        afirmacao: "Correto"
      }
    ]
  },
  {
    enunciado: "Quem escreveu o livro Dom Casmurro?",
    alternativas: [
      {
        texto: "Machado de Assis",
        correta: true,
        afirmacao: "Correto"
      },
      {
        texto: "José de Alencar",
        correta: false,
        afirmacao: "Errado"
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");

    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", () =>
      respostaSelecionada(alternativa)
    );

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {

  console.log(
      "A alternativa selecionada é correta?",
      opcaoSelecionada.correta
  );

  if (opcaoSelecionada.correta) {
      historiaFinal += `
          <div class="resultado-item resultado-certo">
              ✓ Certo! ${opcaoSelecionada.afirmacao}
          </div>
      `;
  } else {
      historiaFinal += `
          <div class="resultado-item resultado-errado">
              ✗ Errado! ${opcaoSelecionada.afirmacao}
          </div>
      `;
  }

  atual++;

  mostraPergunta();
}

function mostraResultado() {

  caixaPerguntas.innerHTML = `
      <h2>🎉 Resultado do Quiz</h2>
  `;

  textoResultado.innerHTML = historiaFinal;

  caixaAlternativas.textContent = "";
}

mostraPergunta();

