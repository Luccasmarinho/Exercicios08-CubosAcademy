const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const ateOitoCaracteres = cidades.filter((cidade) => {
    return cidade.length <= 8
});
const arrayFormatado = ateOitoCaracteres.join(", ")
console.log(arrayFormatado)