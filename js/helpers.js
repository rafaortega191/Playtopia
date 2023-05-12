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