/**
 * Enum TypeName {
 *  const1,
 *  const2,
 *  ...
 * }
 * 
 * Numeric Enums
 * String Enums
 */

/**
 * Numeric Enums
 * Valores são armazenados como números
 */
enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances
}
console.log(Idioma)
console.log(Idioma.Espanhol)
console.log('-')

/**
 * String Enums
 * Valores são armazenados como texto
 */
enum Traducoes {
  Portugues = 'PT-BR',
  Espanhol = 'ES',
  Ingles = 'EN',
  Frances = 'FR'
}
console.log(Traducoes)
console.log(Traducoes.Portugues)
console.log(Traducoes.Frances)
console.log('-')

/* Usar enum com uma chave, usando const */
const enum Comida {
  Hamburguer = 'Hamburguer',
  Massa = 'Massa',
  Pizza = 'Pizza',
  Churrasco = 'Churrasco'
}

function comida(comidaEscolhida: Comida) {
  return `A comida ${comidaEscolhida} é muito apetitosa!`
}

console.log(comida(Comida.Pizza))
console.log(comida(Comida.Churrasco))
console.log('-')

/* Exemplo de uso de Enum */
enum Tarefa {
  Todo,
  Progress,
  Done
}

const tarefaConcluida = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída!'
}

if (tarefaConcluida.status === Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa concluída')
}