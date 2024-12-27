/**
 * Alteram a visibilidade das propriedades e dos métodos
 * - private
 * - Protected
 * - public (padrão)
 * - readonly: propriedade somente leitura
 */
export {}

/**
 * Por padrão, tudo é public
 */
class Pessoa {
  nome: string
  sobrenome: string

  constructor(nome: string, sobrenome: string) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }
}

const pessoa = new Pessoa('Diego', 'Mendes Rodrigues')
console.log(pessoa.nome)
console.log(pessoa.nomeCompleto())
console.log('-')

/**
 * Deixar os atributos privados
 */
class PessoaAdulta {
  private nomeCOmpleto: string
  private idade: number

  constructor(nomeCompleto: string, idade: number) {
    this.nomeCOmpleto = nomeCompleto
    this.idade = idade
  }

  informacoes(): string {
    return `Nome = ${this.nomeCOmpleto} | Idade = ${this.idade}`
  }
}
const pessoaAdulta = new PessoaAdulta('Bruna Lobato', 32)
// console.log(pessoaAdulta.nome) // Erro, pois o método é privado
console.log(pessoaAdulta.informacoes())
console.log('-')

/**
 * Utilizar o Protected, que libera que os campos e métodos sejam acessados
 * dentro da classe e das subclasses
 */
class Estudante {
  protected codigo: number
  protected nomeEstudante

  constructor(codigo: number, nomeEstudante: string) {
    this.codigo = codigo
    this.nomeEstudante = nomeEstudante
  }
}

class EstudanteColegial extends Estudante {
  private curso: string

  constructor(codigo: number, nomeEstudante: string, curso: string) {
    super(codigo, nomeEstudante)
    this.curso = curso
  }

  dadosEstudante(): string {
    return `Código = ${this.codigo}\nNome = ${this.nomeEstudante}\nCurso = ${this.curso}`
  }
}

const estudanteColegial = new EstudanteColegial(
  278,
  'Bruna Mendes',
  'Introdução ao TypeScript'
)
console.log(estudanteColegial.dadosEstudante())
console.log('-')

/**
 * Utilizar o readlonly
 */
class Funcionario {
  readonly dataNascimento: Date

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento
  }
}
const funcionario = new Funcionario(new Date(1982, 6, 8))
console.log(funcionario.dataNascimento)
console.log(funcionario.dataNascimento.toLocaleString())
// funcionario.dataNascimento = new Date(1990, 11, 5) // Erro, pois a propriedade é readlony
