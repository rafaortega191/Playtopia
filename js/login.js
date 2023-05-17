let formulario = document.getElementById("loginForm");
let estaLogueado = sessionStorage.getItem("estaLogueado") || false;

formulario.addEventListener("submit", validarFormulario);

if(estaLogueado) {
  window.location.href = window.location.origin;
}

function validarFormulario(e) {
  e.preventDefault();
  let usuario = document.getElementById("usuarioInput").value;
  let contrasenia = document.getElementById("contraseniaInput").value;
  let alertLogin = document.getElementById("alertLogin");

  let usuarioValidacion = /^[a-zA-Z0-9_]{6,20}$/;
  let contraseniaValidacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,25}$/;

  if (!usuarioValidacion.test(usuario)) {
    alertLogin.innerText = "Solo se permiten letras, numeros y guiónes bajos en el usuario";
    alertLogin.className = "alert d-block text-warning fw-bolder";
    console.log("a")
    return;
  }

  if (!contraseniaValidacion.test(contrasenia)) {
    alertLogin.innerText =
      "La contraseña no cumple con los requisitos: debe tener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.";
    alertLogin.className = "alert d-block text-warning fw-bolder";
    return;
  }

  if (usuario === "soyadmin" && contrasenia === "Soyadmin123!") {
    estaLogueado = true;
    sessionStorage.setItem("estaLogueado", estaLogueado);
    window.location.href = "./admin.html";
  } else {
    alertLogin.innerText = "Email o contraseña incorrectos";
    alertLogin.className = "alert d-block text-warning fw-bolder";
    return;
  }
}

function verificarUser() {
  
}

verificarUser()