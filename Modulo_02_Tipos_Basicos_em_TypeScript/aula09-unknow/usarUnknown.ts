/**
 * Usar o unknown ao invés do any
 * Unknown faz verificação de tipo, o any não faz!
 * Todos os tipos podem ser atribuídos ao tipo Unknown
 * 
 * Sintaxe:
 * let nomeVariavel: unknown = valor;
 */

/* Exemplo de uso do unknown, sem erro! */
let valorVariavel: unknown;

valorVariavel = true
console.log(valorVariavel)
valorVariavel = 19
console.log(valorVariavel)
valorVariavel = 'Diego'
valorVariavel = {}
valorVariavel = 21.67
console.log(valorVariavel)
valorVariavel = ['Diego', 'Regina']
console.log(valorVariavel)
console.log('-')

/* Com erros, devido à verificação de tipo da unknown */
// let valor: unknown
// let valor1: boolean = valor // Erro: Type 'unknown' is not assignable to type 'boolean'.
// let valor2: string = valor  // Erro: Type 'unknown' is not assignable to type 'string'.
// let valor3: any[] = valor   // Erro: Type 'unknown' is not assignable to type 'any[]'.
// console.log('-')

/* Diferença entre any e unknown */
let variavelAny: any
let variavelUnknown: unknown

// console.log(variavelAny.toFixed(2))     // Não existe a verificação, sem erro
// console.log(variavelUnknown.toFixed(2)) // Erro pois o toFixed() precisa ser utilizando em um number

console.log(variavelAny.toFixed(2))
// Corrigindo o erro acima
if (typeof variavelUnknown === 'number') {
  console.log(variavelUnknown.toFixed(2))
}

// Assistir a aula 26