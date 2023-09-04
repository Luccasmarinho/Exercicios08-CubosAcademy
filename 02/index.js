const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const contemPalavraInvalida = palavras.some((palavra) => {
    return palavra.length > 5
})
const resultado = contemPalavraInvalida ? "Existe palavra inválida" : "Array validado"
console.log(resultado)