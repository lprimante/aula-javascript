// Escreva uma instrução condicional JavaScript para encontrar o maior dos cinco números. Exibe uma caixa de alerta para mostrar o resultado. a = 1 b = 2  c = 3  d = 4 e = 5

var a = 5;
var b = 2;
var c = 15;
var d = 4;
var e = 20;
var maior = 0;

// if(a > b && a > c && a > d && a > e) {
//     alert('A resposta é ' + a);
// } else if(b > a && b > c && b > d && b > e) {
//     alert('A resposta é ' + b);
// } else if(c > a && c > b && c > d && c > e) {
//     alert('A resposta é ' + c);
// } else if(d > a && d > b && d > c && d > e) {
//     alert('A resposta é ' + d);
// } else {
//     alert('A resposta é ' + e);
// }

// Outra forma de apresentar o código, considerando que os números são maiores que 0. A var maior herda o valor da variavel anterior até checar o valor maior. 

if(a > maior) {
    maior = a;
} 
if(b > maior) {
    maior = b;
}
if(c > maior) {
    maior = c;
} 
if(d > maior) {
    maior = d;
}
if(e > maior) {
    maior = e;
}

alert('A resposta é ' + maior);