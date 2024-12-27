/**
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/* Uso de colchetes */
var frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas);
console.log(frutas[2]);
console.log('-');
var minhasFrutas = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];
console.log(minhasFrutas);
console.log(minhasFrutas[4]);
console.log('-');
/* Uso do Array Object */
var outrasFrutas = ['Limão', 'Pera', 'Melão', 'Mamão'];
console.log(outrasFrutas);
console.log(outrasFrutas[0]);
console.log(outrasFrutas[2]);
console.log('-');
/* Tamanho do array com o método length */
var idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês'];
console.log(idiomas);
console.log(idiomas.length);
/* Adicionar elementos com o push() */
idiomas.push('Alemão');
idiomas.push('Mandarim');
console.log(idiomas);
console.log(idiomas.length);
/* Remover o primeiro elemento com shift() e o último com pop() */
console.log(idiomas.shift());
console.log(idiomas.pop());
console.log('-');
/* Usar Spread Operator */
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArrays(listaNumeros, [6, 7, 8, 9, 10, 11, 12]);
console.log(listaNumeros);
console.log('-');
/* Percorrer o array com um laço de iteração */
var linguagens = ['JavaScript', 'PHP', 'Python', 'Go'];
function exibirLinguagens(listaLinguagens) {
    listaLinguagens.forEach(function (exibirLinguagem) {
        console.log(exibirLinguagem);
    });
}
exibirLinguagens(linguagens);
