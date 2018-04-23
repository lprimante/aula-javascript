// Escreva um programa em JavaScript para verificar se três valores estão no intervalo 50..99 (inclusive). Retorna true se um ou mais deles estiverem no intervalo especificado.

var number1 = prompt('Digite um número:');
var number2 = prompt('Digite outro número:');
var number3 = prompt('Digite só mais um número:');

number1 = parseInt(number1);
number2 = parseInt(number2);
number3 = parseInt(number3);

if(number1 >= 50 && number1 <= 99) {
    alert(true);
} else if(number2 >= 50 && number2 <= 99) {
    alert(true);
} else if(number3 >= 50 && number3 <= 99) {
    alert(true);
}

// caso o exercicio não peça, não precisa de else.