export {}

/* Classe sem construtor */
class Estudante {
  codigo!: number
  nomeEstudante!: string
}

const estudante = new Estudante()
estudante.codigo = 198
estudante.nomeEstudante = 'Julia Neau'

console.log(`Código do estudante = ${estudante.codigo}`)
console.log(`Nome do estudante = ${estudante.nomeEstudante}`)
console.log('-')

/* Classe com construtor e método */
class Professor {
  codigo: number
  nomeProfessor: string

  constructor(codigo: number, nomeProfessor: string) {
    this.codigo = codigo
    this.nomeProfessor = nomeProfessor
  }

  informacoesProfessor(): string {
    let informacoes: string = `Código do professor = ${professor.codigo}\n`
    informacoes += `Nome do professor = ${professor.nomeProfessor}`
    return informacoes
  }
}

const professor = new Professor(845, 'Emma Stone')
console.log(professor.informacoesProfessor())
console.log('-')
