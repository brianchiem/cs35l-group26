const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, 'goated', {expiresIn: '1d'})
}

// login user
const loginUser = async (req, res) => {
    const {identifier, password} = req.body

    try {
        const user = await User.login(identifier, password)

        // create a token
        const token = createToken(user._id)

        const {email, username, friends, _id} = user
        res.status(200).json({email, username, friends, _id, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const {email, password, username} = req.body

    try {
        const user = await User.signup(email, password, username)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete user (feature)
const deleteUser = async (req, res) => {

}

module.exports = {loginUser, signupUser, deleteUser}