const {calcularAreaCirculo, cacularAreadoTriangulo, areadoRetangulo}  = require("./app")
const raioDoCirculo = 5;
const baseDotrinagulo = 10
const alturadotriangulo =6;
const comprimentodoRetangulo = 8;
const larguradoRetangulo = 5;

console.log(`Para um círculo com raio ${raioDoCirculo}: ${calcularAreaCirculo(raioDoCirculo)}`);
console.log(`Area do triangulo é ${cacularAreadoTriangulo(baseDotrinagulo, alturadotriangulo)}`);
console.log(`Area do retangulo ${areadoRetangulo(comprimentodoRetangulo, larguradoRetangulo)}:`);
