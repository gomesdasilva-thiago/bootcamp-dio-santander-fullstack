// function soma(a: number, b: number) {
//     return a + b;
// }

// soma('a', 'b')

// type
//interfaces


// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     executarRugido(alturaEmDecibeis: number): void;
// }

// interface IFelino extends IAnimal {
//     visaoNoturna: boolean;
// }

// const animal: IAnimal = {
//      nome: 'Elefante',
//      tipo: 'terrestre',
//      executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
// }

// animal.executarRugido('s')

// const felino: IFelino = {
//     nome: 'Leão',
//     tipo: 'terrestre',
//     visaoNoturna: true,
// }


// type

// interface IAnimal {
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     domestico: boolean;
// }

// interface IFelino extends IAnimal {
//         visaoNoturna: boolean;
// }

// interface ICanino extends IAnimal {
//     porte: 'pequeno' | 'medio' | 'grande'
// }

// type IDomestico = IFelino | ICanino;

// const animal: IDomestico = {
//          domestico: true,
//          nome: 'cachorro',
//          porte: 'medio',
//          tipo: "terrestre",
//          visaoNoturna: true,
// }


// tag input

// const input = document.getElementById('input') as HTMLInputElement;

// input.addEventListener('input', (event) => {
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value);
// });


// generic types

// function adicionaApendiceALista<T>(array: any, valor: T) {
//     return array.map(item => item + valor);
// }

// adicionaApendiceALista([1,2,3], 1)


// condicionais

// interface IUsuario {
//     id: string;
//     email: string
// }

// interface iAdmin extends IUsuario{
//     cargo: 'gerente' | 'coordenador' | 'supervisor';
// }

// function redirecione(usuario: IUsuario | iAdmin) {
//     if('cargo' in usuario) {
//         // redirecionar para a área de administração
//     }

//     // redirecionar para a área do usuário
// }


// '?' para variáveis opcionais

// interface IUsuario {
//     id: string;
//     email: string
//     cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
// }


// function redirecione(usuario: IUsuario) {
//     if (usuario.cargo) {
//     // redirecionar(usuario.cargo);
// }

//     // redirecionar para a área do usuário
// }

// readonly e private

// interface AnimalDomestico {
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {
//     +readonly [K in keyof Cachorro]-?: Cachorro[K];
// }

// class MeuCachorro implements Cachorro {
//     idade;
//     nome;
//     parqueFavorito

//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Apolo', 14);


// Importar bibliotecas

// import $ from 'jquery';

// $.fn.extend({
//     novaFuncao() {
//         console.log('Chamou nova funcao');
//     }
// });

// $('body').novaFuncao();

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro= {
    
}