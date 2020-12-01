//Imports
const express = require("express");
const socketIo = require("socket.io");
const cors = require("cors");
//Routes
const analystRoutes = require("./routes/AnalystRoutes");
const systemRoutes = require("./routes/SystemRoutes");
const eventRoutes = require("./routes/EventRoutes");
const findingRoutes = require("./routes/FindingRoutes");
const history = require("./routes/HistoryRoutes");
const analyst = require("./routes/AnalystRoutes");
const notification = require("./routes/NotificationRoutes");
const configuration = require("./routes/ConfigurationRoutes");
const taskRoutes = require("./routes/TaskRoute");
const subtaskRoute = require("./routes/SubtaskRoute");

const app = express();

//settings
app.set("port", 4000);

//Middlewares
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//Routes
app.use(analystRoutes)
app.use(systemRoutes);
app.use(eventRoutes);
app.use(history);
app.use(analyst);
app.use(findingRoutes);
app.use(notification);
app.use(configuration);
app.use(taskRoutes);
app.use(subtaskRoute);

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


// app.get('', (req, res) => {
//     request(
//       { url: 'https://localhost/3000' },
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//           return res.status(500).json({ type: 'error', message: err.message });
//         }
  
//         res.json(JSON.parse(body));
//       }
//     )
//   });

const server = app.listen(4000, '0.0.0.0', function(){
    console.log('listening for requests on port 4000');
});

// server-side
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    //allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    // socket.on('chat', function(data){
    //     // console.log(data);
    //     io.sockets.emit('chat', data);
    // });

});

//Export
module.exports = app;
