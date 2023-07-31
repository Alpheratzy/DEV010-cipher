//import { clean } from 'gh-pages';
import cipher from './cipher.js';

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
let offset=5;

// funciones encode y decode pruebas
function eleccionNumero(){
  offset = parseInt(numero.value);//por alguna razón, me identificó el valor de mi selector como cadena, y no como número, asi que tocó parsear.
  alert("Seleccionaste el número " + offset);
} 

//Eventos de botones

btn_encriptar.addEventListener("click", function(){
  document.getElementById("tx_encriptable").value = cipher.encode(offset, por_encriptar.value)
})

btn_desencriptar.addEventListener("click", function(){
  document.getElementById("tx_desencriptable").value = cipher.decode(offset, por_desencriptar.value)
})

numero.addEventListener("change", eleccionNumero);