"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 20,
    profissao: 'dev'
};
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
};
const paula = {
    nome: 'paula',
    idade: 25,
    profissao: 'dev'
};
var profissao;
(function (profissao) {
    profissao[profissao["Professor"] = 0] = "Professor";
    profissao[profissao["pintor"] = 1] = "pintor";
    profissao[profissao["atriz"] = 2] = "atriz";
    profissao[profissao["dev"] = 3] = "dev";
})(profissao || (profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: profissao.atriz
};
const jessica = {
    nome: 'jessica',
    idade: 21,
    profissao: profissao.pintor,
    materias: ['arte conteporanea', 'arte rústica']
};
const monica = {
    nome: 'monica',
    idade: 21,
    materias: ['arte conteporanea', 'arte rústica']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
