var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


var content = require('fs').readFileSync('./template.html','utf8');
 
// create reusable transporter object using SMTP transport

// options.port is the port to connect to (defaults to 25 or 465)
// options.host is the hostname or IP address to connect to (defaults to 'localhost')
// options.secure defines if the connection should use SSL (if true) or not (if false)
// options.auth defines authentication data (see authentication section below)
// options.ignoreTLS turns off STARTTLS support if true
// options.name optional hostname of the client, used for identifying to the server
// options.localAddress is the local interface to bind to for network connections
// options.connectionTimeout how many milliseconds to wait for the connection to establish
// options.greetingTimeout how many milliseconds to wait for the greeting after connection is established
// options.socketTimeout how many milliseconds of inactivity to allow
// options.debug if true, the connection emits all traffic between client and server as 'log' events
// options.authMethod defines preferred authentication method, eg. 'PLAIN'
// options.tls defines additional options to be passed to the socket constructor, eg. {rejectUnauthorized: true} 
var transporter = nodemailer.createTransport(smtpTransport({
    port: 465,
    host: 'smtp.qq.com',
    secure: true,
    auth: {
        user: '245292529',
        pass: 'XXXX'
    }
}));
 
// NB! No need to recreate the transporter object. You can use 
// the same transporter object for all e-mails 
 
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: 'XXXX@XX.com', // sender address 
    to: 'XXXX@XX.com', // list of receivers 
    subject: 'html', // Subject line 
    // text: 'Hello world teteteteteasddsads✔' // plaintext body 
    html: content // html body 
};
 
// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
 
});