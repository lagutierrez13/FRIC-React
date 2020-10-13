const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventClassificationTable = new Schema({
    required: {
        type: Boolean
    },
    values: {
        type: [String]
    }
});

module.exports = mongoose.model('eventClassificationTable', EventClassificationTable);