function substituiPares(array) {
    if(!array.length) return console.log(-1);
    if(!array) return console.log(-1);

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("VocÊ já é zero!!");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return console.log(array)
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];

substituiPares(arr);

substituiPares([]);




