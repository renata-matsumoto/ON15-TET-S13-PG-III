const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    cor: {
        type: [String],
        required: true
    },
    tamanho: {
      type: Number,
      required: true
    },
    quantidade: {
      type: Number,
      required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoria"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('produto', produtoSchema);