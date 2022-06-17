function validateForm(){
    if(document.getElementById('methodOfContact').value == 'Email'){
        if(validateEmail() && validatePhoneNumber()){
            alert("Request received! \n\n We will get back to you in 1 Day! :)")
        }else{
            alert("An unknown Error has occured!")
        }
        return validateEmail() && validatePhoneNumber()
    }else{
        if(validatePhoneNumber()){
            alert("Request received! \n\n We will get back to you in 1 Day! :)")
        }else{
            alert("An unknown Error has occured!")
        }
        return validatePhoneNumber()
    }
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
        hideAdditionalServiceBox()
    }else if(name == 'Equipment Install'){
        document.getElementById('services').value = 'Equipment Install'
        hideAdditionalServiceBox()
    }else if(name == 'Pool Leak Detection'){
        document.getElementById('services').value = 'Pool Leak Detection'
        hideAdditionalServiceBox()
    }else if(name == 'Openings and Closings'){
        document.getElementById('services').value = 'Openings and Closings'
        hideAdditionalServiceBox()
    }else if(name == 'Swimming Pool Maintenance'){
        document.getElementById('services').value = 'Swimming Pool Maintenance'
        hideAdditionalServiceBox()
    }else if(name == 'Hot Tub Maintenance'){
        document.getElementById('services').value = 'Hot Tub Maintenance'
        hideAdditionalServiceBox()
    }else if(name == 'Chemical Checks'){
        document.getElementById('services').value = 'Chemical Checks'
        hideAdditionalServiceBox()
    }else if(name == 'Weekly Service'){
        document.getElementById('services').value = 'Weekly Service'
        hideAdditionalServiceBox()
    }else if(name == 'Safety Covers Install'){
        document.getElementById('services').value = 'Safety Covers Install'
        hideAdditionalServiceBox()
    }else if(name == 'Basic Opening Plan'){
        document.getElementById('services').value = 'Basic Opening Plan'
        hideAdditionalServiceBox()
    }else if(name == 'Popular Plan'){
        document.getElementById('services').value = 'Popular Plan'
        hideAdditionalServiceBox()
    }else if(name == 'Additional Services'){
        document.getElementById('services').value = 'Additional Services'
        document.getElementById('additionalServicesBox').style.display = 'block'
    }
}

function checkAdditionalService(){
    if(document.getElementById('services').value == 'Additional Services'){
        document.getElementById('additionalServicesBox').style.display = 'block'
    }else{
        hideAdditionalServiceBox()
    }
}

function hideAdditionalServiceBox(){
    document.getElementById('additionalServicesBox').style.display = 'none'
        document.getElementById('1').checked = false
        document.getElementById('2').checked = false
        document.getElementById('3').checked = false
        document.getElementById('4').checked = false
        document.getElementById('5').checked = false
}

function builtTile() {
    var date = new Date();
    if(date.getMonth() >= 2 && date.getMonth() <= 5){
        document.getElementById('headingTitle').innerHTML = `SPRING ${date.getFullYear()} IS HERE!`;
        document.getElementById('headingSubTitle').innerHTML = `BOOK YOUR OPENING TODAY!`;
    }else if(date.getMonth() >= 6 && date.getMonth() <= 8){
        document.getElementById('headingTitle').innerHTML = `SUMMER ${date.getFullYear()} IS HERE!`;
        document.getElementById('headingSubTitle').innerHTML = `BOOK SERVICE REQUEST TODAY!`;
    }else {
        document.getElementById('headingTitle').innerHTML = `IT IS CLOSING TIME FOR ${date.getFullYear()}!`;
        document.getElementById('headingSubTitle').innerHTML = `BOOK YOUR CLOSING TODAY!`;
    }
}

builtTile();