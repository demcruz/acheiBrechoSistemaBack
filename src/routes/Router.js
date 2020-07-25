const express = require('express')
const router = express.Router()
const acheiController = require('../controller/acheiBrechoController')



router.get('/achei', acheiController.read)

router.post('/achei', acheiController.create)

router.put('/achei/:id', acheiController.update)

router.delete('/achei/:id', acheiController.delete)


module.exports = router