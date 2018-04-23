/* Crie uma função com as seguintes características:
 A função deve receber 3 argumentos.
Se somente um argumento for passado, retorne o valor do argumento.
 Se dois argumentos forem passados, retorne a soma dos dois argumentos.
Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
Se nenhum argumento for passado, retorne o valor booleano `false`.
E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/


function nine(number1, number2, number3) {
     if(number1 !==  undefined && number2 === undefined && number3 === undefined) {
         return number1;
     } else if (number1 !== undefined && number2 !== undefined && number3 === undefined) {
         return number1 + number2;
     } else if (number1 !== undefined && number2 !== undefined && number3 !== undefined) {
         return (number1 + number2) / number3;
     } else if (number1 === undefined && number2 === undefined && number3 === undefined) {
         return false;
     } else {
        return null;
     }
}

console.log(nine(3));
console.log(nine(40, 80));
console.log(nine(1, 12, 30));
console.log(nine());

// Chamar função, instanciar função