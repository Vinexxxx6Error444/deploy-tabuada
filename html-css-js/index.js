
const tabuadaForm = document.getElementById("tabuada-form");
const numeroInput = document.getElementById("numero-input");
const resultadoDiv = document.getElementById("resultado");

tabuadaForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!numeroInput.reportValidity()) {
        return;
    }

    const numero = numeroInput.valueAsNumber;
    const titulo = document.createElement("h2");
    const tabela = document.createElement("table");
    const cabecalho = document.createElement("thead");
    const corpo = document.createElement("tbody");

    titulo.textContent = `Tabuada do ${numero}`;
    cabecalho.innerHTML = "<tr><th scope=\"col\">Nº</th><th scope=\"col\">Conta</th><th scope=\"col\">Resultado</th></tr>";

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const linha = document.createElement("tr");
        const indice = document.createElement("td");
        const conta = document.createElement("td");
        const produto = document.createElement("td");

        indice.textContent = String(multiplicador).padStart(2, "0");
        conta.textContent = `${numero} × ${multiplicador}`;
        produto.textContent = String(numero * multiplicador);
        linha.append(indice, conta, produto);
        corpo.append(linha);
    }

    tabela.append(cabecalho, corpo);
    resultadoDiv.replaceChildren(titulo, tabela);
});
