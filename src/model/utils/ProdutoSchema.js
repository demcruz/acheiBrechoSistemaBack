const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema({
   
        nomeDescricao: String,
        tamanho: String,
        preco: Number,
        categoria: String,
        dataCadastro: Date
    
})


module.exports = ProdutoSchema