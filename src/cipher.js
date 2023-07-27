const cipher = {

  encode: function (por_encriptar, offset) {
    let encriptar = por_encriptar;
    encriptar = encriptar.toUpperCase();
    
    let texto_encriptado = ""; 
    for (let index = 0; index < encriptar.length; index++) {
      let codigoEnAscii = encriptar.charCodeAt(index)
      if (codigoEnAscii >= 65 && codigoEnAscii <= 90) { 
        codigoEnAscii = ((codigoEnAscii - 65 + offset) % 26) + 65;
      }
      texto_encriptado += String.fromCharCode(codigoEnAscii);
    }
    //cipher.encode();
    return texto_encriptado
  },
 
  decode : function (por_desencriptar, offset) {
    console.log(por_desencriptar, offset);
    let desencriptar = por_desencriptar;
    desencriptar  = desencriptar.toUpperCase();
 
    let texto_desencriptado = ""; 
    for (let index = 0; index < desencriptar.length; index++) {
      let codigoEnAscii2 = desencriptar.charCodeAt(index) 
      if (codigoEnAscii2 >= 65 && codigoEnAscii2 <= 90) { 
        /* console.log("paso 1: ", {codigoEnAscii2, offset});
        console.log("paso 2: ", codigoEnAscii2 - 65);
        console.log("paso 3: ", (codigoEnAscii2 - 65 - offset));
        console.log("paso 4: ", Math.abs((codigoEnAscii2 - 65 - offset)) % 26);
        console.log("paso 5: ", ((codigoEnAscii2 - 65 - offset) % 26) + 65);*/
        codigoEnAscii2 = ((codigoEnAscii2 - 90 - offset) % 26) + 90;
      }
      texto_desencriptado += String.fromCharCode(codigoEnAscii2);
    }
    return texto_desencriptado
  }
}
export default cipher;
