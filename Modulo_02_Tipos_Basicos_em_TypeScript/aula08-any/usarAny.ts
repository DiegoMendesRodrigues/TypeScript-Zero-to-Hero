const idade: any = 24;
const pessoas: any = ["Diego"];
const resultado: any = idade + pessoas;
console.log(resultado);
console.log("-");

/* Usar tipos primitivos */
// const idade2: number = 50
// const pessoas2 = ['Regina']
// const resultado2: any = idade2 + pessoas2 // Erro!
// console.log(resultado2)
// console.log('-')

/* O tipo 'any' é inferido implicitamente */
let frase; // Tipo any! Perigo!
frase = "Usando o tipo any!";
console.log(frase);
console.log("-");

/* Quando usar o tipo any? */
const formulario: { [camploFormulario: string]: any } = {
  nome: "Diego",
  sobrenome: "Rodrigues",
  idade: 40,
  ativo: true,
};
console.log(formulario);
