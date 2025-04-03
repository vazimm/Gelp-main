// Este código torna possível validar quizzes em qualquer página HTML que contenha um quiz.
// A ideia é que cada quiz esteja estruturado da seguinte forma:
//
// <div class="quiz">
//   <div class="question" data-correct="valorCorreto">
//     <p>Enunciado da questão</p>
//     <label>
//       <input type="radio" name="q1" value="opcao1" /> Opção 1
//     </label>
//     <label>
//       <input type="radio" name="q1" value="opcao2" /> Opção 2
//     </label>
//   </div>
//   ... outras questões ...
//   <button class="btn-submit">Enviar Quiz</button>
//   <!-- Opcional: container para mostrar o resultado -->
//   <div class="quiz-result"></div>
// </div>
//
// O código a seguir adiciona um listener de 'click' para cada botão de envio (btn-submit)
// e, ao acionar, verifica cada questão comparando a opção selecionada com o atributo "data-correct".

document.addEventListener('DOMContentLoaded', () => {
    const quizzes = document.querySelectorAll('.quiz');

    quizzes.forEach((quiz) => {
        const submitBtn = quiz.querySelector('.btn-submit');

        if (submitBtn) {
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                validarQuiz(quiz);
            });
        }
    });
});

function validarQuiz(quiz) {
    const questions = quiz.querySelectorAll('.question');
    let acertos = 0;

    questions.forEach((question) => {
        const valorCorreto = question.getAttribute('data-correct');
        const selecionado = question.querySelector('input[type="radio"]:checked');

        if (selecionado && selecionado.value === valorCorreto) {
            acertos++;
            // Adiciona classe para feedback visual (opcional)
            question.classList.add('correct');
            question.classList.remove('incorrect');
        } else {
            question.classList.add('incorrect');
            question.classList.remove('correct');
        }
    });

    const totalQuestoes = questions.length;
    exibirResultado(quiz, acertos, totalQuestoes);
}

function exibirResultado(quiz, acertos, totalQuestoes) {
    // Se houver um elemento para o resultado, atualiza seu conteúdo; caso contrário, utiliza um alert.
    const resultadoContainer = quiz.querySelector('.quiz-result');

    const mensagem = `Você acertou ${acertos} de ${totalQuestoes} questões.`;

    if (resultadoContainer) {
        resultadoContainer.textContent = mensagem;
    } else {
        alert(mensagem);
    }
}