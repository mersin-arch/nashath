var hd =document.getElementById("head1");
hd.style.color="blue"
//hd.innertext="text changed";
hd.innerHTML='<p>changed into p tag</p>'

//using class name
var user=document.getElementsByClassName("user");
for(let i=0;i<user.length;i++){
    user[i].style.color="red"
}
//using tag name
var tag1=document.getElementsByTagName("li");
tag1[2].style.backgroundColor="yellow";


// using query slector using tagname
var inp=document.querySelector('input');
inp.placeholder="pling!!"

//using query selector classname
var qclass=document.querySelector(".qclass");
qclass.style.backgroundColor="green"

// query selector using id
var btn= document.querySelector("#qid")
btn.innerText="changed"



