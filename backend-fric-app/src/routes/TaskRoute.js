//Imports
const mongoose = require("mongoose");

//DB connection
const URL = 'mongodb://127.0.0.1:27017/fricdb';

mongoose.connect(URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

//DB responses
const connection = mongoose.connection;

connection.once("open", () => console.log("MongoDB database connection to " + URL +" established successfully"));