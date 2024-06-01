const Word = require('../models/wordModel')
const mongoose = require('mongoose')

// get all words
const getWords = async (req, res) => {
    const words = await Word.find({}).sort({createdAt: -1})

    res.status(200).json(words)
}

// get a single word
const getWord = async (req, res) => {
    const {date} = req.params

    const word = await Word.findOne({date})

    if (!word) {
        return res.status(404).json({error: 'no such word'})
    }

    res.status(200).json(word)
}

const createWord = async(req, res) => {
    const {word, date} = req.body

    // if (word.length() !== 5) {
    //     return res.status(400).json({error: 'invalid word'})
    // }

    try {
        const wordd = await Word.create({word, date})
        res.status(200).json(wordd)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getWord, getWords, createWord}