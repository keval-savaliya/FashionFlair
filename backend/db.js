const mongoose = require('mongoose');

const mongoURI = process.env.MongoUrl

const mongoDB = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connected successfully')
    })
}

module.exports = mongoDB;