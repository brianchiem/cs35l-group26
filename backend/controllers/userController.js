const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

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
        res.status(200).json(user)
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

        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete user (feature)
const deleteUser = async (req, res) => {

}

// update user
const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }
    console.log(user)
    res.status(200).json(user)
}

const updateUser2 = async (req, res) => {
    const { _id } = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user'})
    }

    const user = await User.findOneAndUpdate({_id}, {
        $inc: { quantity: 1, "streak": 1 }, daily: true 
    })

    if (!user) {
        return res.status(404).json({error: 'No such user'})
    }
    console.log(user)
    res.status(200).json(user)
}

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

const getUsers2 = async (req, res) => {
    const users = await User.find({}).sort({streak: -1})

    res.status(200).json(users)
}

const getUser = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
}

const getUser2 = async (req, res) => {
    const {username} = req.params
    const user = await User.find({"username": {"$regex": username, "$options": "i"}})
    if (user.length == 0) {
        res.status(404).json({error: "user not found"})
    } else {
        res.status(200).json(user)
    }
}


module.exports = {loginUser, signupUser, deleteUser, updateUser, getUsers, getUser, getUser2, updateUser2, getUsers2}