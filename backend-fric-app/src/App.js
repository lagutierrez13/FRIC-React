//Imports
const express = require("express");
const cors = require("cors");
const app = express();
const systemRoutes = require("./routes/SystemRoutes");
const eventRoutes = require("./routes/EventRoutes");
const eventClassificationTableRoutes = require("./routes/Configuration/EventClassificationTableRoutes");
const eventTypeTableRoutes = require("./routes/Configuration/EventTypeTableRoutes");
const eventRulesTableRoutes = require("./routes/Configuration/EventRulesTableRoutes");
const findingRoutes = require("./routes/FindingRoutes");
const history = require("./routes/HistoryRoutes");
const analyst = require("./routes/AnalystRoutes");


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
app.use(history);
app.use(analyst);
app.use(findingRoutes);

//Export
module.exports = app;
