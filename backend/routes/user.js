const express = require('express')

// controller functions
const {loginUser, signupUser, deleteUser, updateUser, getUsers, getUser} = require('../controllers/userController')

const router = express.Router()

// get all workouts
router.get('/', getUsers)

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// delete route (feature)
router.delete('/:id', deleteUser)

// update route (feature)
router.patch('/:id', updateUser)

router.get('/:id', getUser)

module.exports = router