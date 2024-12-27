/**
 * arquivo: typeAnnotation.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

/* ==> Variáveis [Type Annotations] */
const nome: string = "Diego Rodrigues";
const idade: number = 42;
const ativo: boolean = false;
console.log(nome);
console.log(idade);
console.log(ativo);
console.log("-");

/* ==> Arrays [Type Annotations] */
const animais: string[] = ["Elefante", "Cachorro", "Gato"];
const numeros: number[] = [4, 89, 21, 34];
console.log(animais);
console.log(numeros)
console.log("-");

/* ==> Objetos [Type Annotations] */
let carro: {
  marca: string,
  modelo: string,
  ano: number
}
carro = {
  marca: "Fiat",
  modelo: "MOBI",
  ano: 2023
}
console.log(carro)
console.log("-");

/* ==> Functions [Type Annotations] */
function adicionarNumeros(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(adicionarNumeros(3, 4));
// console.log(adicionarNumeros(3, 'A'))
