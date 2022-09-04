
const ingreseTexto= document.querySelector(".ingrese-el-texto")
const saleTexto= document.querySelector(".sale-texto")


/*
CODIGO
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"`
*/

function encriptar (TextoAEncriptar){
    let IDelCodigo=[["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]]
    TextoAEncriptar= TextoAEncriptar.toLowerCase()
   
    //for para analizar las letras de la palabra//
    for (let i=0; i<IDelCodigo.length;i++){
        if (TextoAEncriptar.includes(IDelCodigo[i][0])){
            TextoAEncriptar=TextoAEncriptar.replaceAll(IDelCodigo[i][0],IDelCodigo[i][1]);
        }
        
    }
    return TextoAEncriptar
}

function botonEncriptar(){
    const textoEncriptado =encriptar(ingreseTexto.value)
    saleTexto.value= textoEncriptado
    saleTexto.style.backgroundImage= "none"
    ingreseTexto.value=""
}

function desencriptar (TextoADesencriptar){
    let IDelCodigo=[["imes","i"],["enter","e"],["ai","a"],["ober","o"],["ufat","u"]]
    TextoADesencriptar= TextoADesencriptar.toLowerCase()
   
    //for para analizar las letras de la palabra//
    for (let i=0; i<IDelCodigo.length;i++){
        if (TextoADesencriptar.includes(IDelCodigo[i][0])){
            TextoADesencriptar=TextoADesencriptar.replaceAll(IDelCodigo[i][0],IDelCodigo[i][1]);
        }
        
    }
    return TextoADesencriptar
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(ingreseTexto.value)
    saleTexto.value = textoDesencriptado
    saleTexto.style.backgroundImage= "none"
    ingreseTexto.value=""
}