import { nodeModuleNameResolver } from 'typescript'

/**
 * Maneira de fornecer acesso em propriedades dos objetos
 * - get -> receber
 * - set -> alterar
 */
export {}

class Retangulo {
  private largura: number = 5
  private altura: number = 4

  get calcularArea(): number {
    return this.altura * this.largura
  }
}
console.log(new Retangulo().calcularArea)
console.log('-')

/**
 * Gerar get e set das propriedades
 */
class Estudante {
  private _nome: string
  private _semestre: string
  private _curso: string

  constructor(nome: string, semestre: string, curso: string) {
    this._nome = nome
    this._semestre = semestre
    this._curso = curso
  }

  get nome(): string {
    return this._nome
  }

  set nome(nome: string) {
    this._nome = nome
  }

  get semestre(): string {
    return this._semestre
  }

  set semestre(semestre: string) {
    this._semestre = semestre
  }

  get curso(): string {
    return this._curso
  }

  set curso(curso: string) {
    this._curso = curso
  }
}
let estudate = new Estudante('Diego Rodrigues', '1º', 'Fundamentos de Python')
console.log(estudate)

estudate.nome = 'Natalia Neau'
estudate.semestre = '2º'
estudate.curso = 'Fundamentos de JavaScript'
console.log(estudate)

console.log(estudate.nome)
console.log(estudate.semestre)
console.log(estudate.curso)

/**
 * Gerar os getter e setter de forma automática no VS Code
 */
class Pessoa {
  private _nome: string = ''
  private _idade: number = 0

  public get nome(): string {
    return this._nome
  }
  public set nome(value: string) {
    this._nome = value
  }
  public get idade(): number {
    return this._idade
  }
  public set idade(value: number) {
    this._idade = value
  }
}