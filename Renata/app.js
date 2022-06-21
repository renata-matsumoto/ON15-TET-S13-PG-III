const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./src/database/mongoConfig');
db.connect();

const noteRoutes = require('./src/routes/noteRoutes');

app.use(express.json());
app.use("/notes", noteRoutes);

module.exports = app;