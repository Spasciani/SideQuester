const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()

//This is for forms that I am following from the example, might remove bodyParser later
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}


app.use(cors(corsOptions))
app.use('/', router)


//MongoDB setup
//const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI)
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err))

const port = process.env.PORT || 4000
//const port = 4000
const server = app.listen(port, () => {
    console.log('Server is running on port 4000' )
})


/*
mongoose.connect(process.env.DB_URI, {dbName:"ISideQuestDB"})
.then(() => {
    console.log("connected to DB successfulyy");

    app.listen(4000, "localhost", () => console.log("listening on port 4000"));
})
.catch((err)=> console.log(err));
*/