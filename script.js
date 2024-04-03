function logar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "admin" && senha === "admin") {
        alert("Sucesso! Redirecionando...");
        window.location.href = "https://www.youtube.com/watch?v=jp288zfsNTI"; 
    } else {
        alert("Usuário ou senha incorreta");
    }
}



       
    




