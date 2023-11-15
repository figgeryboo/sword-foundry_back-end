
const cors = require("cors");
const express = require("express");
const swordsController = require('./controllers/swordsController')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/swords', swordsController)

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Sword Smith");
});


app.get('*', (req, res) => {
  res.status(404).send('Error: Invalid Route')
})


module.exports = app;