// Array de perguntas e respostas
const questions = [
  {
    question: "Qual foi o evento que marcou o início da Segunda Guerra Mundial?",
    options: ["Ataque a Pearl Harbor", "Invasão da Polônia", "Batalha de Stalingrado"],
    answer: 1
  },
  {
    question: "Quem era o líder da Alemanha durante a Segunda Guerra Mundial?",
    options: ["Benito Mussolini", "Joseph Stalin", "Adolf Hitler"],
    answer: 2
  },
  {
    question: "Qual foi o ano em que a Segunda Guerra Mundial terminou?",
    options: ["1943", "1945", "1947"],
    answer: 1
  },
  {
    question: "Qual país não foi membro do Eixo?",
    options: ["Itália", "União Soviética", "Japão"],
    answer: 1
  },
  {
    question: "O que foi o Dia D?",
    options: ["O dia em que a Alemanha invadiu a Polônia", "O dia em que os Aliados desembarcaram na Normandia", "O dia em que a bomba atômica foi lançada em Hiroshima"],
    answer: 1
  },
  {
    question: "Qual batalha foi um ponto de virada para os Aliados no teatro do Pacífico?",
    options: ["Batalha de Midway", "Batalha de Stalingrado", "Batalha de Guadalcanal"],
    answer: 0
  }
];

// Variáveis para controle do quiz
let currentQuestion = 0;
let score = 0;

// Função para mostrar a pergunta atual
function displayQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const question = questions[currentQuestion];

  questionElement.textContent = question.question;
  optionsElement.innerHTML = '';

  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option');
    button.setAttribute('data-index', index);
    button.addEventListener('click', selectOption);
    optionsElement.appendChild(button);
  });
}

// Função para verificar a resposta selecionada
function selectOption(event) {
  const selectedOption = event.target;
  const selectedAnswerIndex = parseInt(selectedOption.getAttribute('data-index'));
  const question = questions[currentQuestion];

  if (selectedAnswerIndex === question.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

// Função para mostrar o resultado final
function showResult() {
  const resultElement = document.getElementById('result');
  const name = document.getElementById('name').value;
  resultElement.innerHTML = `<p>${name}, você acertou ${score} de ${questions.length} perguntas.</p>`;
}

// Iniciar o quiz
displayQuestion();
