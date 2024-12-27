/**
 * Compartilhados entre todas as instâncias
 * static
 * className.propertyName
 */

/* Propriedade estática */
class Funcionario {
  static contratacoes: number = 0

  constructor(
    private nomeCompleto: string,
    private titulo: string
  ) {
    this.nomeCompleto = nomeCompleto
    this.titulo = titulo

    Funcionario.contratacoes++
  }
}

const funcionario01 = new Funcionario('Ana Braga', 'Assistente')
const funcionario02 = new Funcionario('Luiz Vargas', 'Gerente')
console.log(Funcionario.contratacoes) // Propriedade estática
console.log('-')

/* Método estático */
class Diretor {
  static contratacoes: number = 0

  constructor(
    private nomeCompleto: string,
    private titulo: string = 'Diretor'
  ) {
    this.nomeCompleto = nomeCompleto
    this.titulo = titulo

    Diretor.contratacoes++
  }

  public static retornarContratacoes(): number {
    return Diretor.contratacoes
  }
}

const diretor01 = new Diretor('Diego')
const diretor02 = new Diretor('Regina')
const diretor03 = new Diretor('Bruna')
const diretor04 = new Diretor('Leonardo')
console.log(Diretor.retornarContratacoes()) /// Método estático
console.log('-')

/* Propriedade estática */
type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Poodle'

class Cachorro {
  public nome: string
  public idade: number
  public racas: Raca[]
  public static QTD_CACHORRO_VENDIDO = 0

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome
    this.idade = idade
    this.racas = racas

    Cachorro.QTD_CACHORRO_VENDIDO++
    console.log('Vendidos:', Cachorro.QTD_CACHORRO_VENDIDO)
  }

  public exibirInformacoes(): void {
    console.log(`O ${this.nome} possui ${this.idade} anos`)
  }
}
const bart = new Cachorro('Bart', 8, ['Poodle'])
const lisa = new Cachorro('Lisa', 5, ['Pug'])
console.log(bart)
console.log(lisa)
