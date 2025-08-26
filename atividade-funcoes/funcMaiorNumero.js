
//Verificar o maior número de um Array
function maiorNumero(array){

    //Pega o maior número do array.
    let maior = array[0]

    //Percorre o array a partir do segundo elemento.
    for(let i = 1; i < array.length; i++){
        //Se o elemento atual for maior que o valor armazenado em 'maior', atualiza 'maior'.
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return `O maior número do array é ${maior}`
}

console.log(maiorNumero([29, 2, 32, 4]))