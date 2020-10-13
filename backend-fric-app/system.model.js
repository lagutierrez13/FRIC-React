const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let System = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    no_of_findings: {
        type: String
    },
    
});

module.exports = mongoose.model('System', System);