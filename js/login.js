function validarFormulario() {
    let usuario = document.getElementById("usuarioInput").value;
    let contrasenia = document.getElementById("contraseniaInput").value;

    
    let usuarioValidacion = /^[a-zA-Z0-9]{3,}$/; 
    let contraseniaValidacion = /^.{6,20}$/;  

    if (!usuarioValidacion.test(usuario)) {
        alert("El nombre de usuario no cumple con los requisitos.");
        return;
    }

    if (!contraseniaValidacion.test(contrasenia)) {
        alert("El email o la contraseña estan incorectas");
        return;
    }

    if (usuario === "soyadmin" && contrasenia === "123456") {
      
        window.location.href("admin.html");
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contraseña", contrasenia);
    } else {
     
        window.location.href("index.html");
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("contraseña", contrasenia);
    }
}
