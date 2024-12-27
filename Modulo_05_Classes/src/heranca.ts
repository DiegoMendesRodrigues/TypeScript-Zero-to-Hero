/**
 * Criar novas classes a partir de uma existente
 * Classe pai/superclasse
 * Classe filha/subclasse
 *
 * extends
 *
 * Sintaxe
 *
 * class classe_filha extends classe_pai {
 * }
 *
 */
export {}

// Classe pai
class Animal {
  mover(distancia: number = 0): void {
    console.log(`O animal se moveu em ${distancia} metros`)
  }
}

// Classe  filha, usando herança
class Cachorro extends Animal {
  latir(): void {
    console.log('Au! Au!')
  }
}

const bart = new Cachorro()
bart.latir()
bart.mover(5)
bart.latir()
console.log('-')

/**
 * Outro exemplo, com propriedades privadas
 */
class Pessoa {
  private _nome: string
  private _sobrenome: string

  constructor(nome: string, sobrenome: string) {
    this._nome = nome
    this._sobrenome = sobrenome
  }

  public get nome(): string {
    return this._nome
  }
  public set nome(value: string) {
    this._nome = value
  }

  public get sobrenome(): string {
    return this._sobrenome
  }
  public set sobrenome(value: string) {
    this._sobrenome = value
  }

  public get nomeCompleto(): string {
    return `${this._nome} ${this._sobrenome}`
  }
}

class Funcionario extends Pessoa {
  private _funcao: string

  constructor(nome: string, sobrenome: string, funcao: string) {
    super(nome, sobrenome)
    this._funcao = funcao
  }

  public get funcao(): string {
    return this._funcao
  }
  public set funcao(value: string) {
    this._funcao = value
  }

  get informacoes(): string {
    return `${this.nomeCompleto} | Função: ${this.funcao}`
  }
}

const adriana = new Funcionario('Adriana', 'Regolin', 'Coordenadora')
console.log(adriana)
console.log(adriana.informacoes)
