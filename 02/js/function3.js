// Crie uma função chamada `subtração` que receba como parâmetro dois números, e retorne o resultado da subtração entre eles;



// declara variáveis, pega valor e transforma string em numero 
var num1 = prompt('Digite um valor:');
var num2 = prompt('Digite outro valor:');

num1 = parseInt(num1);
num2 = parseInt(num2);

// declara função - valores = parametros
function subtracao(valor1, valor2) {
    return valor1 - valor2;
}

//retorna resultado com valores das variáveis
alert(subtracao(num1, num2));


