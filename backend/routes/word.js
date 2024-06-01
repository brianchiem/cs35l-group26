const express = require('express')

// controller functions
const {getWord, getWords, createWord} = require('../controllers/wordController')

const router = express.Router()

// get all words
router.get('/', getWords)

// get a word
router.get('/:date', getWord)

// create a word
router.post('/', createWord)

// edit a word
router.patch('/:id', )

// delete word (feature)
router.delete('/:id', )

module.exports = router