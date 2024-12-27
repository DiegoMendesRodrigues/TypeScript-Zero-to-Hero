/**
 * Object representa os valores que não estão nos tipos primitivos
 * Melhor maneira de representar e agrupar dados, para transferências
 * Podem ser anônimos, ou nomeados
 */

export {}

/* Uso básico do Type Object */
const pessoa = {
  nome: 'Diego',
  idade: 42,
  ativo: true,
}
console.log(pessoa)
console.log('-')

/* Object como parâmetro de uma função (eles podem ser anônimos) */
function onboarding01(funcionario: { nome: string }) {
  return `Seja bem-vindo(a) ${funcionario.nome}!`
}
console.log(onboarding01({ nome: 'Regina Marcia' }))
console.log('-')

/* Object nomeado */
interface IPessoa {
  nome: string
  funcao: string
}
function onboarding02(funcionario: IPessoa) {
  return `Seja bem-vindo(a) na empresa XPTO ${funcionario.nome} como ${funcionario.funcao}!`
}
console.log(onboarding02({ nome: 'Regina Marcia', funcao: 'Diretora' }))
console.log('-')

/* Usando Type Alias */
type Programador = {
  nome: string
  linguagem: string
}
function onboarding03(programador: Programador) {
  return `Seja bem-vindo(a) ${programador.nome} que utiliza ${programador.linguagem}!`
}
console.log(onboarding03({ nome: 'Bruna Mendes', linguagem: 'Python' }))
console.log('-')

/* Usando opcional no object */
interface ICrianca {
  nome: string
  idade: number
  email?: string // Opcional
}
const julia: ICrianca = {
  nome: 'Julia Neau',
  idade: 8,
  email: 'julia@fake.io',
}
const gabriela: ICrianca = {
  nome: 'Gabriela Rodrigues',
  idade: 4,
}
console.log(julia)
console.log(gabriela)
console.log('-')

/* Propiedade 'readonly' */
interface IAdulto {
  nome: string
  idade: number
  readonly email: string
}
const claudio: IAdulto = {
  nome: 'Claudio Rocha',
  idade: 50,
  email: 'claudio@fake.io',
}
console.log(claudio)
console.log('-')

/* Usando Herança */
interface IPai {
  nome: string
  sobrenome: string
  altura: number
}
interface IMae {
  nome: string
  sobrenome: string
  origem: string
}
interface IFilho extends IPai, IMae {
  idade: number
}

const filho: IFilho = {
  nome: 'Irene',
  sobrenome: 'Garcia',
  altura: 1.4,
  origem: 'Campinas',
  idade: 18,
}
console.log(filho)
console.log('-')

/* Tipos de Interseções */
interface ICachorro {
  raca: string
}
interface IGato {
  raca: string
}
type Animal = ICachorro & IGato
console.log('-')
