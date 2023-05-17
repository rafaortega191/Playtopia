let formulario = document.getElementById("loginForm")

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  let usuario = document.getElementById("usuarioInput").value;
  let contrasenia = document.getElementById("contraseniaInput").value;
  let alertLogin = document.getElementById('alertLogin');

  let usuarioValidacion = /^[a-zA-Z0-9_]{3,20}/;
  let contraseniaValidacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,20}$/;

  if (!usuarioValidacion.test(usuario)) {
    alertLogin.innerText = "No se permiten espacios en el usuario";
    alertLogin.className = "alert d-block text-warning fw-bolder";
    return;
  }

  if (!contraseniaValidacion.test(contrasenia)) {
    alertLogin.innerText = "La contraseña no cumple con los requisitos: debe tener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial.";
    alertLogin.className = "alert d-block text-warning fw-bolder";
    return;
  }  
  
  if (usuario === "soyadmin" && contrasenia === "Soyadmin123!") {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("contraseña", JSON.stringify(contrasenia));
      window.location.href = './admin.html';
  } else {
    alertLogin.innerText = "Email o contraseña incorrectos";
    alertLogin.className = "alert d-block text-warning fw-bolder";
    return;
  }
}
