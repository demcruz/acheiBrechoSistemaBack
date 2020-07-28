const express = require('express')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = process.env.PORT 

app.use(bodyParser.urlencoded({extend: true}))
app.use(cors())
app.use(bodyParser.json())

const dbconfig = require('./src/server/serverDB')

mongoose.Promise = global.Promise


mongoose.connect(dbconfig.url, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
}).then(() =>{
    console.log("Sucesso conectado ao Banco")
}).catch(err => {
    console.log('não conectado', err);
    process.exit()
})

const routes = require('./src/routes/Router')
app.use('/', routes)




app.listen(port, () => {
    console.log(`Serviço na porta ${port}`)
})
