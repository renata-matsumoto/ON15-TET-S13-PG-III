const express = require("express");
const router = express.Router();

const controller = require("../controller/produtoController");

router.get("/all", controller.getAll);

router.get("/comCategoria", controller.getprodutosComCategoria);

router.post("/create", controller.createProduto);

router.put("/update/:id", controller.updateProduto);

router.delete("/delete/:id", controller.deleteProduto);

module.exports = router;