/**
 * Tuplas são arrays de dados primitivos fixos
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/* Primeiro exemplo */
var pessoaEmpresa;
pessoaEmpresa = ['Diego Rodrigues', 'Arquiteto de Negócios', 42];
console.log(pessoaEmpresa);
console.log('-');
/* Acessando o valor da tupla */
console.log(pessoaEmpresa[0]);
console.log(pessoaEmpresa[1]);
console.log(pessoaEmpresa[2]);
console.log('-');
/* Acessar o valor com labels (TypeScript) */
var pessoaEscola;
pessoaEscola = ['Regina Marcia', 'Diretora', 50];
console.log(pessoaEscola);
console.log('-');
/* Utilizar com Spread Operator */
var listaFrutas = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];
console.log.apply(console, listaFrutas);
console.log('-');
/* Lista Heterogênea */
var frutasLoja;
frutasLoja = __spreadArrays([5, true], listaFrutas);
console.log(frutasLoja);
console.log('-');
/**
 * Uso de função com tuplas
 *
 * No exemplo abaixo, os parâmetros da função são duas tuplas, uma
 * chamada nomes e outra chamada idades
 */
function listarPessoas(nomes, idades) {
    return __spreadArrays(nomes, idades);
}
var resultado = listarPessoas(['Diego', 'Regina'], [42, 50]);
console.log(resultado);
console.log('-');
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArrays(nome);
}
console.log(criarPessoa('Diego', 'Mendes', 'Rodrigues'));
console.log(criarPessoa('Regina', 'Marcia'));
