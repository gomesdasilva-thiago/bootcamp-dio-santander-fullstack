const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
}


const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profisao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profisao
}


const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profisao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profisao.Atriz
}

interface Estudante extends Pessoa {
    materias: string[]
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profisao.Desenvolvedora,
    materias: ['Matemática', 'Programação']
}

const monica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática', 'Programação']
}


function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
}}


listar(monica.materias);