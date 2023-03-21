const knex = require('./knex')

function createProduto(produto) {
    console.log(produto)
    console.log(produto.nome)
    return knex("produto").insert(
        {
            nome: produto.nome,
            descricao: produto.descricao,
            quantidade: produto.quantidade,
            valor: produto.valor,
        })
}

function getProdutos() {
    return knex("produto").select("*")
}

function deleteProduto(id) {
    return knex("produto").where("id", id).del()
}

function vendeProduto(id, quantidade) {
    return knex("produto").where("id", id).update({quantidade: quantidade})
}

module.exports = {
    createProduto,
    getProdutos,
    deleteProduto,
    vendeProduto
}