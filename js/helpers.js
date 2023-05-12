// Funciones para validar el formulario
function validarCantidadCaracteres(texto, min, max){
    if( texto.length >= min && texto.length <= max){
        console.log('dato correcto');
        return true;
    }else{
        console.log('dato erroneo');
        return false
    }
}
function validarPrecio(precio){
    let patron = /^[0-9]{2,5}$/;
    if (patron.test(precio)){
        console.log(`Dato correcto`)
        return true
    } else {
        console.log(`Dato incorrecto`)
        return false
    }
}
function validarPrecioOferta(precioOferta){
    let patron = /^[0-9]{2,5}$/;
    if (patron.test(precioOferta)){
        console.log(`Dato correcto`)
        return true
    } else {
        console.log(`Dato incorrecto`)
        return false
    }
}

function validarImagen(imagen){
    let patron = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)$/
    if (patron.test(imagen)){
        console.log(`Funciona`)
        return true
    } else{
        console.log(`Falló`)
        return false
    }
}


export function sumarioValidacion(nombre, precio, precioOferta, descripcion, imagen, trailer, categoria, desarrollador, almacenamiento, placaGrafica, ram, procesador){
    let resumen = ``;
    if(!validarCantidadCaracteres(nombre, 2, 50)){
        resumen += `El nombre del juego debe tener entre 2 y 50 caracteres. <br>`
    }
    if(!validarPrecio(precio)){
        resumen += `El precio debe contener entre 2 y 5 números. <br>`
    }
    if(!validarPrecioOferta(precioOferta)){
        resumen += `El precio de oferta debe contener entre 2 y 5 numeros. <br>`
    }
    if(!validarCantidadCaracteres(descripcion, 5, 500)){
        resumen += `La descripción del juego debe tener entre 5 y 500 caracteres. <br>`
    }
    if(!validarImagen(imagen)){
        resumen += 'La imagen de la pelicula debe ser una URL valida terminada en (.jpg, .png o .gif). <br>'
    }
    if(!validarCantidadCaracteres(desarrollador, 2, 30)){
        resumen += `El desarrollador del juego debe tener entre 2 y 30 caracteres. <br>`
    }

    return resumen 
}