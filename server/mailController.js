const nodemailer = require('nodemailer')
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com', 
    port: 587,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

module.exports = {
    mail: async (req, res) => {
        const {name, company, message} = req.body
        // console.log('NAME:', name)
        // console.log('MESSAGE:', message)
        let mailOptions = {
            from: 'follow.your.dota.pros@gmail.com',
            to: 'michael.chadwick91@gmail.com',
            subject: `${name} from ${company} would like to work together!!`,
            text: message
        }
        
        transporter.sendMail(mailOptions, function(err, data) {
            if(err){
                console.log('NODEMAILER ERROR:', err)
            } else {
                console.log('Email Sent!')
            }
        })
        res.status(200).send(mailOptions)
        console.log(mailOptions)
    },
}