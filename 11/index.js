const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
    "amaral",
    "Ana"
  ];

  const filtrandoNomePorLetra = nomes.filter((nome) => {
    return nome[0] === "a" || nome[0] === "A"
  })

  console.log(filtrandoNomePorLetra);