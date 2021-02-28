const mongoose = require("mongoose")
const Schema = mongoose.Schema

const betSchema = new Schema({
    bet: {
        type: String,
    },
    wager: {
        type: Number,
    }
})
module.exports = mongoose.model("Bet", betSchema)