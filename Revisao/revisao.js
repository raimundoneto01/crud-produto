
// splice    remove ou substitui  o valor dentro do array
const animais = [ 'vaca','cachorro', 'gato', 'pato','vaca' ]

// animais.splice(1, 0, 'bezerro')
// console.log(animais);

// animais.splice(2, 0, 'ovelha', 'gado', 'cabrito')
// console.log(animais);

//  find  ...... busca o primeiro valor encontrado

// const animaisFind = animais.find((animal)=> animal === "vaca")

// console.log(animaisFind);



    // filter   busca todos os objetos do array e retorna em array....
// const animalFilter= animais.filter((animal)=> animal === 'vaca')
// console.log(animalFilter);

const produto = [
    {
        nome: 'bola fultebol',
        categoria: 'esporte',
    },
    {
        nome: 'padalada',
        categoria: 'esporte',
    },
    {
        nome: 'skate',
        categoria: 'esporte',
    },
    {
        nome: 'milk shake',
        categoria: 'culinaria',
    },
]
// const produtoFiltro = produto.filter((produto) => produto.categoria === 'esporte' || produto.categoria === 'culinaria')
// console.log(produtoFiltro);

//  includes... busca dentro do array o valor pesquisado....
const produ = produto.filter(({nome})=> nome.toLocaleLowerCase().includes('a'))
console.log(produ);



// reduce().....
