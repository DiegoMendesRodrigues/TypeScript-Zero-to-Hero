/**
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 */

/* Uso de colchetes */
const frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas);
console.log(frutas[2]);
console.log('-')

const minhasFrutas: string[] = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga']
console.log(minhasFrutas)
console.log(minhasFrutas[4])
console.log('-')

/* Uso do Array Object */
const outrasFrutas: Array<string> = ['Limão', 'Pera', 'Melão', 'Mamão']
console.log(outrasFrutas)
console.log(outrasFrutas[0])
console.log(outrasFrutas[2])
console.log('-')

/* Tamanho do array com o método length */
const idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês']
console.log(idiomas)
console.log(idiomas.length)

/* Adicionar elementos com o push() */
idiomas.push('Alemão')
idiomas.push('Mandarim')
console.log(idiomas)
console.log(idiomas.length)

/* Remover o primeiro elemento com shift() e o último com pop() */
console.log(idiomas.shift())
console.log(idiomas.pop())
console.log('-')

/* Usar Spread Operator */
let listaNumeros: Array<number> = [0, 1, 2, 3, 4, 5]
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10, 11, 12]
console.log(listaNumeros)
console.log('-')

/* Percorrer o array com um laço de iteração */
const linguagens: Array<string> = ['JavaScript', 'PHP', 'Python', 'Go']

function exibirLinguagens(listaLinguagens: Array<string>) {
  listaLinguagens.forEach((exibirLinguagem) => {
    console.log(exibirLinguagem)
  })
}

exibirLinguagens(linguagens)
