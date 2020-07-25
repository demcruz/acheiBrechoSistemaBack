const AcheiBrecho = require('../model/acheiBrechoEntity')

exports.create = (req, res) => {  

    const cadastroAcheiBrecho = new AcheiBrecho({
        nome: req.body.nome,
        sobreNome: req.body.sobreNome,
        whatsApp: req.body.whatsApp,
        email: req.body.email,
        produtos: req.body.produtos,
        nomeDescricao: req.body.nomeDescricao,
        tamanho: req.body.tamanho,
        preco: req.body.preco,
        categoria: req.body.categoria,
        dataCadastro: req.body.data

    })
    cadastroAcheiBrecho.save().then(data => {
        if(data.nome === ""){
            res.send("nome não pode ser null")
            console.log("nome não pode ser nulo")
        }

        res.send(data)
        console.log(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })

    })
}


exports.read = (req, res) => {
    AcheiBrecho.find().then(data => {
        res.send(data)
    }).catch(err => {
        message: err.message
    })
}


exports.update = (req, res) =>{
    const id = ({_id : req.params.id})
    const cadastro = {
        nome: req.body.nome,
        sobreNome: req.body.sobreNome,
        whatsApp: req.body.whatsApp,
        email: req.body.email,
        produtos: req.body.produtos,
        nomeDescricao: req.body.nomeDescricao,
        tamanho: req.body.tamanho,
        preco: req.body.preco,
        categoria: req.body.categoria,
        dataCadastro: req.body.data
  }

    AcheiBrecho.updateOne(id, cadastro).then(data =>{
        console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err.message)
            message: err.message
        
        })        
}

exports.delete = (req, res) =>{
    const id = ({_id : req.params.id})
    AcheiBrecho.findByIdAndRemove(id).exec()
    .then(data =>{
        console.log(data + 'deletado com sucesso')
        res.send(data)
    }).catch(err => {
        console.log(err.message)
        message: err.message
    
    }) 

}