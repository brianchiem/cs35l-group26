const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    friends: {
        type: Array,
        default: []
    },
    streak: {
        type: Number
    },
    daily: {
        type: Boolean
    }
}, {timestamps: true})

// static login method
userSchema.statics.login = async function(identifier, password) {
    const email = identifier
    const username = identifier

    if (!identifier || !password) {
        throw Error('All fields must be filled.')
    }

    const userEmail = await this.findOne({email})
    const userName = await this.findOne({username})

    if (!userEmail && !userName) {
        throw Error('Incorrect email or username.')
    }

    if (userEmail) {
        const match = await bcrypt.compare(password, userEmail.password)

        if (!match) {
            throw Error('Incorrect password.')
        }

        return userEmail
    } else {
        const match = await bcrypt.compare(password, userName.password)

        if (!match) {
            throw Error('Incorrect password.')
        }

        return userName
    }
}

// static signup method
userSchema.statics.signup = async function(email, password, username) {

    // validation
    if (!email || !password || !username) {
        throw Error('All fields must be filled.')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid.')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough.')
    }


    const emailExists = await this.findOne({email})
    const usernameExists = await this.findOne({username})

    if (emailExists) {
        throw Error('Email already in use.')
    }
    if (usernameExists) {
        throw Error('Username already in use.')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, username, password: hash})

    return user
}

module.exports = mongoose.model('User', userSchema)