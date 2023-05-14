// Funciones para validar el formulario
function validarCantidadCaracteres(texto, min, max) {
  if (texto.length >= min && texto.length <= max) {
    console.log("dato correcto");
    return true;
  } else {
    console.log("dato erroneo");
    return false;
  }
}
function validarPrecio(precio) {
  let patron = /^[0-9]{2,5}$/;
  if (patron.test(precio)) {
    console.log(`Dato correcto`);
    return true;
  } else {
    console.log(`Dato incorrecto`);
    return false;
  }
}
function validarPrecioOferta(precioOferta) {
  let patron = /^[0-9]{2,5}$/;
  if (patron.test(precioOferta)) {
    console.log(`Dato correcto`);
    return true;
  } else {
    console.log(`Dato incorrecto`);
    return false;
  }
}

function validarImagen(imagen) {
  let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/;
  if (patron.test(imagen)) {
    console.log(`Funciona`);
    return true;
  } else {
    console.log(`Falló`);
    return false;
  }
}
function validarTrailer(trailer) {
  let patron =
    /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?‌​=]*)?/;
  if (patron.test(trailer)) {
    console.log(`Link correcto`);
    return true;
  } else {
    console.log(`Link erróneo`);
    return false;
  }
}
function validarCategoria(categoria) {
  if (categoria == "") {
    console.log(`No eligio ninguna categoria`);
    return false;
  } else {
    console.log(`Eligió una categoría`);
    return true;
  }
}
function validarAlmacenamiento(almacenamiento) {
  let patron = /^[1-9][0-9]+(\.[0-9]+)?(MB|GB|TB)$/;
  if (patron.test(almacenamiento)) {
    console.log(`Completado correctamente`);
    return true;
  } else {
    console.log(`No fue completado correctamente`);
    return false;
  }
}

export function sumarioValidacion(
  nombre,
  precio,
  precioOferta,
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
  if (precioOferta !== "") {
    if (!validarPrecioOferta(precioOferta)) {
      resumen += `El precio de oferta debe contener entre 2 y 5 numeros. <br>`;
    }
  }
  if (!validarCantidadCaracteres(descripcion, 5, 500)) {
    resumen += `La descripción del juego debe tener entre 5 y 500 caracteres. <br>`;
  }
  if (!validarImagen(imagen)) {
    resumen +=
      "La imagen de la pelicula debe ser una URL valida terminada en (.jpg, .png o .gif). <br>";
  }
  if (!validarTrailer(trailer)) {
    resumen += `El trailer debe ser un link extraído de Youtube, en la sección Incorporar. <br>`;
  }
  if (!validarCategoria(categoria)) {
    resumen += `Debe seleccionar una de las categorías disponibles.`;
  }
  if (!validarCantidadCaracteres(desarrollador, 2, 30)) {
    resumen += `El desarrollador del juego debe tener entre 2 y 30 caracteres. <br>`;
  }
  if (!validarAlmacenamiento(almacenamiento)) {
    resumen += `El campo de almacenamiento debe contener letras y numeros. <br>`;
  }
  if (!validarCantidadCaracteres(placaGrafica, 5, 50)) {
    resumen += `El campo de placa gráfica debe contener informacion valida entre 5 y 50 caracteres.<br>`;
  }
  if (!validarCantidadCaracteres(ram, 3, 15)) {
    resumen += `El campo de ram debe contener informacion valida entre 3 y 15 caracteres.<br>`;
  }
  if (!validarCantidadCaracteres(procesador, 5, 50)) {
    resumen += `El campo de procesador debe informacion valida entre 3 y 15. <br>`;
  }
  return resumen;
}
