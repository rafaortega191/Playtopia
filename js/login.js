function validarFormulario() {
  var usuario = document.getElementById("usuarioInput").value;
  var contrasenia = document.getElementById("contraseniaInput").value;

  var usuarioValidacion = /^[a-zA-Z0-9]{2,50}$/;
  var contraseniaValidacion = /^.{6,20}$/;

  if (!usuarioValidacion.test(usuario)) {
    Swal.fire({
      position: "top",
      background: "#232323",
      color: "#fff",
      icon: "warning",
      title: "Email o contraseña incorrectos",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    return;
  }

  if (!contraseniaValidacion.test(contrasenia)) {
    Swal.fire({
        position: "top",
        background: "#232323",
        color: "#fff",
        icon: "warning",
        title: "Email o contraseña incorrectos",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    return;
  }

  if (usuario === "123456" && contrasenia === "123456") {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("contraseña", contrasenia);
      window.location.remplace('/index.html');
  } else {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("contraseña", contrasenia);
      window.location.href('/index.html');
  }
}
