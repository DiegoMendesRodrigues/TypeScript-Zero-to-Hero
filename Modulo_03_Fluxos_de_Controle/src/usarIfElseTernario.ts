/**
 * if (condicao) {
 *  codigo
 * }
 */
const maximo = 100
let contador = 90

if (contador < maximo) {
  contador++
}
console.log(`Contador = ${contador}`)

const cadastroAtivo = false
if (cadastroAtivo) {
  console.log('O cadastro está ativo')
} else {
  console.log('O cadastro está inativo')
}

const idadePessoa = 42
if (idadePessoa < 18) {
  console.log('Menor de idade')
} else if (idadePessoa > 65) {
  console.log('Terceira idade')
} else {
  console.log('Adulto')
}
console.log('-')

/* Calculo do IMC */
const pessoaAlturaM = 1.69
const pessoaPesoKg = 100
const imc = pessoaPesoKg / (pessoaAlturaM * pessoaAlturaM)
let tipoImc = ''

if (imc < 18.5) {
  tipoImc = 'Magreza'
} else if (imc >= 18.5 && imc < 24.9) {
  tipoImc = 'Normal'
} else if (imc >= 24.9 && imc < 30) {
  tipoImc = 'Sobrepeso'
} else {
  tipoImc = 'Obesidade'
}
console.log(`Seu IMC é ${imc.toFixed(1)} Kg/m², que significa ${tipoImc}.`)

const pesoMinimo = (18.5 * (pessoaAlturaM * pessoaAlturaM)).toFixed(1)
const pesoMaximo = (24.9 * (pessoaAlturaM * pessoaAlturaM)).toFixed(1)
console.log(
  `Para atingir um valor de IMC ideal, seu peso deve estar entre ${pesoMinimo} e ${pesoMaximo} Kg.`
)
console.log('-')

/* Operador Ternário ? : */
const mensagem = `Seu cadastro está ${cadastroAtivo ? 'ativo' : 'inativo'}.`
console.log(mensagem)
