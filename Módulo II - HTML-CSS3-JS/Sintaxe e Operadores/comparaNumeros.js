// Resolução prática

function comparaNumeros (num1, num2) {
    num1 === num2 ? resultadoComp = (`Os números ${num1} e ${num2} são iguais. `) : resultadoComp = (`Os números ${num1} e ${num2} são diferentes. `);
    soma = num1 + num2;
    resultadoSoma = (`Sua soma é ${soma}, `);
    soma > 10 ? comparacao10 = ("que é maior que 10 e ") : comparacao10 = ("que é menor que 10 e ");
    soma < 20 ? comparacao20 = ("menor que 20") : comparacao20 = ("e maior que 20");
    if (soma === 10) comparacao10 = ("que é igual 10 e ");
    if (soma === 20) comparacao20 = ("igual a 20");
    if (num1 != undefined && num2 != undefined) {
    console.log(resultadoComp + resultadoSoma + comparacao10 + comparacao20)
    } else {
        console.log("Escolha dois números para prosseguir com a função")
    }
}

comparaNumeros(10,10)


// Resolução proposta

// function comparaNumeros(num1, num2) {
// 	const primeiraFrase = criaPrimeiraFrase(num1, num2);
// 	const segundaFrase = criaSegundaFrase(num1, num2);

// 	return `${primeiraFrase} ${segundaFrase}`;
// }

// function criaPrimeiraFrase(num1, num2) {
// 	let primeiraFrase = `Os números ${num1} e ${num2}`;
// 	let simNao = 'não';

// 	if (num1 === num2) {
// 		simNao = '';
// 	}

// 	return `${primeiraFrase} ${simNao} são iguais.`;
// }

// function criaSegundaFrase(num1, num2) {
// 	const soma = num1 + num2;
// 	let comparaDez = 'menor';
// 	let comparaVinte = 'menor';

// 	if (soma > 10) {
// 		comparaDez = 'maior';
// 	}

// 	if (soma > 20) {
// 		comparaVinte = 'maior';
// 	}

// 	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
// }

// console.log(comparaNumeros(10, 10));