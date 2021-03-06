const sgMail = require('@sendgrid/mail') 

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey)

const sendEmail = (obj) =>{
    sgMail.send({
        to: 'sahibarora1997@gmail.com',
        from: 'sarora37@outlook.com',
        subject: '[Website] Quote Requested',
        text: `Hi Jason,\n\nWe need your attention\n\n A Quote has been requested.\n\nHere are the details -\n
        Name: ${obj.name}\n
        Phone: ${obj.phone}\n
        Email: ${obj.email}\n
        Method of Contact: ${obj.methodOfContact}\n
        Service Requested: ${obj.services}\n
        Address of the Requestor: ${obj.Address}\n
        Project Timeline: ${obj.projectTimeline}\n
        How did the Requestor hear about us: ${obj.hearAboutUs}\n
        Additional Details: ${obj.message}\n\n
        Please respond in 2 to 3 Days :)\n
        Thank you!\n\n
        Yours Sincerely,\n
        Fits Pool Service Website`
    })
}

module.exports = {
    sendEmail
}