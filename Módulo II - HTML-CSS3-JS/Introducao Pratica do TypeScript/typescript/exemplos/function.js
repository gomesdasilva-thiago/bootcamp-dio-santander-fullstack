"use strict";
// type input = number | string;
// function somarValores(input1: number | string, input2: number | string) {
//     if (typeof input1 === "string" || typeof input2 === "string") {
//         return input1.toString() + input2.toString();
//     } else {
//     return input1 + input2;
//     }
// }
// function somarValores(input1: input, input2: input) {
//     if (typeof input1 === "string" || typeof input2 === "string") {
//         return input1.toString() + input2.toString();
//     } else {
//     return input1 + input2;
//     }
// }
// console.log(somarValores(1,5));
// console.log(somarValores('Olá', ' tudo bem?'));
// console.log(somarValores('1', 5));
// function somarValoresNumericos(numero1: number, numero2: number): number {
//     return numero1 + numero2.toString();
// }
// console.log(somarValoresNumericos(5, 3));
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumericosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
