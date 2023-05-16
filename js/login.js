function validarFormulario() {
  let usuario = document.getElementById("usuarioInput").value;
  let contrasenia = document.getElementById("contraseniaInput").value;
  let alertLogin = document.getElementById('alert_login');

  let usuarioValidacion = /^[a-zA-Z0-9]{3,50}$/;
  let contraseniaValidacion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/;


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
