/**
 * Organizar o cõdigo
 * Unidade primária em encapsulamento
 * Suporta modificadores, inicializadores, polimorfismo, decorators e interfaces
 *
 * Fields (campos)
 * Métodos
 * Construtores
 * Classes aninhadas e interfaces
 *
 * class <nome_classe> {
 *  campo
 *  construtor {
 *  }
 *  metodo
 * }
 */
export {}

/* Classe em Typescript */
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
console.log(pessoa.nomeCompleto())
