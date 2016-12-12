$( document ).ready(function() {
    console.log( "ready" );
    
    
    var fregEx = /^[A-Za-z -]{1,20}$/;
    var lregEx = /^[A-Za-z -]{1,20}$/;
    var EregEx = /^[A-Za-z0-9_-]{5,30}@[a-zA-Z0-9]{1,15}\.(com|ca|info|org|io)$/;
    var PregEx = /^(778|604|236)([ -])?[0-9]{3}([ -])?[0-9]{4}/;
    var AregEx = /^[A-Za-z0-9 -]{1,50}$/;
    
    var box1 = document.getElementById("errorbox1");
    var box2 = document.getElementById("errorbox2");
    var box3 = document.getElementById("errorbox3");
    var box4 = document.getElementById("errorbox4");
    var box5 = document.getElementById("errorbox5");
    var box6 = document.getElementById("errorbox6");
    var box7 = document.getElementById("errorbox7");
    var box8 = document.getElementById("errorbox8");
    var box9 = document.getElementById("errorbox9");
    var box10 = document.getElementById("errorbox10");
    
    var fname = document.getElementById("fnamebill");
    var lname = document.getElementById("lnamebill");
    var phone = document.getElementById("PBilling");
    var email = document.getElementById("EBilling");
    var address = document.getElementById("ABilling")
    
    
    var sfname = document.getElementById("sfnamebill");
    var slname = document.getElementById("slnamebill");
    var sphone = document.getElementById("sPBilling");
    var semail = document.getElementById("sEBilling");
    var saddress = document.getElementById("sABilling");
    
    
    fname.onkeyup = function(){
        console.log("typed something");
        console.log(fregEx.test(fname.value));
        
    
        
        if(fregEx.test(fname.value)){
            fname.style.color = "green";
            box1.innerHTML = "Your first name is correctly inputted."
        }
        
        else{
            fname.style.color = "red";
            box1.innerHTML = "ERROR: NAME IS NOT VALID. NAME MUST BE 5-20 CHARS. ONLY LETTERS ALLOWED.";
            
        }
    }
    
        lname.onkeyup = function(){
        console.log("typed something");
        console.log(lregEx.test(lname.value));
        
        
        if(lregEx.test(lname.value)){
            lname.style.color = "green";
            box2.innerHTML = "Your last name is correctly inputted."
        }
        
        else{
            lname.style.color = "red";
            box2.innerHTML = "ERROR: NAME IS NOT VALID. NAME MUST BE 5-20 CHARS. ONLY LETTERS ALLOWED.";
            
        }
    }
    

    phone.onkeyup = function(){
        console.log("typed something");
        console.log(PregEx.test(phone.value));
        
        
        if(PregEx.test(phone.value)){
            phone.style.color = "green";
            box4.innerHTML = "Your phone is correctly inputted."
        }
        
        else{
            phone.style.color = "red";
            box4.innerHTML = "ERROR: PHONE IS NOT VALID. PHONE MUST BE 778 or 604 or 236 10digit number";
            
        }
    }
    
    email.onkeyup = function(){
        console.log("typed something");
        console.log(EregEx.test(email.value));
        
        
        if(EregEx.test(email.value)){
            email.style.color = "green";
            box3.innerHTML = "Your email is correctly inputted."
        }
        
        else{
            email.style.color = "red";
            box3.innerHTML = "ERROR: EMAIL IS NOT VALID."
            
        }
    }
    
    address.onkeyup = function(){
        console.log("typed something");
        console.log(AregEx.test(address.value));
        
        
        
        if(AregEx.test(address.value)){
            address.style.color = "green";
            box5.innerHTML = "Your address is correctly inputted."
        }
        
        else{
            address.style.color = "red";
            box5.innerHTML = "ERROR: address IS NOT VALID."
            
        }
    }
    
    sfname.onkeyup = function(){
        console.log("typed something");
        console.log(fregEx.test(sfname.value));
        
    
        
        if(fregEx.test(sfname.value)){
            sfname.style.color = "green";
            box6.innerHTML = "Your first name is correctly inputted."
        }
        
        else{
            sfname.style.color = "red";
            box6.innerHTML = "ERROR: NAME IS NOT VALID. NAME MUST BE 5-20 CHARS. ONLY LETTERS ALLOWED.";
            
        }
    }
    
        slname.onkeyup = function(){
        console.log("typed something");
        console.log(lregEx.test(slname.value));
        
        
        if(lregEx.test(slname.value)){
            slname.style.color = "green";
            box7.innerHTML = "Your last name is correctly inputted."
        }
        
        else{
            slname.style.color = "red";
            box7.innerHTML = "ERROR: NAME IS NOT VALID. NAME MUST BE 5-20 CHARS. ONLY LETTERS ALLOWED.";
            
        }
    }
    

    sphone.onkeyup = function(){
        console.log("typed something");
        console.log(PregEx.test(sphone.value));
        
        
        if(PregEx.test(sphone.value)){
            sphone.style.color = "green";
            box9.innerHTML = "Your phone is correctly inputted."
        }
        
        else{
            sphone.style.color = "red";
            box9.innerHTML = "ERROR: PHONE IS NOT VALID. PHONE MUST BE 778 or 604 or 236 10digit number";
            
        }
    }
    
    semail.onkeyup = function(){
        console.log("typed something");
        console.log(EregEx.test(semail.value));
        
        
        if(EregEx.test(semail.value)){
            semail.style.color = "green";
            box8.innerHTML = "Your email is correctly inputted."
        }
        
        else{
            semail.style.color = "red";
            box8.innerHTML = "ERROR: EMAIL IS NOT VALID."
            
        }
    }
    
    saddress.onkeyup = function(){
        console.log("typed something");
        console.log(AregEx.test(saddress.value));
        
        
        
        if(AregEx.test(saddress.value)){
            saddress.style.color = "green";
            box10.innerHTML = "Your address is correctly inputted."
        }
        
        else{
            saddress.style.color = "red";
            box10.innerHTML = "ERROR: address IS NOT VALID."
            
        }
    }
    
});

    