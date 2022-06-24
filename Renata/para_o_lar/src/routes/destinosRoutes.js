const controller = require('../controller/destinosController')

const express = require('express');

const router = express.Router()


router.get('/todos', controller.encontrarTodos)

router.post('/criar', controller.criarDestino)

router.put('/atualizar/:id', controller.atualizarDestino)

router.get('/todos/:id', controller.encontrarPorId)

router.delete('/delete/:id', controller.deletarDestino)

module.exports = router