let aniEstaDeVolta: any;
aniEstaDeVolta = 3
aniEstaDeVolta = 'teste'
aniEstaDeVolta = 5

let stringTest: string = 'verificar'
stringTest = aniEstaDeVolta

let unknownValor: unknown;
unknownValor = 3
unknownValor = 'valor'
unknownValor = 9

let StringTest2: string = 'agora vai'

if (typeof unknownValor === 'string') {
    StringTest2 = unknownValor
}

function jogaErro(erro: string, codigo: number): never {
    throw{error: erro, code: codigo}
}

jogaErro('deuerro', 500)