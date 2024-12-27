export = {}

/* Exemplos do laço while */
let contador: number = 0
while (contador < 5) {
  console.log(contador)
  contador++
}
console.log('-')

let numero:number = 1
while (numero <= 20) {
  if (numero % 5 == 0) {
    console.log('O 1ª número múltipo de 5 entre 1 e 20 é', numero)
    break
  }
  console.log('->', numero)
  numero++
}
console.log('-')

/* Exemplo do laço do-while */
let contadorUsuario:number = 0
let usuario: string[] = ['Diego', 'Regina', 'Bruna']
usuario.sort()

do {
  console.log(usuario[contadorUsuario])
  contadorUsuario++
} while (contadorUsuario < usuario.length)

