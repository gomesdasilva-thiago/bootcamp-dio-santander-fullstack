"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'André',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profisao;
(function (Profisao) {
    Profisao[Profisao["Professora"] = 0] = "Professora";
    Profisao[Profisao["Atriz"] = 1] = "Atriz";
    Profisao[Profisao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profisao[Profisao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profisao || (Profisao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profisao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profisao.Atriz
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profisao.Desenvolvedora,
    materias: ['Matemática', 'Programação']
};
const monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemática', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
