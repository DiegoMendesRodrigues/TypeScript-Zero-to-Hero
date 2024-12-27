/**
 * Tipo void é o oposto do Any, pois possui a ausência de qualqer tipo
 * 
 * Funções que não retornam nada por padrão, geram um retorno unknown, 
 * então é mais adequado, retornar void
 * Mesmo conceito para métodos
 * -> Melhora na clareza do código
 * -> Garante a segurança de tipo
 * => Garante que o retorno de uma função não irá retornar nenhum dado
 * 
 * Sintaxe:
 * function exemploFuncao(parametro): void {}
 */
// Retorno é definido como void
function logError(errorMessage: string): void {
  console.log(`LOG | ${errorMessage}`)
}
logError('Falha na conexão com o banco de dados')
console.log('-')

// Nesse caso, o TS entende que não possui retorno e retorna void
const olaMundo = (): void => {
  console.log('Olá, Programadores!')
}
olaMundo()
console.log('-')

/* Tipo void não pode ter nenhum dado */
let variavelVoid: void = undefined
// variavelVoid = 1     // Sempre teremos erro
// variavelVoid = null  // Sem erro se habilitar como false no 'strictNullChecks'
                        // no arquivo tsconfig.json
