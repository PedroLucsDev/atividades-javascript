
//Recebe um número como parametro para a verificação.

function verParImpar (numero) {

    //Usa o typeof para validar somente número.
    if(typeof numero !== 'number'){
        return 'Apenas números serão aceitos.'
    }

    //Usa o operador mod(%) para verificar o resto da divisão é 0.
    if (numero%2 === 0){
        return `O número ${numero} é par!`
    } else {
        return `O número ${numero} é impar!`
    }
}


console.log(verParImpar())