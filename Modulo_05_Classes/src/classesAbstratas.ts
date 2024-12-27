/**
 * Uma classe que não pode ser instanciada
 * Ela deve ser derivada, parecido com interfaces, mas podem ter funções
 */
export {}

/* Classe abstrata */
abstract class Funcionario {
  constructor(
    private nome: string,
    private sobrenome: string
  ) {}

  abstract retornarSalario(): number

  get retornarNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }

  emitirContraCheque(): string {
    return `${this.retornarNomeCompleto} | Salário: R$ ${this.retornarSalario().toFixed(2)}`
  }
}

/* Classe com herança, herdando tudo da classe abstrata */
class Professor extends Funcionario {
  constructor(
    nome: string,
    sobrenome: string,
    private salario: number
  ) {
    super(nome, sobrenome)
  }

  retornarSalario(): number {
    return this.salario
  }
}

let professor = new Professor('Bruna', 'Lobato', 5220.50)
console.log(professor.retornarNomeCompleto)
console.log(professor.retornarSalario())
console.log(professor.emitirContraCheque())
