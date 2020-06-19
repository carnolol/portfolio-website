require("dotenv").config()
const massive = require ("massive")
const express = require("express")
const session = require('express-session')
const skillsCtrl = require('./skillsController')
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