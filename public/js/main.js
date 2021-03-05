function validateForm(){
    return validateEmail() && validatePhoneNumber() && validateMethodOfContact() 
}

function validateEmail(){
    var email = document.getElementById('email').value;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase()) == false){
        alert('Please enter Valid email address');
        document.getElementById('email').style.borderColor = 'red'
        return false
    }

    document.getElementById('email').style.borderColor = 'green'
    return true
}   

function validatePhoneNumber()
{
    var inputtxt = document.getElementById('phone').value;
    var phoneno = /^\d{10}$/;
    if(inputtxt.match(phoneno))
    {
        document.getElementById('phone').style.borderColor = 'green'
        return true;
    }
    else
    {
        alert("Not a valid Phone Number\n\nShould be exactly of 10 numbers");
        document.getElementById('phone').style.borderColor = 'red'
        return false;
    }
}

function validateMethodOfContact()
{
    var inputtxt = document.getElementById('methodOfContact').value.toLowerCase();
    if(inputtxt == 'phone' || inputtxt == 'email')
    {
        document.getElementById('methodOfContact').style.borderColor = 'green'
        return true;
    }
    else
    {
        alert("Method of Contact can be either Phone or Email but not " + inputtxt);
        document.getElementById('methodOfContact').style.borderColor = 'red'
        return false;
    }
}