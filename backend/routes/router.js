const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

//Create user
router.post('/users/:a', async(req, res) => {
    const {userName, email, password} = req.body
    const action = req.params.a

    switch(action){
        case "send":
            const userData = {userName: userName, email: email, password: password}
            const newUser = new schemas.Users(userData)
            const saveUser = await newUser.save()
            if(saveUser){
                res.send('Message sent')
            }else{
                res.send('Failed to send')
            }
            break;

            default:
                res.send('Invalid')
                break
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
