const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    },
    continent: {
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    currency: {
        type: String,
        required: true
    },
},
{
    versionKey: false
})


module.exports = mongoose.model("Country", countrySchema)