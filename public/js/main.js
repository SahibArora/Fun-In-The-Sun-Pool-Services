function validateForm(){
    return validatePhoneNumber()
}

function validateEmail(){
    var email = document.getElementById('email').value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase()) == false){
        document.getElementById('emailMessage').style.display = 'block'
        document.getElementById('email').style.borderColor = 'red'
        return false
    }

    document.getElementById('email').style.borderColor = 'green'
    document.getElementById('emailMessage').style.display = 'none'
    return true
}   

function validatePhoneNumber()
{
    var inputtxt = document.getElementById('phone').value;
    var phoneno = /^\d{10}$/;
    if(inputtxt.match(phoneno))
    {
        document.getElementById('phone').style.borderColor = 'green'
        document.getElementById('phoneMessage').style.display = 'none'
        return true;
    }
    else
    {
        document.getElementById('phoneMessage').style.display = 'block'
        document.getElementById('phone').style.borderColor = 'red'
        return false;
    }
}

function requestPlan(name){
    if(name == 'Liner Install'){
        document.getElementById('services').value = 'Liner Install'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Equipment Install'){
        document.getElementById('services').value = 'Equipment Install'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Pool Leak Detection'){
        document.getElementById('services').value = 'Pool Leak Detection'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Openings and Closings'){
        document.getElementById('services').value = 'Openings and Closings'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Swimming Pool Maintenance'){
        document.getElementById('services').value = 'Swimming Pool Maintenance'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Hot Tub Maintenance'){
        document.getElementById('services').value = 'Hot Tub Maintenance'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Chemical Checks'){
        document.getElementById('services').value = 'Chemical Checks'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Weekly Service'){
        document.getElementById('services').value = 'Weekly Service'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Safety Covers Install'){
        document.getElementById('services').value = 'Safety Covers Install'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Basic Opening Plan'){
        document.getElementById('services').value = 'Basic Opening Plan'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Popular Plan'){
        document.getElementById('services').value = 'Popular Plan'
        document.getElementById('additionalServicesBox').style.display = 'none'
    }else if(name == 'Additional Services'){
        document.getElementById('services').value = 'Additional Services'
        document.getElementById('additionalServicesBox').style.display = 'block'
    }
}

function checkAdditionalService(){
    if(document.getElementById('services').value == 'Additional Services'){
        document.getElementById('additionalServicesBox').style.display = 'block'
    }else{
        document.getElementById('additionalServicesBox').style.display = 'none'
    }
}