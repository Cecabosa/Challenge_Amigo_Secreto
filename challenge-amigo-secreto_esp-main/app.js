// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaAmigos = []; // Arreglo para manejo de la lista de amigos (guardado)


 function agregarAmigo() // Función que agrega un amigo a la lista de amigos
 {
    let titulo = document.getElementById('titulo-amigos');
    titulo.style.display = 'inline';  // Muestra el titulo Listado de amigos que estaba oculto en HTML
    let cajaEntrada = document.getElementById('amigo');
    if(cajaEntrada.value =='')     // Validando si el campo de texto viene vacío
     alert('El texto está vacío. Por favor digite un nombre válido');
    else   // Grabar en la lista de amigos
     listaAmigos.push(cajaEntrada.value);   // Adiicona a lista el nombre de un nuevo amigo
    creaListaHtml(cajaEntrada.value);   // Llamado a la función que me adiciona dinámicamente un elemento de la lista en la p+agina
    cajaEntrada.value  = '';  // Instrucción para vaciar la caja de texto
    let botonEscoge = document.getElementById('escoge');
    botonEscoge.disabled = false;   // Habilita el boton de escoger amigos que venía desabilitado en HTML
 }

 function creaListaHtml (nombreAmigo)    // Función que me genera un nuevo de la lista Ul. Recibe como parámetro el nombre del amigo a ingresar
 {
    let listaHtml = document.getElementById('listaAmigos'); //Crea la lista dinámica de li en html
    var elemento = document.createElement('li');
    elemento.className ="prueba"; //Asigna una clase llamada prueba a cada li para ser usada en el CSS
    elemento.textContent = nombreAmigo;
    listaHtml.appendChild(elemento);   //Genera el nombre en la lista
 }

 function sortearAmigo() // Función que escoge el amigo secreto. No ingresan parámetros
 {
   let tamano = listaAmigos.length; // encuentro el tamaño de la lista de amigos
   do
   {
      numeroAleatorio = Math.floor(Math.random()*tamano+1); // Genera el numero aleatorio de la posición del arreglo de amigos
   }while (numeroAleatorio > tamano && numeroAleatorio < 1) // Mientras el número generado es manos que 0 o mayor que el tamaño del arreglo -1, vuelve a generar un nuevo número
   creaListaHtmlResultado (numeroAleatorio -1); // Llama a funcion que imprime el nombre del amigo seleccionado y envía parámetro de posicíon del arreglo
   let botonEscoge = document.getElementById('escoge');
   botonEscoge.disabled = true; // Deshabilita botón de escoger
   let botonGrabar = document.getElementById('adicionar');
   botonGrabar.disabled = true; // Deshabilita botón de añadir
 }

 function creaListaHtmlResultado (posicionArreglo)    // Función que me genera un nuevo de la lista Ul. Recibe como parámetro el nombre del amigo a ingresar
 {                                                    // ingresa parámetro posiciónArreglo con la posición del arreglo encontrada de manera aleatoria
    let listaHtml = document.getElementById('resultado');
    var elemento = document.createElement('li'); //Crea la lista dinámica de li en html
    elemento.textContent = 'Mi amigo secreo es: ' + listaAmigos[posicionArreglo]; // adiciona el texco con el amigo encontrado en el arreglo
    listaHtml.appendChild(elemento);   
    var btRepetir = document.getElementById('repite'); 
    btRepetir.style.display = "inline"; // Muestra el botón de volver a jugar que estba oculto por HTML
 }

 function repetir() // Función que reincia página con el juego 
 {
    location.reload(); // recarga página a estado incial
 }