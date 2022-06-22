const mongoose = require('mongoose');

const DestinoSchema = mongoose.Schema({
  _id:{
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  title:{
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  capital: String,
  language: String,
  what_to_do: [String],
  food: [String],
  likes: Number,
}, {timestamps: true})

const Model = mongoose.model("destinos", DestinoSchema)
module.exports = Model
