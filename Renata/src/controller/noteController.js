
const NoteModel = require('../models/noteSchema')
const TagModel = require('../models/tagSchema');



const findAllNotes = async(req, res) => {
  try {
    const allNotes = await NoteModel.find()
    
    res.status(200).json(allNotes)
  } catch (error) {
    res.status(500).json({ message: error.message })                               
  }
}

const findById = async(req, res) => {
  try {
    const noteById = await NoteModel.findById(req.params.id)
    res.status(200).json(noteById)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createNote = async(req, res) => {
  // const {author, title, createdAt} = req.body
  try{

    if(!req.body.author || !req.body.title) {
      res.status(404).send({
         "message": "Os campos obrigatórios precisam ser enviados",
         "statusCode": 404
      })
 }

    const newNote = new NoteModel({
      author: req.body.author,
      title: req.body.title,
      createdAt: new Date()
    })
    const savedNote = await newNote.save()
    res.status(201).json({
      message: "Nota Criada com sucesso",
      savedNote
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const updateNote = async (req, res) => {
  try {
    const findNote = await NoteModel.findById(req.params.id)
    if(!findNote){
      res.status(404).send({
        "message":"Nota não encontrada",
        "statusCode": 404
      })
    }
    findNote.author = req.body.author || findNote.author
    findNote.title = req.body.title || findNote.title

    const saveNote = await findNote.save()


    res.status(200).json({
      message:"Nota atualizada com sucesso",
      saveNote,
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const deleteNote = async (req, res) => {
  try {
    // const findNote = await NoteModel.findById(req.params.id)
    // await findNote.delete()

    const deleteNote = await NoteModel.findByIdAndDelete(req.params.id)

    res.status(200).json({
      "message": "Nota deletada com sucesso",
       deleteNote })
  } catch (error){
    res.status(500).json({message: error.message})
  }
}
module.exports = {
  findAllNotes,
  findById,
  createNote,
  updateNote,
  deleteNote
}