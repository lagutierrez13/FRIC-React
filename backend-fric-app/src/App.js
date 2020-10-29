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
const notification = require("./routes/NotificationRoutes");
<<<<<<< HEAD
const configuration = require("./routes/ConfigurationRoutes");
=======
const taskRoutes = require("./routes/TaskRoute");
const subtaskRoute = require("./routes/SubtaskRoute");
>>>>>>> beca10b90770e12d70695585ab8e922be9dcb2eb


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
app.use(notification);
<<<<<<< HEAD
app.use(configuration);

=======
app.use(taskRoutes);
app.use(subtaskRoute);
>>>>>>> beca10b90770e12d70695585ab8e922be9dcb2eb

//Export
module.exports = app;
