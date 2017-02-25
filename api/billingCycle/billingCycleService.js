const billingCycle = require('./billingCycle')

// restful: api restful cria todos os métodos de gerenciamento dos ciclos de pagamento
billingCycle.methods(['get', 'post', 'put', 'delete'])
// config: retorne sempre o objeto novo após um update
billingCycle.updateOptions({new: true, runValidators: true})
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
