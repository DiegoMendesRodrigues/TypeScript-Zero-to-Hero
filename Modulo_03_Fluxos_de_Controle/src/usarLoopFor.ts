/* Laço for com iteração incremental e decremental */
for (let i: number = 0; i < 10; i += 2) {
  console.log(i)
}
console.log('-')

for (let i: number = 21; i >= 0; i -= 3) {
  console.log(i)
}
console.log('-')

/* for ... of - Retorna uma coleção de matriz, lista ou tupla */
const nomes: string[] = ['Diego', 'Regina', 'Bruna', 'Julia']
for (const nome of nomes) {
  console.log(nome)
}
console.log('-')

const nomesOrdenados: string[] = nomes.sort()
/* for ... in - Retorna uma coleção de matriz, lista ou tupla */
for (const chave in nomesOrdenados) {
  console.log(nomes[chave])
}
