const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
config = require('./db');
const formationRoutes = require("./routes/formation.route");
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use(cors());
app.use(bodyParser.json());
app.use('/formation', formationRoutes);

app.listen(3000, ()=> console.log("Listenig on port 3000"));
