const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

//Create user
router.post('/users', async(req, res) => {
    const {userName, email, password} = req.body

    const userData = {userName: userName, email: email, password: password}
    const newUser = new schemas.Users(userData)
    const saveUser = await newUser.save()
    if(saveUser){
        res.send('User created')
    }
    res.end()

})

//Example of communication between front and back
/*
router.get('/users', (req, res) => {
    const userData = [{}]
})
*/
module.exports = router
