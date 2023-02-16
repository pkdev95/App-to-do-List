// Tarefas não está completa. Falta implementar as funcionalidades
const TarefasDAO = require('../DAO/TarefaDAO')
// Importa o bd.js para poder usar o banco de dados simulado
const { bdTarefas } = require("../infra/bd1.js")

class tarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/tarefa', tarefaController.listar)
        app.post('/tarefa', tarefaController.inserir)
        app.put('/usuario/email/:email', tarefaController.atualizaTarefa)
        app.delete('/usuario/email/:email', tarefaController.deletarTarefa)

    }

    static listar(req, res){
        const tarefas = TarefasDAO.listar()
        // Devolve a lista de tarefas
        res.send(tarefas)
    }

    static inserir(req, res){

        const tarefa = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            status: req.body.status,
            data: req.body.data
        }

       
        TarefasDAO.inserir(tarefa)

       
        res.status(201).send({"Mensagem": "Tarefa adicionada com sucesso", "Noav tarefa: ": tarefa})
      
      
    }

    static deletarTarefa(req, res){
       const tarefa = TarefasDAO.deletar(req.params.titulo)
      
       if(!tarefa){
           res.status(404).send('Tarefa não encontrada')
       }

       
       res.status(204).send({"Mensagem: ": `a terafa ${tarefa.titulo} foi deletada`} )
    }


    static atualizaTarefa (req, res) {
        const tarefa = TarefasDAO.atualizar(req.params.titulo)

        if (!tarefa) {
            res.status(404).send('Tarefa não encontrada')
        }

        tarefa.titulo = req.body.titulo
        tarefa.descricao = req.body.descricao
        tarefa.status = req.body.status
        tarefa.data = req.body.data

        //Classe UsuarioDAO é chamada com o método atualizar, que será reponsável por acessar o banco e cadastrar o objeto usuário já preenchido com as informações que vieram do corpo via req.body na requisição. Observe que estamos enviando o usuário criado e preenchido como o req.body logo acima. Também passamos o email que veio da URL do nosso endpoint, pois na clase UsuarioDAO será verificado o suário certo que será feita a atualização. Lembre-se que quem faz o acesso ao banco agora é a classe DAO, por isso estamos passando para ela
        TarefasDAO.atualizar(req.params.titulo, tarefa)
        
        // Tudo correndo certo, uma mensagem será informada com o status de bem sucedido (200). Também personalizamos um pouco o response (resposta) para mostrar como ficaram as informações do usuário.
        res.status(200).send({"Menssagem": "Tarefa atualizada com sucesso", "Nova tarefa: ": tarefa})





    }

}

module.exports = tarefaController