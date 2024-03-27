const mongoose = require('mongoose')

// to handle stupid mongoose unique validator handler
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    //entryDate: {type:Data, default:Date.now}

})
userSchema.plugin(uniqueValidator)
const Users = mongoose.model('Users', userSchema, 'users')

// quest schema placeholder
// const questSchema = new Schema( {
//
// })


//schema posts

//My Schema Names
const mySchemas = {'Users':Users}
module.exports = mySchemas
