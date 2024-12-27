/**
 * Sintaxe
 * fucntion nome(param1:type, param2:type = valor_padrão) {
 *  // Lógica
 * }
 */

function descontoDaCompra(preco: number, desconto: number = 0.08) {
  return preco * (1 - desconto)
}
console.log(descontoDaCompra(100))
console.log(descontoDaCompra(100, 0.15))
