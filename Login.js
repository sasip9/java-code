function Login(){
var a = document.getElementById("email").value;
var b = document.getElementById("password").value;
if((a==''||a==null)&&(b==''||b==null)){
    alert("enter email id and password ");
    break;
}
else if ((b!=''||b!=null)&&(a==''||a==null)){
    alert("enter email id ");
    break;
}
else if ((b==''||b==null)&&(a!=''||a!=null)){
    alert("enter password");
    break;
} 
else
pvalidate();
}
function pvalidate(){
    var b = document.getElementById("password").value;
    var c = document.getElementById("cpassword").value;
    if(b==c){
        nvalidate();
    }
    else
        alert("passowrd mismatch");
        break;
}
function nvalidate(){
    var d = document.getElementById("pnumber").value;
    if(d.length=10){
        alert("login suceess")
        return false;
    }
    else{
        alert("phone number validation");
        break;
    }
}