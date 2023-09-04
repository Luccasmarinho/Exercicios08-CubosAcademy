const numeros = [0, 122, 4, 6, 7, 8, 44];

const numeroPar = numeros.every((numero) => {
    return numero % 2 === 0
});

const resultado = numeroPar ? "array válido" : "array inválido"
console.log(resultado)