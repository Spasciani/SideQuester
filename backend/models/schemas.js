const mongoose = require('mongoose')

// to handle stupid mongoose unique validator handler
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

//schema for user creation
const userSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    //entryDate: {type:Data, default:Date.now}

})

//Schema for post creation
const postSchema = new Schema({
    name: {type:String, required: true},
    phoneNumber: {type:String, required: true},
    description: {type: String, required: true},
    reward: {type:String, required: true},
    place: {type:String, required: true},
    image: {type:String, required: false},

})


userSchema.plugin(uniqueValidator)
const Users = mongoose.model('Users', userSchema, 'users')
const Posts = mongoose.model('Posts', postSchema, 'posts')

// quest schema placeholder
// const questSchema = new Schema( {
//
// })


//schema posts

//My Schema Names
const mySchemas = {'Users':Users, 'Posts':Posts}
module.exports = mySchemas
