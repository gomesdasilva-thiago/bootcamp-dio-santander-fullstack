// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

const employee = {
    name: 'John',
    code: 10
}

const john: {name: string, code: number} = {
    name: 'John',
    code: 10
}

interface Employee {
    name: string,
    code: number
}

const john1: Employee = {
    name: 'John',
    code: 10
}

