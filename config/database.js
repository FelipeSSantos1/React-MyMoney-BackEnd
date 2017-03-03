//
// para rodar o mongo, basta abrir o terminal e digitar mongod
// para rodar a aplicação em modo dev, basta entrar na pasta do app pelo terminal e digitar npm run dev
//
const mongoose = require('mongoose')
//module.exports = mongoose.connect('mongodb://localhost/db_finance')
module.exports = mongoose.connect('mongodb://user4b456f:e58da0DJkS1700410bd@cluster-pgrs2-0-eu-west-1-scalabledbs.cloudstrap.io:27002,cluster-pgrs2-1-eu-west-1-scalabledbs.cloudstrap.io:27002/pg-app-zgvh30jlhxbw5qbbkvwxs7894wfyuw?replicaSet=pgrs2&ssl=true')

//Traduções de mensagens de erro
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor ({VALUE}), é menor que o mínimo permitido: ({MIN})."
mongoose.Error.messages.Number.max = "O valor ({VALUE}), é maior que o máximo permitido: ({MAX})."
mongoose.Error.messages.String.enum = "O valor ({VALUE}), não é permitido para o atributo ({PATH})."
