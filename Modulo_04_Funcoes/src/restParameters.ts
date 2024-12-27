/**
 * Não restringe o número de valores
 * Devem ser todos do mesmo tipo
 * Espaços reservados para diversos valores do mesmo tipo
 * Nome do parâmetro é prefixidado com ...
 *
 * Sintaxe:
 * function nome(...rest:type[]) {
 *  // Lógica
 * }
 */
function somarNumeros(...numeros: number[]) {
  let total: number = 0
  numeros.forEach((numero) => (total += numero))
  return total
}
console.log(somarNumeros(21, 33))
console.log(somarNumeros(21, 33, 5, 11, 44))
console.log('-')

function nomeCompleto(...nomes: string[]) {
  let nomeCompleto: string = ''
  nomes.forEach((nome) => (nomeCompleto += nome + ' '))
  return nomeCompleto.substring(0, nomeCompleto.length - 1)
}
console.log(nomeCompleto('Diego', 'Rodrigues'))
console.log(nomeCompleto('Regina', 'Marcia', 'Ruiz', 'Mendes', 'Rodrigues'))
console.log('-')

function listarFrutas(frase: string, ...frutas: string[]) {
  return frase + ' ' + frutas.join(', ') + '.'
}
console.log(listarFrutas('Comprar na feira:', 'banana', 'maçã', 'jabuticaba', 'manga'))
