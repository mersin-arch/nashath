var email =document.getElementById('email');
var btn = document.getElementById('btn');
var err1=document.getElementById('err1');


function check(){
    let regExp=/^([a-zA-Z0-9.-]+)@([a-zA-Z0-9\.-]+).([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(regExp.test (email.value)){
        err1.innerText="email is valid";
        err1.style.color="green"
        return true;

    }else{
        err1.innerText="email is invalid"
        err1.style.color="red"
        return false;
    }
}