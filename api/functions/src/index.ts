const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

/**
* Here we're using Gmail to send 
* Account: social.assurance.m.test@gmail.com
* Birthdy: Jan 1, 2000
* Gender: Popcorn
* password: SAp@ssword33
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'social.assurance.m.test@gmail.com',
        pass: 'SAp@ssword33'
    }
});

exports.sendMail = functions.https.onRequest((req: any, res: any) => {
    cors(req, res, () => {
        let personalTrust = req.body;

        const mailOptions = {
            from: 'Social Assurance <social.assurance.m.test@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: personalTrust.email,
            subject: 'Your Personal Trust Results', // email subject
            html: `<h2 style="font-size: 24px;">Personal Trust for ${personalTrust.email},</h2>
                <br />
                <h3 style="font-size: 18px;">Co-Creation</h3> 
                <p style="font-size: 14px;">${personalTrust.cocreation}</p>
                <br/>
                <h3 style="font-size: 18px;">Commitment</h3> 
                <p style="font-size: 14px;">${personalTrust.commitment}</p>
                <br/>
                <h3 style="font-size: 18px;">Connection</h3> 
                <p style="font-size: 14px;">${personalTrust.connection}</p>
                <br/>
                <h3 style="font-size: 18px;">Consistency</h3> 
                <p style="font-size: 14px;">${personalTrust.consistency}</p>
                <br/>
                <h3 style="font-size: 18px;">Control</h3> 
                <p style="font-size: 14px;">${personalTrust.control}</p>
            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro: any, info: any) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});