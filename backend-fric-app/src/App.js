//Imports
const express = require("express");
const cors = require("cors");
const app = express();
const systemRoutes = require("./routes/SystemRoutes");
const eventRoutes = require("./routes/EventRoutes");


//settings
app.set("port", 4000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(systemRoutes);
app.use(eventRoutes); 

//Export
module.exports = app;
