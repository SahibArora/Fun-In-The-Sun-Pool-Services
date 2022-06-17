const sgMail = require('@sendgrid/mail') 

const SENDGRIP_API_KEY = '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'

sgMail.setApiKey(SENDGRIP_API_KEY)

const sendEmail = (obj) => {
    obj = {
        name: "abc",
        phone: 7689078890
    }
    console.log('here ')

    sgMail.send({
        to: 'jason@fitspoolservice.com',
        from: 'jason@fitspoolservice.com',
        cc: 'sahibarora1997@gmail.com',
        subject: '[Website] Quote Requested',
        text: `Hi Jason,\n\nWe need your attention\n\n A Quote has been requested.\n\nHere are the details -\n
        Name: Sahib\n
        Phone: 6479015626\n\n
        Please respond in 1 Day :)\n
        Thank you!\n\n
        Yours Sincerely,\n
        Fits Pool Service Website`
    }, ()=>{
        console.log('In the send')
    })
    .then(()=>{
        console.log('Sent')
    })
    .catch((error)=>{
        console.error('error ', error)
    })

    console.log('end')
}

sendEmail()