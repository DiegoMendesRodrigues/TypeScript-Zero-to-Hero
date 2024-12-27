import { nodeModuleNameResolver } from 'typescript'

export {}

class Funcionario {
  readonly dataNascimento: Date

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento
  }
}
const funcionario = new Funcionario(new Date(1982, 6, 8))
console.log(funcionario.dataNascimento) // Podemos ler a propriedade, mas não escrever bela
console.log(funcionario.dataNascimento.toLocaleString())
console.log('-')

/**
 * Outra forma de declarar uma propriedade readonly, direto no construtor
 */
class Professor {
  constructor(readonly dataNascimento: Date) {
    this.dataNascimento = dataNascimento
  }
}
const professor = new Professor(new Date(1990, 5, 21))
console.log(professor.dataNascimento)
console.log('-')

/**
 * Uma propriedade readonly e outra publica
 */
class Aluno {
  readonly codigo: number
  nome: string

  constructor(codigo: number, nome: string) {
    this.codigo = codigo
    this.nome = nome
  }

  informacoes(): string {
    return `Código: ${this.codigo} | Nome: ${this.nome}`
  }
}
const aluno = new Aluno(132, 'Claudio')
console.log(aluno.nome)
console.log(aluno.codigo)
console.log(aluno.informacoes())

/**
 * Usando uma Interface, deixando tudo como readonly
 */
interface IPessoa {
  readonly cpf: string
  readonly nome: string
  ativo: boolean
}

const bruna: IPessoa = {
  cpf: '222.333.555-66',
  nome: 'Bruna Lobato',
  ativo: true,
}
console.log(bruna)
bruna.ativo = false
console.log(bruna)

const diego: Readonly<IPessoa> = {
  cpf: '212.313.414.55',
  nome: 'Diego Rodrigues',
  ativo: true,
}
console.log(diego)
// diego.ativo = false // Erro, pois o objeto inteiro está como readonly
