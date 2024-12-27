/**
 * Never é um tipo que não contém valores
 *  -> Não podemos atribuir nenhum valor a eles
 *
 * Quando usar?
 *  -> Retorno de função que gera erro
 */

/* Exemplo: Nrever - Throw Exception */
function erroNoSistema(mensagem: string): never {
  throw new Error(mensagem)
}
// console.log(erroNoSistema('Falha na conexão'))
// erroNoSistema('Falha na conexão')
// console.log('-')

/* Exemplo: Never inferido automaticamente */
/* Seria mais explícito colocar o Never */
function rejeitar() {
  return erroNoSistema('Acesso rejeitado')
}
// console.log(rejeitar())
console.log('-')

/* Exemplo: Função que contém um loop infinito e retorna Never */
/* Seria mais explícito colocar o Never */
/* NÃO EXECUTAR POR IRÁ TRAVAR O COMPUTADOR */
const loopInfinito = () => {
  while (true) {
    console.log('Irei travar o computador')
  }
}
console.log('-')

/* Diferença entre Never e Void */
let variavelVoid: void = undefined
// let variavelNever: never = undefined // Erro
console.log(variavelVoid)
// console.log(variavelNever)
console.log('-')
