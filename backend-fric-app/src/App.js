//Imports
const express = require("express");
const cors = require("cors");
const app = express();
const systemRoutes = require("./routes/SystemRoutes");
const eventRoutes = require("./routes/EventRoutes");
const findingRoutes = require("./routes/FindingRoutes");
const history = require("./routes/HistoryRoutes");
const analyst = require("./routes/AnalystRoutes");
const notification = require("./routes/NotificationRoutes");
const configuration = require("./routes/ConfigurationRoutes");
const taskRoutes = require("./routes/TaskRoute");
const subtaskRoute = require("./routes/SubtaskRoute");


//settings
app.set("port", 4000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(systemRoutes);
app.use(eventRoutes);
app.use(history);
app.use(analyst);
app.use(findingRoutes);
app.use(notification);
app.use(configuration);
app.use(taskRoutes);
app.use(subtaskRoute);

//Export
module.exports = app;
