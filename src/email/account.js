const sgMail = require('@sendgrid/mail') 

const SENDGRIP_API_KEY = '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'

sgMail.setApiKey(SENDGRIP_API_KEY)

const sendEmail = (obj) => {
    console.log('here ')
    var additionalService = "";

    if(Object.keys(obj).forEach((service)=>{
        if(service == "ser1"){
            additionalService += "\n - Start-up spill over spa at time of opening\n" 
        }else if(service == 'ser2'){
            additionalService += " - Vacuum pool at time of opening/start-up/per hour\n"
        }else if(service == 'ser3'){
            additionalService += " - Salt cell inspection and cleaning at time of opening or closing\n"
        }else if(service == 'ser4'){
            additionalService += " - Cartridge cleaning with concentrated cleaner (onsite)\n"
        }else if(service == 'ser5'){
            additionalService += " - Add salt to the pool\n"
        }
    }))
    
    console.log('here 1')

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
        Additional Service Requested: \n${additionalService}\n 
        Address of the Requestor: ${obj.Address}\n
        Project Timeline: ${obj.projectTimeline}\n
        How did the Requestor hear about us: ${obj.hearAboutUs}\n
        Additional Details: ${obj.message}\n\n
        Please respond in 1 Day :)\n
        Thank you!\n\n
        Yours Sincerely,\n
        Fits Pool Service Website`
    })
    .then(()=>{
        console.log('Sent')
    })
    .catch((error)=>{
        console.error('error ', error)
    })
    console.log('end')
}

module.exports = {
    sendEmail
}