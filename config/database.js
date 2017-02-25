const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

//Traduções de mensagens de erro
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O valor ({VALUE}), é menor que o mínimo permitido: ({MIN})."
mongoose.Error.messages.Number.max = "O valor ({VALUE}), é maior que o máximo permitido: ({MAX})."
mongoose.Error.messages.String.enum = "O valor ({VALUE}), não é permitido para o atributo ({PATH})."
