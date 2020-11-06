const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const systemRoutes = express.Router();
const PORT = 4000;

let System = require('./system.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/fricdb', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

systemRoutes.route('/').get(function(req, res) {
    System.find(function(err, system) {
        if (err) {
            console.log(err);
        } else {
            res.json(system);
        }
    });
});

systemRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    System.findById(id, function(err, system) {
        res.json(system);
    });
});

systemRoutes.route('/update/:id').post(function(req, res) {
    System.findById(req.params.id, function(err, system) {
        if (!system)
            res.status(404).send("data is not found");
        else
            system.title = req.body.title;
            system.description = req.body.description;
            system.no_of_findings = req.body.no_of_findings;
            
            system.save().then(system => {
                res.json('system updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

systemRoutes.route('/add').post(function(req, res) {
    let system = new System(req.body);
    system.save()
        .then(system => {
            res.status(200).json({'system': 'system added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

app.use('/home/systems/', systemRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});