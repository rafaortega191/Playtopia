let formulario = document.getElementById("loginForm")

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  e.preventDefault();
  var usuario = document.getElementById("usuarioInput").value;
  var contrasenia = document.getElementById("contraseniaInput").value;
  let alertLogin = document.getElementById('alert_login');

  var usuarioValidacion = /^[a-zA-Z0-9]{2,50}$/;
  var contraseniaValidacion = /^.{6,20}$/;

  if (!usuarioValidacion.test(usuario) || !contraseniaValidacion.test(contrasenia)) {
    alertLogin.className = "alert d-block text-warning fw-bolder";
    return;
  }

  if (usuario === "soyadmin" && contrasenia === "123456") {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("contraseña", JSON.stringify(contrasenia));
      window.location.href = './admin.html';
  } else {
    alertLogin.className = "alert d-block text-warning fw-bolder";
    return;
  }
}
