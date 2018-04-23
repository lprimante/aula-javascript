/* Escreva um programa em JavaScript para verificar a partir de dois números, se um for positivo e um negativo. Caso os sinais sejam um diferente do outro retorna true.*/

var x = 1;
var y = -1;

if((x > 0 && y < 0) || (x < 0 && y > 0)) {
    console.log(true);
} 

// caso o exercicio não peça, não precisa de else.