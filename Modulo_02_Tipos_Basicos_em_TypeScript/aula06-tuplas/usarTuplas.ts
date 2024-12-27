/**
 * Tuplas são arrays de dados primitivos fixos
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html
 */

/* Primeiro exemplo */
let pessoaEmpresa: [string, string, number]
pessoaEmpresa = ['Diego Rodrigues', 'Arquiteto de Negócios', 42]
console.log(pessoaEmpresa)
console.log('-')

/* Acessando o valor da tupla */
console.log(pessoaEmpresa[0])
console.log(pessoaEmpresa[1])
console.log(pessoaEmpresa[2])
console.log('-')

/* Acessar o valor com labels (TypeScript) */
let pessoaEscola: [nome: string, cargo: string, idade: number] 
pessoaEscola = ['Regina Marcia', 'Diretora', 50]
console.log(pessoaEscola)
console.log('-')

/* Utilizar com Spread Operator */
let listaFrutas: [string, ...string[]] = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga']
console.log(...listaFrutas)
console.log('-')

/* Lista Heterogênea */
let frutasLoja: [number, boolean, ...string[]];
frutasLoja = [5, true, ...listaFrutas]
console.log(frutasLoja)
console.log('-')

/**
 * Uso de função com tuplas
 * 
 * No exemplo abaixo, os parâmetros da função são duas tuplas, uma 
 * chamada nomes e outra chamada idades
 */
function listarPessoas(nomes: string[], idades: number[]) {
  return [...nomes, ...idades]
}
let resultado = listarPessoas(['Diego', 'Regina'], [42, 50])
console.log(resultado)
console.log('-')

/* Labeled Tuples com Spread Operator numa função */
type Nome = | [primeiroNome: string, sobrenome: string]
            | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
  return [...nome]
}
console.log(criarPessoa('Diego', 'Mendes', 'Rodrigues'))
console.log(criarPessoa('Regina', 'Marcia'))
