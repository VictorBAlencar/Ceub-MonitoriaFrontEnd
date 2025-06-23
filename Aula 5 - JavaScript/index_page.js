// TIPOS DE DADOS
let nome = "Lucas";           // String
let idade = 20;               // Number
let ativo = true;             // Boolean
let indefinido;               // undefined
let vazio = null;             // null

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Ativo:", ativo);
console.log("Indefinido:", indefinido);
console.log("Vazio:", vazio);

// VARIÁVEIS
var mensagemAntiga = "Olá com var";
let novaMensagem = "Olá com let";
const fixa = "Constante";

console.log(mensagemAntiga, novaMensagem, fixa);

// DOM - Selecionando elementos

// getElementById => retorna UM elemento com ID exato
const titulo = document.getElementById("titulo");

// querySelector => retorna o PRIMEIRO elemento que bate com o seletor CSS
const paragrafo = document.querySelector("#paragrafo");
const mensagem = document.querySelector(".mensagem");
const botao = document.querySelector("#botao");
const entrada = document.querySelector("#entradaTexto");

// innerText => altera apenas o texto (sem tags HTML)
titulo.innerText = "Título alterado com innerText";

// innerHTML => pode conter tags HTML
paragrafo.innerHTML = "<strong>Texto em negrito</strong>";

botao.addEventListener("click", () => {
    // value => obtém o valor de input
    const textoDigitado = entrada.value;

    if (textoDigitado.trim() === "") {
        mensagem.innerText = "Digite algo antes de clicar!";
        alert("Por favor, preencha o campo de texto.");
    } else {
        mensagem.innerHTML = `Você digitou: <em>${textoDigitado}</em>`;
    }
});

// Modo escuro
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
});
