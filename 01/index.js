const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "A Divina Comédia";

const posicaoLivro = (livros) => {
    const posicao = livros.findIndex((livro) => {
        return livro === nomeDoLivro
    })
    const resultado = posicao !== -1 ? `O livro está na posição ${posicao + 1}` : "Livro não encontrado!"
    console.log(resultado)
}
posicaoLivro(livros);

