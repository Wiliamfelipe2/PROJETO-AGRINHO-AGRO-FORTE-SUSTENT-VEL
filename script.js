// =========================
// MODO ESCURO
// =========================

const botaoModo = document.getElementById("modo");

if (botaoModo) {
    botaoModo.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

// =========================
// QUIZ
// =========================

function corrigirQuiz() {

    let pontos = 0;
    let respondidas = 0;

    const respostasCorretas = {
    q1: "a",
    q2: "a",
    q3: "a",
    q4: "a",
    q5: "a",
    q6: "a",
    q7: "a",
    q8: "a",
    q9: "a",
    q10: "a"
};

    for (let i = 1; i <= 10; i++) {

        const respostaSelecionada =
            document.querySelector(`input[name="q${i}"]:checked`);

        if (respostaSelecionada) {

            respondidas++;

            if (respostaSelecionada.value === "c") {
                pontos++;
            }
        }
    }

    let mensagem = "";

    if (pontos <= 4) {

        mensagem =
            "🥉 Você está começando sua jornada sustentável!";

    } else if (pontos <= 7) {

        mensagem =
            "🥈 Muito bem! Você já conhece várias práticas sustentáveis!";

    } else {

        mensagem =
            "🥇 Parabéns! Você é um Guardião da Sustentabilidade!";
    }

    document.getElementById("resultado").innerHTML =

        `<strong>Resultado:</strong><br><br>
        Você respondeu ${respondidas} de 10 questões.<br>
        Você acertou <strong>${pontos}</strong> de 10 questões.<br><br>
        ${mensagem}`;
}
