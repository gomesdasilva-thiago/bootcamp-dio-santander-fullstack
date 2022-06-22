// Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando 
// o parâmetro `this` de um objeto criado por você, e depois sem ele.


// Minha Solução (sem this)
const numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros.map((item) => item * 2));


// Solução Professora
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));


// Solução Professora
function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

console.log('Solução proposta', mapSemThis(numeros))

// Filter
// Filtre e retorne todos os números pares de um array.

console.log(numeros.filter((item) => item % 2 === 0));

// Solução Professora

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4]

console.log("Filtra pares", filtraPares(meuArray));

// Reduce
// 1. Some todos os números de um array
/* 2. Crie uma função que recebe uma lista de preços e um 
número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

console.log(numeros.reduce((total, numero) => total + numero, 0));


const precos = [10, 20, 30, 40, 50, 60]
const saldo = [500]

console.log(precos.reduce((total, numero) => total + numero, saldo))

// Solução Professora 1

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log("prev = ", {prev});
        console.log("current = ", {current});
        return prev + current;
    }, 0)
}

const arr = [1, 2];

console.log("Reduce Soma Números: ", somaNumeros(arr))

// Solução Professora 1

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada ', index + 1)
        console.log('prev', {prev})
        console.log('prev', {current})
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log('calculaSaldo', calculaSaldo(saldoDisponivel, lista))

