const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {type:String},
    email: {type:String},
    password: {type:String},

    //entryDate: {type:Data, default:Date.now}

})

const Users = mongoose.model('Users', userSchema, 'users')

//schema posts

//My Schema Names
const mySchemas = {'Users':Users}
module.exports = mySchemas
