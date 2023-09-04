const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];


const modificandoArray = (frutas) => {

    const novoArray = frutas.map((fruta, indice) => {
        return `${indice} - ${fruta[0].toUpperCase()}${fruta.slice(1).toLowerCase()}`
        
    })
    console.log(novoArray)

}
modificandoArray(frutas)