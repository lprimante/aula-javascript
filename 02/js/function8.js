// Crie uma função com as seguintes características:
//  A função deve receber 3 argumentos;
//  Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string: ‘Preencha todos os valores corretamente!’
// O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.

var num1 = prompt('Digite um valor:');
var num2 = prompt('Digite outro valor:');
var num3 = prompt('Digite mais um valor:');

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

console.log(num1);
console.log(num2);
console.log(num3);

function conta(valor1, valor2, valor3) {
    if(valor1 != valor1 || valor2 != valor2 || valor3 != valor3) {
        return('Preencha todos os valores corretamente!');
    } 
    return (valor1*valor2*valor3) + 2;
    
}

alert(conta(num1, num2, num3));