const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wordSchema = new Schema({
    word: {
        type: String,
        required: true
    }
}, {timestamps: true})