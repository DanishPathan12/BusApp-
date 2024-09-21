const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const BusSchema = new Schema({
    busNumber: {
        type: String,
        required: true,
        unique: true,
    },
    //location: { type: "Point", coordinates: [x, y] },
    driver: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Driver' }]
    }

})

const busSchema = mongoose.model('busSchema', BusSchema);

module.exports = busSchema;