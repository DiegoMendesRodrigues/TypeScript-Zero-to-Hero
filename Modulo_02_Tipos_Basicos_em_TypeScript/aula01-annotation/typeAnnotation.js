/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
/* ==> Variáveis [Type Annotations] */
var nome = "Diego Rodrigues";
var idade = 42;
var ativo = false;
console.log(nome);
console.log(idade);
console.log(ativo);
console.log("-");
/* ==> Arrays [Type Annotations] */
var animais = ["Elefante", "Cachorro", "Gato"];
var numeros = [4, 89, 21, 34];
console.log(animais);
console.log(numeros);
console.log("-");
/* ==> Objetos [Type Annotations] */
var carro;
carro = {
    marca: "Fiat",
    modelo: "MOBI",
    ano: 2023
};
console.log(carro);
console.log("-");
/* ==> Functions [Type Annotations] */
function adicionarNumeros(num1, num2) {
    return num1 + num2;
}
console.log(adicionarNumeros(3, 4));
// console.log(adicionarNumeros(3, 'A'))
