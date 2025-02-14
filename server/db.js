const mongoose = require('mongoose');
const mongoURI = process.env.REACT_APP_MONGO_URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connect To Mongo");
    })
}

module.exports = connectToMongo;