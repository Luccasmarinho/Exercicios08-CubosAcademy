const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "programador",
    },
  ];

  const filtrandoProgramadores = pessoas.filter((pessoa) => {
    return pessoa.profissao.toLocaleLowerCase() === "programador" && pessoa.idade > 20
  })
  console.log(filtrandoProgramadores);


  const filtrandoJornalistas = pessoas.filter((pessoa) => {
    return pessoa.profissao.toLocaleLowerCase() === "jornalista" && pessoa.idade > 30
  })
  console.log(filtrandoJornalistas);


  const filtrandoJornalistasEProgramadores = pessoas.filter((pessoa) => {
    return (pessoa.profissao.toLocaleLowerCase() === "jornalista" && pessoa.idade <= 29) || (pessoa.profissao.toLocaleLowerCase() === "programador" && pessoa.idade <= 29)
  })
  console.log(filtrandoJornalistasEProgramadores);

