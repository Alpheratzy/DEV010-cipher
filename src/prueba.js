/*import { clean } from 'gh-pages';
import cipher from './cipher.js';*/

///obj. boton borrar campos.

const btn_borrar = document.getElementById("Limpiar");
btn_borrar.addEventListener("click", () =>{
  document.getElementById("tx_encriptable").value = "";
  document.getElementById("tx_desencriptable").value = "";
})

//Otras constantes que necesitaré

const por_encriptar = document.getElementById ("tx_encriptable");
const por_desencriptar= document.getElementById ("tx_desencriptable");
const numero =document.querySelector ("select");
const btn_encriptar = document.getElementById ("encriptar");
const btn_desencriptar= document.getElementById ("desencriptar");
//let offset=5;

// funciones encode y decode pruebas
function eleccionNumero(){
  let offset = numero.value;
  alert("Seleccionaste el número " + offset);
}
//Funciones de captura de texto:

function cap_encriptar() {
  let encriptar = por_encriptar.value;
  encriptar = encriptar.toUpperCase();
  //console.log (encriptar);
  let texto_encriptado = ""; //creación de una variable vacía para llenarla luego
  for (let index = 0; index < encriptar.length; index++) {//vamos a recorrer el string
    let codigoEnAscii = encriptar.charCodeAt(index)
    if (codigoEnAscii >= 65 && codigoEnAscii <= 90) {
        codigoEnAscii = (codigoEnAscii - 65 + offset) % 26 + 65;
    }
    texto_encriptado += String.fromCharCode(codigoEnAscii);
  }
  document.getElementById("tx_encriptable").value = texto_encriptado;
  //cipher.encode();
}

function cap_desencriptar(){
  let desencriptar = por_desencriptar.value;
  desencriptar  = desencriptar.toUpperCase();
  console.log (desencriptar)
  let texto_desencriptado = ""; //creación de una variable vacía para llenarla luego
  for (let index = 0; index < desencriptar.length; index++) {//vamos a recorrer el string. Empieza en cero, mantiene el bucle hasta que deja de ser menor que el largo de la cadena, actualiza el bucle en una posicion del index despues de cada iteracion
    let codigoEnAscii2 = desencriptar.charCodeAt(index) //declaro variable donde se guardará el codigo ascii, y le doy el valor a traves de pasarle el método charcodeat a mi string (letra por letra)
    if (codigoEnAscii2 >= 65 && codigoEnAscii2 <= 90) { //no tengo claro que esto sea necesario pero solo asi me funciona
      codigoEnAscii2 = (codigoEnAscii2 - 65 - offset) % 26 + 65;
    }
    texto_desencriptado += String.fromCharCode(codigoEnAscii2);
  }
  document.getElementById("tx_desencriptable").value = texto_desencriptado;
  //cipher.decode();
}

//Eventos de botones

btn_encriptar.addEventListener("click", cap_encriptar)
//btn_encriptar.addEventListener("click", encode)

btn_desencriptar.addEventListener("click", cap_desencriptar)

numero.addEventListener("change", eleccionNumero);

//ideas descartadas

//const abcdario =["A","B","C","D","E","F","G","H","I","J","K","M","L","N","O","P","Q","R","S","T","V","W","X","Y","Z"," "];
//let array_encriptar = Array.from(encriptar);

