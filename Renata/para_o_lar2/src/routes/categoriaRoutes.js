const express = require("express");
const router = express.Router();

const controller = require("../controller/categoriaController");

router.get("/all", controller.getAll);

router.get("/color", controller.getCategoriaPorCor);

router.post("/create", controller.createCategoria);

module.exports = router;