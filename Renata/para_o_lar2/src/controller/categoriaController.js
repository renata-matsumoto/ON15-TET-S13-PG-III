const categoriaModel = require("../models/categoriaSchema");
const produtoModel = require("../models/produtoSchema");

const getAll = async (req, res) => {
    try {
        const allCategorias = await categoriaModel.find();
        res.status(200).send(allCategorias);
    } catch(err) {
        console.error(err)
    }
};

const getCategoriaPorCor = async (req, res) => {
    const colorRequested = req.query.cor;
    console.log(colorRequested)

    const categoriaPorCor = await categoriaModel.find(
        { colors: { $eq: "blue" } }
    );
    
    res.status(200).send(categoriaPorCor)
};

const createCategoria = async (req, res) => {
    try {
       
        const produtos = req.body.produtos;
        
        const name = req.body.name;

        
        const categoria = await categoriaModel.create({ name, cor });

        
        if(produtos) {
            
            await Promise.all(produtos.map(async produto => {
               
                const produtoComCategoria = new produtoModel({ ...produto, categoria: categoria._id});
    
                
                await produtoComCategoria.save();
    
                
                categoria.produtos.push(produtoComCategoria);
            }));
        }
 
        await categoria.save();

      
        return res.send({categoria });
    } catch(e) {
        console.error(e)
    }
};


module.exports = {
    getAll,
    createCategoria,
    getCategoriaPorCor
}