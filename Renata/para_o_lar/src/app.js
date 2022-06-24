const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

const melhoresDestinos = require('./routes/destinosRoutes');


app.use('/destinos', melhoresDestinos);




module.exports = app
