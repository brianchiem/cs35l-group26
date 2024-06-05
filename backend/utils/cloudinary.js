const cloudinary = require('cloudinary').v2
          
cloudinary.config({ 
  cloud_name: 'dtbf4bkhl', 
  api_key: '226775531551787', 
  api_secret: 'nLtkZYQpQNARmSTKsRejZsA-Pdo' 
});

module.exports = cloudinary;