const express = require('express')
const router = express.Router()
const cloudinary = require('../utils/cloudinary')
const upload = require('../middleware/multer')

router.post('/', upload.single('file'), function(req, res) {
    cloudinary.uploader.upload(req.file.path, function (err, result) {
        if (err) {
            console.log(err)
            return res.status(400).json({
                success: false,
                message: "Error"
            }) 
        }
        res.status(200).json(result)
    })
})

module.exports = router