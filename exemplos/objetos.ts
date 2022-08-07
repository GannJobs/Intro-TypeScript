const pessoa = {
    nome: 'Mariana',
    idade: 20,
    profissao: 'dev'
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'Pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'paula',
    idade: 25,
    profissao: 'dev'
}

interface Estudante extends pessoa {
    materias: string[]
}

interface pessoa {
    nome: string,
    idade: number,
    profissao?: profissao
}

enum profissao {
    Professor,
    pintor,
    atriz,
    dev
}

const vanessa: pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: profissao.atriz
}

const jessica: Estudante = {
    nome: 'jessica',
    idade: 21,
    profissao: profissao.pintor,
    materias: ['arte conteporanea','arte rústica']
}

const monica: Estudante = {
    nome: 'monica',
    idade: 21,
    materias: ['arte conteporanea','arte rústica']
}

function listar(lista: string[]){
    for (const item of lista) {
        console.log('- ', item)
    }
}
listar(monica.materias)