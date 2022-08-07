"use strict";
let aniEstaDeVolta;
aniEstaDeVolta = 3;
aniEstaDeVolta = 'teste';
aniEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = aniEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'valor';
unknownValor = 9;
let StringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    StringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deuerro', 500);
