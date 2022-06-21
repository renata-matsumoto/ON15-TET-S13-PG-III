const controller = require('../controller/noteController')

const express = require('express');

const router = express.Router()

router.get('/all', controller.findAllNotes)

router.get('/:id', controller.findById)

router.post('/create', controller.createNote)

router.put('/update/:id', controller.updateNote)

router.delete('/delete/:id', controller.deleteNote)

module.exports = router