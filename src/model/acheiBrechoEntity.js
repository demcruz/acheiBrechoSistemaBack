const mongoose = require('mongoose')
const schema = mongoose.Schema


const produtos = new mongoose.Schema({
  
    nomeDescricao: String,
    tamanho: String,
    preco: Number,
    categoria: String,
    dataCadastro: String

})

const acheiBrechoSchema = new mongoose.Schema({
    nome: String,
    sobreNome: String,
    whatsApp: String,
    email: String,
    produtos: [produtos]      

})






const  acheiBrecho = mongoose.model('acheiBrechoSchema', acheiBrechoSchema)

module.exports = acheiBrecho