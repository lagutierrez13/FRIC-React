// //Imports
// const app = require("./App");
// require("./db/mongoose");

// //Server function
// async function main() {
//   await app.listen(app.get("port"));
//   console.log(`Server on port ${app.get("port")}`);
// }

// //Server listen
// main();

//const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const socketIo = require("socket.io");
const analystRoutes = require("./routes/AnalystRoutes");

//const app = express();
const app = require("./App");
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use(analystRoutes);

const port = process.env.PORT || 4000; // process.env.port is Heroku's port if you choose to deploy the app there

// const server = app.listen(port, function(){
//   console.log('listening for requests on port 4000,');
// });

