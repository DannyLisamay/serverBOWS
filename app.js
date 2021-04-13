// BOWS UML GUI2 project
// Authors: Danny Lisamay, Taylor Youth, Zion Ko

// .env
require('dotenv').config();
// Express js
const express = require("express");
// MongoDB
const mongoose = require("mongoose");
const { lowerFirst } = require('lodash');
// Local port 4000 used for testing.
const port = 4003;
const app = express();

// Public folder used for css, and other files on local host.
app.use(express.static("public"));
app.use(express.urlencoded()); //Parse URL-encoded bodies

// Connent mongoDB using .env for enviroment varibles
mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.k5s63.mongodb.net/BOWS?retryWrites=true&w=majority", { useNewUrlParser: true });
mongoose.set("useCreateIndex", true);

// Schema
const resortSchema = new mongoose.Schema({
  name: String,
  location: Object,
  price: Object
});

const resort = mongoose.model('Resort', resortSchema);

//RESTFUL API
//GET
app.get("/", (req, res) => {
  resort.find((err, resort) => {
    if (!err) {
      res.send(resort);
    } else {
      res.send(err);
    }
  });
});

//PUT
app.post("/", (req, res) => {

});


app.listen(port, () => {
  console.log(`BOWS app listening at http://localhost:${port}`)
});
