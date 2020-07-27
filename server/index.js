require("dotenv").config()
const massive = require ("massive")
const express = require("express")
const session = require('express-session')
const path = require('path')
const skillsCtrl = require('./skillsController')
const mailCtrl = require('./mailController')
const { mail } = require("./mailController")
const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 365},
        secret: SESSION_SECRET,
    })
)


//* Skills Endpoints
app.get('/skills', skillsCtrl.getSkills)
app.get('/backend', skillsCtrl.getBackendSkills)
app.get('/other', skillsCtrl.getOtherSkills)

//* MAIL 
app.post('/mail', mailCtrl.mail)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(dbInstance => {
    app.set("db", dbInstance)
    console.log('DB IS CONNECTED')
    app.listen(SERVER_PORT, () =>  console.log(`DOCKED AT PORT ${SERVER_PORT}`))
})

app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})
