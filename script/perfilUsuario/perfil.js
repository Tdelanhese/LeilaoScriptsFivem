function mascaraCPF(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

}

function mascaraData(i){
   
    var v = i.value;
    
    if(isNaN(v[v.length-1])){
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "10");
    if (v.length == 2) i.value += "/";
    if (v.length == 5) i.value += "/"
}

function mouseoverPass(id) {
    var obj = document.getElementById(id);
    obj.type = "text";
}

function mouseoutPass(id) {
    var obj = document.getElementById(id);
    obj.type = "password";
}

$(document).ready(() => {
    var user = window.localStorage.getItem("user")
    user = JSON.parse(user)

    if(!user) {
        window.location.pathname = "/pages/login.html"
    }

    $("#nome").val(user?.nome)
    $("#email").val(user?.login)
})