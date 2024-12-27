/**
 * number => números (inteiros, flutuantes, positivos, negativos,
 *           infinito, NaN, etc)
 *           let nomeVariavel: number = valor;
 *
 * bigint => números ineiros grandes, sem erros de arredondamento
 *           (2^^53)
 *           let nomeVariavel: bigint = valor (seguido com 'n');
 *
 * doc referência: <number> https://www.typescriptlang.org/docs/handbook/basic-types.html#number
 * doc referência: <bigint> https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint
 */

/* Number */
let num1: number = 5; // Inteiro
let num2: number = -14.0; // Flutuante
let num3: number = 0x37cf; // Hexadecimal
let num4: number = 0o377; // Octal
let num5: number = 0b111001; // Birário
console.log('Inteiro.......: ', num1, typeof(num1));
console.log('Flutuante.....: ', num2, typeof(num2));
console.log('Hexadecimal...: ', num3, typeof(num3));
console.log('Octal.........: ', num4, typeof(num4));
console.log('Binário.......: ', num5, typeof(num5));
console.log("-");

/**
 * Bigint
 * OBS: Alterar o "target" para "ESNext" em tsconfig.json
 */ 
// let big1: bigint = 9007199254740991n;
// let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;
// let big3: bigint = 0x20000000000003n;
// let big4: bigint = 0o400000000000000003n;
// console.log('Bigint.................: ', big1);
// console.log('Bigint - Binário.......: ', big2);
// console.log('Bigint - Hexadecimal...: ', big3);
// console.log('Bigint - Octal.........: ', big4);