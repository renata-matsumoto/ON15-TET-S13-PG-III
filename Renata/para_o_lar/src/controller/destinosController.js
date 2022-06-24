const DestinoSchema = require('../models/destinosSchema')



const encontrarTodos = async (req, res) => {

  try {
    const todosDestinos = await DestinoSchema.find() 
    res.status(201).json(todosDestinos)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const criarDestino = async (req, res) => {
  const {
    title,
    country,
    capital,
    language,
    what_to_do,
    food,
    likes,
  } = req.body;
  try {
      const newDestiny = new DestinoSchema({
        title: title,
        country: country,
        capital: capital,
        language: language,  
        what_to_do: what_to_do,
        food: food,
        likes: likes,
      })
      const savedDestiny = await newDestiny.save()
      res.status(201).json(savedDestiny)   
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const encontrarPorId = async (req, res) => {
  try{
    const encontrarId = await DestinoSchema.findById(req.params.id)
    res.status(200).json(encontrarId)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const atualizarDestino = async (req, res) =>{
  try{
    const encontrarDestino = await DestinoSchema.findById(req.params.id)
    if(!encontrarDestino){
      res.status(404).send({
        "message": "Destino não encontrado",
        "statusCode": 404
      })
    }
    encontrarDestino.title = req.body.title || encontrarDestino.title
    encontrarDestino.country = req.body.country || encontrarDestino.country

    const saveDestiny = await encontrarDestino.save()

    res.status(201).json({
      message: "Destino atualizado com sucesso",
      saveDestiny
    })
  }catch (error){
    res.status(500).json({message: error.message})
  }
}

const deletarDestino = async (req, res) => {
  try {
    const deletaDestino = await DestinoSchema.findByIdAndDelete(req.params.id)
    res.status(200).json({
      "message": "Nota Deletada com sucesso",
      deletaDestino
    })
  }catch (error) {
    res.status(500).json({message: error.message})
  }
}
module.exports = {
  encontrarTodos,
  criarDestino,
  encontrarPorId,
  atualizarDestino,
  deletarDestino
}