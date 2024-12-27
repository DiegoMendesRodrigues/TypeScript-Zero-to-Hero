/**
 * Sintaxe
 * function nome (parâmetro: tipo, parâmetro?: tipo): retonoDoTipo {
 *  // Lógica da função
 * }
 */
function exibirInformacoesPessoa(idPessoa: number, nome: string, email?: string): void {
  let mensagem: string
  if (email != undefined) {
    mensagem = `Id = ${idPessoa} | Nome = ${nome} | E-mail = ${email}`
  } else {
    mensagem = `Id = ${idPessoa} | Nome = ${nome}`
  }
  console.log(mensagem)
}
exibirInformacoesPessoa(32, 'Diego', 'diego@fake.io')
exibirInformacoesPessoa(34, 'Regina')
console.log('-')

function mensagemLog(mensagem: string, usuarioId?: number): void {
  const diaLog = new Date().toLocaleDateString()
  const horaLog = new Date().toLocaleTimeString()
  console.log(diaLog, horaLog, mensagem, usuarioId || 'ID não informado')
}
mensagemLog('Falha na conexão com o banco de dados')
mensagemLog('Falha de autenticação', 72356)
console.log('-')

type Pessoa = {
  id: number
  nome: string
  idade?: number
  email?: string
}

let pessoa: Pessoa
pessoa = {
  id: 1238,
  nome: 'Regina',
}
console.log(pessoa)

pessoa = {
  id: 9875,
  nome: 'Diego',
  idade: 40,
}
console.log(pessoa)

pessoa = {
  id: 9875,
  nome: 'Diego',
  idade: 40,
  email: 'diego@fake.io',
}
console.log(pessoa)
