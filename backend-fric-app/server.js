const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = express.Router();
const PORT = 4000;

let EventClassificationTable = require('./EventClassificationtable.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/fric_db', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

routes.route('/').get(function(req, res) {
    EventClassificationTable.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

routes.route('/add').post(function(req, res) {
    let eventClassificationTable = new EventClassificationTable(req.body);
    eventClassificationTable.save()
        .then(eventClassificationTable => {
            res.status(200).json({'eventClassificationTable': 'eventClassificationTable added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new eventClassificationTable failed');
        });
});

app.use('/fric_db', routes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});