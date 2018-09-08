// Si ponemos nuestro archivo js en la etiqueta "head" debemos usar el evento :
// document.addEventListener('DOMContentLoaded', function(){});

// Creamos una constante que tome el elemento por su id

const input = document.querySelector('#input');

// Le agregamos el evento de "Click" y creamos la función que muestre el resultado

input.addEventListener('click',function(){

    alert("Aun no envío nada");
});