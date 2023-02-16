const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
// const trf = require('./controllers/tarefa-controller')
// const user = require('./controllers/usuario-controller')
const UsuarioController = require('./controllers/usuario-controller')
UsuarioController.rotas(app)
const TarefaController = require('./controllers/tarefa-controller')
TarefaController.rotas(app)


//trf(app)
//user(app)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})