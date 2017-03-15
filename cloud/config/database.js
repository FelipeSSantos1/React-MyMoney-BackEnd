const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://user4b456f:e58da0DJkS1700410bd@cluster-pgrs2-0-eu-west-1-scalabledbs.cloudstrap.io:27002,cluster-pgrs2-1-eu-west-1-scalabledbs.cloudstrap.io:27002/pg-app-zgvh30jlhxbw5qbbkvwxs7894wfyuw?replicaSet=pgrs2&ssl=true')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = 
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é válido para o atributo '{PATH}'."