const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

app.use(express.json());

const produtoRoutes = require('./routes/produtoRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

app.use("/produto", produtoRoutes);
app.use("/categoria", categoriaRoutes);

module.exports = app;