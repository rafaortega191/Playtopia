// Funciones para validar el formulario
function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    return true;
  } else {
    return false;
  }
}
function validarPrecio(precio) {
  let patron = /^\d{1,5}/;
  if (patron.test(precio)) {
    return true;
  } else {
    return false;
  }
}

function validarImagen(imagen) {
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
  if (patron.test(imagen)) {
    return true;
  } else {
    return false;
  }
}
function validarTrailer(trailer) {
  let patron =
    /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?‌​=]*)?/;
  if (patron.test(trailer)) {
    return true;
  } else {
    return false;
  }
}
function validarCategoria(categoria) {
  if (categoria == "") {
    return false;
  } else {
    return true;
  }
}
function validarAlmacenamiento(almacenamiento) {
  let patron = /^\d{1,3}( )?(MB|GB|TB)$/;
  if (patron.test(almacenamiento)) {
    return true;
  } else {
    return false;
  }
}

export function sumarioValidacion(
  nombre,
  precio,
  descripcion,
  imagen,
  trailer,
  categoria,
  desarrollador,
  almacenamiento,
  placaGrafica,
  ram,
  procesador
) {
  let resumen = ``;
  if (!validarCantidadCaracteres(nombre, 2, 50)) {
    resumen += `El nombre del juego debe tener entre 2 y 50 caracteres. <br>`;
  }
  if (!validarPrecio(precio)) {
    resumen += `El precio debe contener entre 2 y 5 números. <br>`;
  }
  if (!validarCantidadCaracteres(descripcion, 5, 500)) {
    resumen += `La descripción del juego debe tener entre 5 y 500 caracteres.<br>`;
  }
  if (!validarImagen(imagen)) {
    resumen +=
      "La imagen de la pelicula debe ser una URL valida terminada en (.jpg, .png o .gif).<br>";
  }
  if (!validarTrailer(trailer)) {
    resumen += `El trailer debe ser un link extraído de Youtube, en la sección Incorporar.<br>`;
  }
  if (!validarCategoria(categoria)) {
    resumen += `Debe seleccionar una de las categorías disponibles.`;
  }
  if (!validarCantidadCaracteres(desarrollador, 2, 30)) {
    resumen += `El desarrollador del juego debe tener entre 2 y 30 caracteres.<br>`;
  }
  if (!validarAlmacenamiento(almacenamiento)) {
    resumen += `El campo de almacenamiento debe contener letras y numeros.<br>`;
  }
  if (!validarCantidadCaracteres(placaGrafica, 5, 50)) {
    resumen += `El campo de placa gráfica debe contener informacion valida entre 5 y 50 caracteres.<br>`;
  }
  if (!validarCantidadCaracteres(ram, 3, 15)) {
    resumen += `El campo de ram debe contener informacion valida entre 3 y 15 caracteres.<br>`;
  }
  if (!validarCantidadCaracteres(procesador, 5, 50)) {
    resumen += `El campo de procesador debe informacion valida entre 5 y 50 caracteres.<br>`;
  }
  return resumen;
}
