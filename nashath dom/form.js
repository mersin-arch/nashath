var hd=document.getElementById("hd");
var hdf=document.getElementById("hdf");
var hdp=document.getElementById("hdp");

function validate(){
    if(hd.value.trim()==""||hdf.value==""){
        alert("field cannot be empty")
        hd.style.border='2x solid red';
        hdf.style.border='2x solid red';
        return false
    }
    else if(hdf.value.length<5){
        alert("password length should be more than 5");
        return false;
    
    }
    else{
        return true
        
    }
}