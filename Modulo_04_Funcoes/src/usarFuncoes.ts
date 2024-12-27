/**
 * Sintaxe:
 * function nome (parâmetro: tipo, parâmetro: tipo): retonoDoTipo {
 *  // Lógica da função
 * }
 */
/* Funções Nomeadas (Named Functions) */
function somarNumeros(numero1: number, numero2: number): number {
  return numero1 + numero2
}
console.log(somarNumeros(3, 4))
console.log(somarNumeros(8.1, 4.4))
console.log('-')

function nomeSobrenome(nome: string, sobrenome: string): string {
  return `${nome} ${sobrenome}`
}
console.log(nomeSobrenome('Diego', 'Rodrigues'))
console.log(nomeSobrenome('Regina Marcia', 'Ruiz Mendes Rodrigues'))
console.log('-')

/* Função Anônima (Function Expression) */
const saudar = function (mensagem: string): string {
  return mensagem
}
console.log(saudar('Olá Developers!'))
console.log('-')

/* Arrow Functions */
const exibirMensagem = (mensagem: string): string => {
  return mensagem
}
console.log(exibirMensagem('Curso de Typescript!'))
console.log('-')

/* Function Constructor */
const exibirTexto = new Function('mensagem', 'return mensagem')
console.log(exibirTexto('Utilizando JavaScript!'))
