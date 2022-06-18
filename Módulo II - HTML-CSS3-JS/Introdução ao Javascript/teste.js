// Comentário, variável e contante

// var y = 0; comentário de uma linha

/* var x = 1; 
comentário de várias linhas */

var preco = 2;

var desconto = 0.2; // variável pode variar

preco = preco - desconto;


const PRECO = 2; // constante não pode variar


// Funções

function soma(a,b) {
    return a + b; // quando é preciso utilizar o resultado posteriormente
}

// console.log(1+b); quando é preciso somente visualizar o resultado (debug)


soma(2,3);


// Utilizando o console

// console.log("Hello world");

function returnEvenValues(array){
    let evenNums = [];
    for( let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são:', evenNums)
}

let array = [1, 2, 3, 4, 5, 7, 8];

returnEvenValues(array)


