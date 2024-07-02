function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

function cacularAreadoTriangulo(base, altura){
    return(base * altura) /2
}
function areadoRetangulo(comprimento,largura){
   return comprimento * largura
}
module.exports = {
    calcularAreaCirculo,
    cacularAreadoTriangulo,
    areadoRetangulo
}


