//Imports
const express = require("express");
const cors = require("cors");
const app = express();
const systemRoutes = require("./routes/SystemRoutes");
const eventRoutes = require("./routes/EventRoutes");
const eventClassificationTableRoutes = require("./routes/Configuration/EventClassificationTableRoutes");
const eventTypeTableRoutes = require("./routes/Configuration/EventTypeTableRoutes");
const eventRulesTableRoutes = require("./routes/Configuration/EventRulesTableRoutes");

//settings
app.set("port", 4000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(systemRoutes);
app.use(eventRoutes);
app.use(eventClassificationTableRoutes);
app.use(eventTypeTableRoutes);
app.use(eventRulesTableRoutes);


//Export
module.exports = app;
