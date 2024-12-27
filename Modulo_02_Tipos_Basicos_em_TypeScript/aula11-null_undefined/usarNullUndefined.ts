/**
 * Null -> Usado para denotar uma ausência intencional de valor
 *      -> Variável cujo valor é indefinido
 *      -> Só aceita um valor
 *      -> É um objeto
 *
 * Undefined -> Variáveis não inicializadas em TS
 *           -> Tem apenas um valor
 *           -> Função que não retorna um valor, retorna undefined
 *           -> Tipo Indefinido no TS
 *           -> Indica a ausência da própria variável
 */
/* Null: Ausência do valor para a variável */
let carro = null
console.log(carro)
console.log(typeof carro) // object
console.log('-')

/* Undefined: 'Ausência' da variável */
const bicicleta = undefined
console.log(bicicleta)
console.log(typeof bicicleta) // undefined
console.log('-')

let movel
console.log(movel)
console.log(typeof movel) // undefined
console.log('-')

/* Null vs Undefined */
console.log('Exemplo 01:', null == undefined) // == compara resultados
console.log('Exemplo 02:', null === undefined) // === compara o valor e o tipo
