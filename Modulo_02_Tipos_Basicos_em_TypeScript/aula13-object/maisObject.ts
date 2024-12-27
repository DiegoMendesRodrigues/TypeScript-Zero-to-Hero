interface IFuncionario {
  nome: string,
  departamento: string,
  ativo: boolean
}

function exibirFuncionario(funcionario: IFuncionario) {
  let mensagem: string = `Nome = ${funcionario.nome}\n`
  mensagem += `Departamento = ${funcionario.departamento}\n`
  mensagem += `Ativo = ${funcionario.ativo ? 'Sim' : 'Não'}`
  console.log(mensagem)
}

const funcionarioDiego: IFuncionario = {
  nome: 'Diego Rodrigues',
  departamento: 'Arquitetura de Soluções',
  ativo: false
}

exibirFuncionario(funcionarioDiego)