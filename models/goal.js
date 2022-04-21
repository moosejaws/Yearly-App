const mongoose = require('mongoose')
const Schema = mongoose.Schema

const goalSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    notes: {
        type: String
    },
    isCompleted: {
        type: Boolean, 
        default: false
    },
    username: {
        type: String,
        retuired: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Goal", goalSchema)