const enderecos = [
    { cep: 51904929, rua: "Rua dos Artistas" },
    { cep: 50987465, rua: "Rua Augusta" },
    { cep: 23456789, rua: "Avenida Paralela" },
    { cep: 23487567, rua: "Rua Carlos Gomes" }
  ];


  const localizarEndereco = (cep) => {
        const enderecoEncontrado = enderecos.find((endereco) => {
            return endereco.cep === cep
        })
        console.log(enderecoEncontrado.rua)
  }

  localizarEndereco(23456789)