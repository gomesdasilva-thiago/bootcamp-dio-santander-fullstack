let array = []

array.push(3) // adiciona elemento no final da lista

console.log(array)

array.push(2)

console.log(array)

array.pop() // remove o último elemento

console.log(array)

array.push(2)
array.push(5)

console.log(array)

array.shift() // remove o primeiro elemento

console.log(array)

array.unshift(1) // adiciona elemento no começo da lista

console.log(array)

for(let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Ponto após o array para visualizar métodos

array.includes(3) // verificar se contém o número

array.every(item => item === 5) //verifica se todos os elementos são iguais a X

array.some(item => item === 5) // verifica se possui algum elemento igual a X









