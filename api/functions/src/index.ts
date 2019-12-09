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
        let personalTrust = req.body[0];
        let brandTrust = req.body[1];
        let innovationTrust = req.body[2];

        const mailOptions = {
            from: 'Social Assurance <social.assurance.m.test@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: personalTrust.email,
            subject: 'Your Trust Results', // email subject
            html: `<h2 style="font-size: 24px;">Personal Trust for ${personalTrust.email},</h2>
                <br />
                <h3 style="font-size: 18px;">Co-Creation</h3> 
                <p style="font-size: 14px;">${personalTrust.coCreation}</p>
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

                <br/>
                <h2 style="font-size: 24px;">Innovation Trust</h2>
                <br />
                <h3 style="font-size: 18px;">Promise</h3> 
                <p style="font-size: 14px;">${innovationTrust.promise}</p>
                <br/>
                <h3 style="font-size: 18px;">Relative Trust</h3> 
                <p style="font-size: 14px;">${innovationTrust.relativeTrust}</p>
                <br/>
                <h3 style="font-size: 18px;">Social Proof</h3> 
                <p style="font-size: 14px;">${innovationTrust.socialProof}</p>
                <br/>
                <h3 style="font-size: 18px;">User Experience</h3> 
                <p style="font-size: 14px;">${innovationTrust.userExperience}</p>

                <br/>
                <h2 style="font-size: 24px;">Brand Trust</h2>
                <br />
                <h3 style="font-size: 18px;">Associations</h3> 
                <p style="font-size: 14px;">${brandTrust.associations}</p>
                <br/>
                <h3 style="font-size: 18px;">Call to Action</h3> 
                <p style="font-size: 14px;">${brandTrust.callToAction}</p>
                <br/>
                <h3 style="font-size: 18px;">Conflict</h3> 
                <p style="font-size: 14px;">${brandTrust.Conflict}</p>
                <br/>
                <h3 style="font-size: 18px;">Inciting Incidents</h3> 
                <p style="font-size: 14px;">${brandTrust.incitingIncidents}</p>
                <br/>
                <h3 style="font-size: 18px;">Vision</h3> 
                <p style="font-size: 14px;">${brandTrust.vision}</p>
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