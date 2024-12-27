/**
 * Tipo primitivo do JS, pode ser true ou false
 * 
 * https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 */
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;
console.log(tarefaConcluida, tarefaPendente);
console.log('-')

let concluido: boolean = false;
if (concluido) {
  console.log('Tarefa concluída com sucesso!')
} else {
  console.log('Tarefa pendente!');
}
