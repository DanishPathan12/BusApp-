const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busrouteSchema = new Schema({
    busNumber: {
        type: String,
        required: true
    },
    route: {
        type: Number,
        required: true
    },
    coordinates: {
        type: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        },
        required: true,
        index: '2dsphere'
    }
});
const Busroute = mongoose.model('Busroute', busrouteSchema);
module.exports = Busroute;