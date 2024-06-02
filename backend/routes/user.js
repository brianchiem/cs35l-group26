const express = require('express')

// controller functions
const {loginUser, signupUser, deleteUser, updateUser, getUsers, getUser, getUser2, updateUser2, getUsers2} = require('../controllers/userController')

const router = express.Router()

// get all workouts
router.get('/', getUsers)

router.get('/2', getUsers2)

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// delete route (feature)
router.delete('/:id', deleteUser)

// update route (feature)
router.patch('/:id', updateUser)

//router.get('/:id', getUser)

router.get('/:username', getUser2)

router.post('/setwin', updateUser2)

module.exports = router