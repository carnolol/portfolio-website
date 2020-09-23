const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

module.exports = {
    mail: async (req, res) => {
        const {name, message} = req.body
        // console.log('NAME:', name)
        // console.log('MESSAGE:', message)
        let mailOptions = {
            from: 'michael-and-claire@outlook.com',
            to: 'michael.chadwick91@gmail.com',
            subject: `${name} would like to work together!!`,
            text: `${name}'s message to you: ${message}`
        }
        
        transporter.sendMail(mailOptions, function(err, data) {
            if(err){
                console.log('NODEMAILER ERROR:', err)
            } else {
                console.log('Email Sent!' + data.response)
            }
        })
        res.status(200).send(mailOptions)
        console.log(mailOptions)
    },
}