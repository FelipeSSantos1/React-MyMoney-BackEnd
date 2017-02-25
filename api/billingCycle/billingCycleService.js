const billingCycle = require('./billingCycle')
const _ = require('lodash')

// restful: api restful cria todos os métodos de gerenciamento dos ciclos de pagamento CRUD
billingCycle.methods(['get', 'post', 'put', 'delete'])
// config: retorne sempre o objeto novo após um update
billingCycle.updateOptions({new: true, runValidators: true})
// Interceptando os erros nos métodos post e put
billingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)
// Verificando se tem erros e enviando via json
function sendErrorsOrNext(req, res, next){
  const bundle = res.locals.bundle
  if(bundle.errors){
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  }else{
    next()
  }
}
// Extraindo apenas as mensagens de erro do objeto errors
function parseErrors(nodeRestfulErrors){
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}
// retorna a quantidade de registros no arquivo
billingCycle.route('count', function(rep, res, next){
  billingCycle.count(function(error, value){
    if (error) {
      // enviando um objeto contendo um array de strings de msgs de erros
      res.status(500).json({errors: [error]})
    }else{
      res.json({value})
    }
  })
})

module.exports = billingCycle
