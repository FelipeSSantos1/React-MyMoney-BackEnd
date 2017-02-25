const _ = require('lodash')
const billingCycle = require('../billingCycle/billingCycle')

function getSummary(req, res){
    billingCycle.aggregate({
        // Fazendo o somatório de todos os débitos e créditos de cada ciclo
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    },{
        // Fazendo o somatório de todos os ciclos cadastrados
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    },{
        // Removendo o id do retorno
        $project: {_id: 0, credit: 1, debt: 1}
    }, function(error, result){
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            // Caso o objeto não tenha valor, atribuir o valor zero como padrão
            res.json(_.defaults(result[0],{credit: 0, debt: 0}))
        }
    })
}

module.exports = {getSummary}