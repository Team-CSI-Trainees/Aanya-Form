const form = document.getElementById("form");
const fname=document.getElementById("fname");
const dob=document.getElementById("dob");
const phone=document.getElementById("phone");
const whatsapp=document.getElementById("whatsapp");
const email=document.getElementById("email");
const password=document.getElementById("password");
const cpassword=document.getElementById("cpassword");
const rdbgender=document.getElementById("rdbgender");
const chklang=document.getElementById("chklang");
const branch=document.getElementById("branch");
const interest=document.getElementById("interest"); 

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    validate();
})
const validate = () => {
    fname.addEventListener("blur", validatefname);
    dob.addEventListener("blur", validatedob);
    phone.addEventListener("blur", validatephone);
    whatsapp.addEventListener("blur", validatewhatsapp);
    email.addEventListener("blur", validateemail);
    password.addEventListener("blur", validatepassword);
    cpassword.addEventListener("blur", validatecpassword);
    //rdbgender.addEventListener("blur", validaterdbgender);
    //chklang.addEventListener("blur", validatechklang);
    //branch.addEventListener("blur", validatebranch);
    //interest.addEventListener("blur", validateinterest);

    function validatefname(){
        const regEx_fname=/^[A-Za-z. ]{2,30}$/;
        if(!regEx_fname.test(fname.value)){
            NotValid(fname,'Name is invalid');
        }
        else{
            Valid(fname);
            console.log(fname.value);
        }
    }
    function validatedob(){
        const regEx_dob=/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
        if(!regEx_dob.test(dob.value)){
            NotValid(dob,'DOB is invalid');
        }
        else{
            Valid(dob);
            console.log(dob.value);
        }
    }
    function validatephone(){
        const regEx_phone=/^[789][0-9]{9}$/;
        if(!regEx_phone.test(phone.value)){
            NotValid(phone,'Phone number is invalid');
        }
        else{
            Valid(phone);
            console.log(phone.value);
        }
    }

    function validatewhatsapp(){
        const regEx_whatsapp=/^[789][0-9]{9}$/;
        if(!regEx_whatsapp.test(whatsapp.value)){
            NotValid(whatsapp,'Whatsapp number is invalid');
        }
        else{
            Valid(whatsapp);
            console.log(whatsapp.value);
        }
    }
    function validateemail(){
        const regEx_email=/^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
        if(!regEx_email.test(email.value)){
            NotValid(email,'Email is invalid');
        }
        else{
            Valid(email);
            console.log(email.value);
        }
    }
    function validatepassword(){
        const regEx_password=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if(!regEx_password.test(password.value)){
            NotValid(password,'Invalid password');
        }
        else{
            Valid(password);
            console.log(password.value);
        }
    }
    function validatecpassword(){
        if((password.value)!=(cpassword.value)){
            NotValid(cpassword,'Password not matched');
        }
        else{
            Valid(cpassword);
            console.log(cpassword.value);
        }
    } 
}
function NotValid(input,errormsg){
    const control = input.parentElement;
    const small = control.querySelector('small');
    control.className = "control error";
    small.innerText = errormsg;
}
function Valid(input){
    const control = input.parentElement;
    control.className = "control success";
} 

// js for form


