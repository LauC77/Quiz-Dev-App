const dataQuiz = [
  {
    question: "¿Qué es un lenguaje de programación?",
    a: "Un conjunto de instrucciones que le indican a la computadora qué hacer.",
    b: "Un dispositivo físico utilizado para escribir código.",
    c: "Una persona que escribe código.",
    d: "Un tipo de software para diseñar interfaces gráficas",
    correct: "a"
  },
  {
    question: "¿Qué es un bucle en programación?",
    a: "Un error en el código que impide que se ejecute correctamente.",
    b: "Una estructura de control que permite repetir un bloque de código.",
    c: "Un tipo de variable que almacena múltiples valores.",
    d: "Una función especial utilizada para realizar cálculos matemáticos.",
    correct: "b",
  },
  {
    question: "¿Cuál de los siguientes es un tipo de dato primitivo en programación?",
    a: "Cadena de caracteres (String).",
    b: "Matriz (Array).",
    c: "Objeto (Object).",
    d: "Función (Function).",
    correct: "a",
  },

  {
    question: "¿Qué es un algoritmo?",
    a: "Un error en el código que produce un resultado incorrecto.",
    b: "Un conjunto de instrucciones paso a paso para resolver un problema.",
    c: "Un tipo de dato que almacena valores booleanos (verdadero o falso).",
    d: "Una función especial utilizada para mostrar resultados por pantalla.",
    correct: "b",
  },
  {
    question: `¿Qué significa el término "debugging" en programación?`,
    a: "El proceso de traducir código de alto nivel a código de bajo nivel.",
    b: "La práctica de escribir código de manera eficiente y elegante.",
    c: "La eliminación de errores o fallos en un programa.",
    d: "La ejecución de pruebas exhaustivas para asegurar la calidad del código.",
    correct: "c",
  },
  {
    question: "¿Qué es un IDE en programación?",
    a: "Un lenguaje de programación muy popular.",
    b: "Un tipo de bucle utilizado para iterar sobre una lista de elementos.",
    c: "Un entorno integrado que proporciona herramientas para desarrollar software.",
    d: "Una función especial utilizada para obtener la entrada del usuario.",
    correct: "c",
  },
]



const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const optionA =  document.getElementById('a_text')
const optionB =  document.getElementById('b_text')
const optionC =  document.getElementById('c_text')
const optionD =  document.getElementById('d_text')

const botonNext = document.querySelector(`.next`);
const question = document.querySelector(`.question__text`)


let indiceActual = 0;
let score = 0

loadQuiz();

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function loadQuiz() {

  deselectAnswers()

  const indiceActualData = dataQuiz[indiceActual]

  question.innerText = indiceActualData.question
  optionA.innerText = indiceActualData.a
  optionB.innerText = indiceActualData.b
  optionC.innerText = indiceActualData.c
  optionD.innerText = indiceActualData.d
}



function getSelected() {
  let answer

  answerEls.forEach(question => {
      if(question.checked) {
          answer = question.id
      }
  })

  return answer
}

botonNext.addEventListener('click', () => {
  const answer = getSelected()
  
  if(answer) {
      if(answer === dataQuiz[indiceActual].correct) {
          score++
      }

      indiceActual++

      if(indiceActual < dataQuiz.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
              <h2>You answered ${score}/${dataQuiz.length} questions correctly</h2>

              <button onclick="location.reload()">Reload</button>
          `
      }
  }
})