document.addEventListener('DOMContentLoaded', function(){
    //Selecciona el div usando su id
    const divContent = document.getElementById('content-button');

    //anadir el manejador de eventos para el click
    divContent.addEventListener('click', function(){
        alert('Hola! Soy el div');
    })
})