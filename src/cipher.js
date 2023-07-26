const cipher = {

  encode: function (offset, encriptar){
  if {(encriptar && encriptar.length > 0)
    let texto_encriptado = ""; //creación de una variable vacía para llenarla luego
    for (let index = 0; index < encriptar.length; index++) {//vamos a recorrer el string
      let codigoEnAscii = encriptar.charCodeAt(index)
      if (codigoEnAscii >= 65 && codigoEnAscii <= 90) {
        codigoEnAscii = (codigoEnAscii + offset) % 26;
      }
      texto_encriptado += String.fromCharCode(codigoEnAscii);
  }
  return texto_encriptado;
  }
}
}


/*Pasos para encode:
1. Traer los ingredientes: numero de offset, y cadena a encriptar.
2. Verificar  que la cadena no esté vacía.
3. hacer un for que recorra la cadena y almacene los valores de cada letra por su número de código ASCII en una nueva variable modificable
4. a esta nueva variable, sumarle el numero de offset. (Para que su valor cambie)
5. Devolver el resultado a una una string
6.imprimir esa nueva string. 
*/

  decode: function (offset, desencriptar){

  }
}
export default cipher;
