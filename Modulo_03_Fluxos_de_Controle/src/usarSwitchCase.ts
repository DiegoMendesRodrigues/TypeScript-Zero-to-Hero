function executarAreaSistema(opcaoMenu: number) {
  switch (opcaoMenu) {
    case 1:
      console.log('Módulo de Cadastro')
      break
    case 2:
      console.log('Módulo de Relatórios')
      break
    case 3:
      console.log('Módulo de Configurações')
      break
    default:
      console.log('Opção inválida')
  }
}

executarAreaSistema(2)
executarAreaSistema(3)
executarAreaSistema(1)
executarAreaSistema(10)
console.log('-')

function tiposDeFlores(flor: string) {
  switch (flor.toLowerCase()) {
    case 'rosa':
      console.log('Rosas são vermelhas!')
      break
    case 'violeta':
      console.log('Violetas são azuis!')
      break
    case 'tulipa':
      console.log('Tulipas são brancas!')
      break
    default:
      console.log('Por favor, selecione uma outra flor.')
  }
}
tiposDeFlores('Rosa')
tiposDeFlores('Tulipa')
tiposDeFlores('Lótus')
