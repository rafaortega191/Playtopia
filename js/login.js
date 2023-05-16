function validarFormulario() {
  var usuario = document.getElementById("usuarioInput").value;
  var contrasenia = document.getElementById("contraseniaInput").value;
  let alertLogin = document.getElementById('alert_login');

  var usuarioValidacion = /^[a-zA-Z0-9]{2,50}$/;
  var contraseniaValidacion = /^.{6,20}$/;

  if (!usuarioValidacion.test(usuario)) {
    alertLogin.classList.remove("d-none");
    alertLogin.textContent = "Email o contraseña incorrectos ";
    alertLogin.classList.add("");
    return;
  }

  if (!contraseniaValidacion.test(contrasenia)) {
    alertLogin.classList.remove("d-none");
    alertLogin.textContent = "Email o contraseña incorrectos";
    return;
  }

  if (usuario === "soyadmin" && contrasenia === "123456") {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("contraseña", JSON.stringify(contrasenia));
      window.location.href('pages/admin.html');
  } else {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("contraseña", JSON.stringify(contrasenia));
      window.location.href('index.html');
  }
}
