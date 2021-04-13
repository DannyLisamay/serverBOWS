// BOWS UML GUI2 project
// Authors: Danny Lisamay, Taylor Youth, Zion Ko

// .env
require('dotenv').config();
// Express js
const express = require("express");
// Body parser
const bodyParser = require("body-parser");
const ejs = require("ejs");
// Lodash
const _ = require("lodash");
// MongoDB
const mongoose = require("mongoose");
// Local port 3000 used for testing.
const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// Public folder used for css, and other files on local host.
app.use(express.static("public"));

// Connent mongoDB using .env for enviroment varibles
mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.k5s63.mongodb.net/BOWS?retryWrites=true&w=majority", {useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

// Homepage
app.get("/", (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`BOWS app listening at http://localhost:${port}`)
});
