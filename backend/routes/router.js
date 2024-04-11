const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')
const validator = require('validator')


//Create user
router.post('/users/:a', async(req, res) => {
    const {name, email, password} = req.body
    const action = req.params.a

    switch(action) {
        // register user
        case "register":
            const existing_user = await schemas.Users.findOne({email: email})
            if (!validator.isEmail(email)) {
                res.send({message: 'Email is invalid'})
            } else if (existing_user) {
                res.send({message: 'Email is already in use'})
            } else if (password.length < 8) {
                res.send({message: 'Password must be at least 8 characters long'})
            } else {
                const userData = {name: name, email: email, password: encode(password)}
                const newUser = new schemas.Users(userData)
                const saveUser = await newUser.save()
                res.send({message: 'User created!', redirect: '/login'})
            }

            break

        // log-in attempt
        case "log-in":
            const attempt = await schemas.Users.findOne({email: email, password: encode(password)})
            if (!attempt) {
                res.send({message: 'Invalid email or password'})
            } else {
                res.send({message: 'Login successful! Redirecting...', redirect: '/'})
            }
            break

        // delete user placeholder
        case "delete":
            res.send('IN PROGRESS')
            break

        // invalid route
        default:
            res.send('Invalid')
            break
    }
    res.end()

})

// router.get('/users', async(req, res) => {
//     const users = schemas.Users
//     const userData = {name: name, email: email, password: password}
//     userData = await users.find({}).exec()
//     if (userData) {
//         res.send(JSON.stringify(userData))
//     }
// })
//Example of communication between front and back
/*
router.get('/users', (req, res) => {
    const userData = [{}]
})
*/

//Password cypher and decypher

function encode(s){
    let newS = "";

    for (let i = 0; i < s.length; i++) {

        var hex = Number(s.charCodeAt(i)).toString(16);
        newS += hex;
       // let val = s[i].charCodeAt(0).toString(16);
       // newS += String.fromCharCode(val);
       //newS += ("000"+ val).slice(-4);

    }
    return newS;
}

//Decoder not needed
/*
function decode(s){
    let oldS = "";
    //let oldVal = Buffer.from(s, 'hex');
    var hex = s.toString();
    for(var i = 0; i < hex.length; i +=2){
        oldS += String.fromCharCode(parseInt(hex.substr(i,2), 16))
    }
    return oldS;

}
*/ 


module.exports = router
