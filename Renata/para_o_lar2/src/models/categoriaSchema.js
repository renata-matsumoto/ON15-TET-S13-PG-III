const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    
    produto: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "produto"
        }
    ]
});

module.exports = mongoose.model('categoria', categoriaSchema);