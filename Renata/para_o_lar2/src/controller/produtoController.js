const produtoModel = require("../models/produtoSchema");
const categoriaModel = require("../models/categoriaSchema");

const getAll = async (req, res) => {
    try {
        const allprodutos = await produtoModel.find();
        res.status(200).send(allprodutos);
    } catch(err) {
        console.error(err)
    };
};

const getprodutosComCategoria = async (req, res) => {
    const allprodutos = await produtoModel.find(
        { categoria: { $exists: true } }
        );

    res.status(200).send(allprodutos);
};


const createProduto = async (req, res) => {
     try {
         
         const { nome, cor, tamanho, quantidade, categoria } = req.body;

         const newProduto = await produtoModel.create({ nome, cor, tamanho, quantidade, categoria });
         console.log("Produto criado com sucesso", newproduto)

         if(categoria) {
            
             const newCategoria = await new categoriaModel({name: categoria, produto: newProduto});
             console.log("Nova Categoria foi criada", newCategoria)
    
  
             await newCategoria.save();
    
             
             newProduto.categoria = newCategoria._id;
         }

         
         const savedNote = await newProduto.save();
         console.log("Produto criado no Banco", savedNote)

         
         if(savedNote) {
             res.status(201).send({
                 "message": "Produto criada com sucesso",
                 savedNote
             })
         }
     } catch(e) {
         console.error(e)
     }
};

const updateProduto = async (req, res) => {
    try {
        const findProduto = await produtoModel.findById(req.params.id)
        console.log("Produto Encontrado", findNote);

        if(!findProduto){
            res.status(404).send({
                "message": "Produto não encontrado",
                "statusCode": 404
            })
        }

    
        findProduto.nome = req.body.nome || findProduto.nome
        findProduto.cor = req.body.cor || findProduto.cor
        findProduto.tamanho = req.body.tamanho || findProduto.tamanho
        findProduto.quantidade = req.body.quantidade || findProduto.quantidade
        findProduto.categoria = req.body.categoria || findProduto.categoria

        
        const savedNote = await findProduto.save()

 
        res.status(200).send({
            "message": "Produto atualizado com sucesso",
            savedNote
        })

    } catch(err) {
        console.error(err)
    }
   
};

const deleteProduto = async (req,res) => {
    try {
          const deletedProduto = await produtoModel.findByIdAndDelete(req.params.id)

        res.status(200).send({
            "message": "Produto deletado com sucesso",
            deletedProduto
        })
    } catch(err) {
        console.error(err);
    };
};

module.exports = {
    getAll,
    getprodutosComCategoria,
    createProduto,
    updateProduto,
    deleteProduto
};