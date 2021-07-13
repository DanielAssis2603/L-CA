function logar(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (email.value == "teste@teste.com" && password.value == "teste"){
        localStorage.setItem("acesso", true);

        window.location.href = "cadastro.html";
    }else
    alert("Usuário ou senha inválidos!");
}

function checktermo(){
    if (document.getElementById("chktermo").checked){
        document.getElementById("btnsignup").style.backgroundColor = "#1c8adb";
        document.getElementById("btnsignup").disabled = false;
    }else{
        document.getElementById("btnsignup").style.backgroundColor = "#fff";
        document.getElementById("btnsignup").disabled = true;
    }
}