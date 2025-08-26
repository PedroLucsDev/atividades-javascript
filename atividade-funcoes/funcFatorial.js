//A função recebe um número inteiro positivo como parametro e cálcula o seu fátorial usando for.

function fatorial(numero) {

    //Faz a validação para que somente números inteiros positivos sejam aceitos.
    if(typeof numero !== 'number' || numero < 0){
        return 'Somente serão aceitos números inteiros positivos.'
    }

    let cont = 1

    //O for multiplica o cont por cada número de 1 até o 'número' inserido pelo o usuário
    for (let i = 1; i <= numero; i++){
        cont *= i
    }

    return `O fatorial de ${numero} é ${cont}.`
}

console.log(fatorial(7))