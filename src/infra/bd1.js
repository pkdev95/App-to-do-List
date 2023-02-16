const Usuario = require('../models/usuario')
const Tarefa = require('../models/tarefa')

// Cria vários objetos e os adiciona a um array para simular uma lista de objetos
const bdUsuarios = []
const bdTarefas = []


// Ususários
// Cria objetos do tipo Usuario e adiciona a lista de usuarios
const usuario = new Usuario('Pedro', 'pd@gEmail', '*****')
bdUsuarios.push(usuario)

const usuario2 = new Usuario('alice', 'maria@bol.com', '123456')
bdUsuarios.push(usuario2)



// Tarefas
// Cria objetos do tipo Tarefa e adiciona a lista de tarefas
const tarefa = new Tarefa('lavar o carro', 'lavar o carro', 'A fazer', new Date())
bdTarefas.push(tarefa)

const tarefa2 = new Tarefa('arrumar o quarto', 'arrumar o quarto', 'A fazer', new Date())
bdTarefas.push(tarefa2)



// Exporta as listas de objetos
module.exports = { bdUsuarios, bdTarefas }