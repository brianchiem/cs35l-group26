const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const wordRoutes = require('./routes/word')

// const multer = require('multer')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../wordle-clone/src/uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })
// const upload = multer({storage})

// express app
const app = express()


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
// app.post('/api/upload', upload.single('file'), function(req, res) {
//     res.json(req.file)
// })

app.use('/api/user', userRoutes)
app.use('/api/word', wordRoutes)


// connect to database
mongoose.connect("mongodb+srv://admin:admin@cs35lproject.3kciyku.mongodb.net/?retryWrites=true&w=majority&appName=cs35lproject")
    .then(() => {
        // listen for requests
        app.listen(4000, () => {
            console.log('Connected to database & listening on port', 4000)
        })
    })
    .catch((error) => {
        console.log(error)
    })

