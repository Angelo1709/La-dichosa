function cambiarImagen() {
    var imagen = document.getElementById("cambiar-img");
    if (window.innerWidth <= 768) {
        imagen.src = "/imagenes/catalogo-2-pequeño.png"; // URL de la imagen para pantallas pequeñas
    } else {
        imagen.src = "/imagenes/catalogo-2.jpg"; // URL de la imagen para pantallas grandes
    }
}

// Llama a la función cuando la página carga
window.onload = cambiarImagen;

// Llama a la función cada vez que cambie el tamaño de la ventana
window.onresize = cambiarImagen;