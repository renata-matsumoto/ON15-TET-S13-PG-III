const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

const noteRoutes = require('./routes/noteRoutes');

app.use("/notes", noteRoutes);

module.exports = app