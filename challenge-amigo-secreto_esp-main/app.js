// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaAmigos = []; // Arreglo para manejo de la lista de amigos (guardado)


 function agregarAmigo()
 {
    let titulo = document.getElementById('titulo-amigos');
    titulo.style.display = 'inline';
    let cajaEntrada = document.getElementById('amigo');
    if(cajaEntrada.value =='')     // Validando si el campo de texto viene vacío
     alert('El texto está vacío. Por favor digite un nombre válido');
    else   // Grabar en la lista de amigos
     listaAmigos.push(cajaEntrada.value);   // Adiicona a lista el nombre de un nuevo amigo
    creaListaHtml(cajaEntrada.value);   // Llamado a la función que me adiciona dinámicamente un elemento de la lista en la p+agina
    cajaEntrada.value  = '';  // Instrucción para vaciar la caja de texto
    let botonEscoge = document.getElementById('escoge');
    botonEscoge.disabled = false;
 }

 function creaListaHtml (nombreAmigo)    // Función que me genera un nuevo de la lista Ul. Recibe como parámetro el nombre del amigo a ingresar
 {
    let listaHtml = document.getElementById('listaAmigos');
    var elemento = document.createElement('li');
    elemento.className ="prueba";
    elemento.textContent = nombreAmigo;
    listaHtml.appendChild(elemento);   
 }

 function sortearAmigo()
 {
   
   let tamano = listaAmigos.length; // encuentro el tamaño de la lista de amigos
   do
   {
      numeroAleatorio = Math.floor(Math.random()*tamano+1); 
   }while (numeroAleatorio > tamano && numeroAleatorio < 1)
   creaListaHtmlResultado (numeroAleatorio -1);
   let botonEscoge = document.getElementById('escoge');
   botonEscoge.disabled = true;
   let botonGrabar = document.getElementById('adicionar');
   botonGrabar.disabled = true;
 }

 function creaListaHtmlResultado (posicionArreglo)    // Función que me genera un nuevo de la lista Ul. Recibe como parámetro el nombre del amigo a ingresar
 {
    let listaHtml = document.getElementById('resultado');
    var elemento = document.createElement('li');
    elemento.textContent = 'Mi amigo secreo es: ' + listaAmigos[posicionArreglo];
    listaHtml.appendChild(elemento);   
    var btRepetir = document.getElementById('repite');
    btRepetir.style.display = "inline";
 }

 function repetir()
 {
    location.reload();
 }