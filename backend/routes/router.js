const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

//Create user
router.post('/users/:a', async(req, res) => {
    const {name, email, password} = req.body
    const action = req.params.a

    switch(action) {
        // register user
        case "register":
            const existing_user = await schemas.Users.findOne({email: email})

            if(existing_user) {
                res.send('Email is already in use')
            } else {
                const userData = {name: name, email: email, password: password}
                const newUser = new schemas.Users(userData)
                const saveUser = await newUser.save()
                res.send('User created!')
            }

            break

        // log-in attempt
        case "log-in":
            const attempt = await schemas.Users.findOne({email: email, password: password})
            if (!attempt) {
                res.send('Invalid email or password')
            } else {
                res.send('Login successful! Redirecting...')
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
module.exports = router
