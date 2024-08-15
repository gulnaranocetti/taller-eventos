document.addEventListener('DOMContentLoaded', function(){
    //Selecciona el div usando su id
    const divContent = document.getElementById('content-button');

    //anadir el manejador de eventos para el click
    divContent.addEventListener('click', function(){
        alert('Hola! Soy el div');
    })

    // Seleccionar el botón usando su id
    const boton = document.getElementById('miBoton');
    
    // Añadir el manejador de eventos para el clic en el botón
    boton.addEventListener('click', (event) => {
        event.stopPropagation(); // Evitar que el evento se propague al div
    });
})