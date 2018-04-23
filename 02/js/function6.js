// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.


// declara variáveis, pega valor e transforma string em numero 
var num1 = prompt('Digite um valor:');
var num2 = prompt('Digite outro valor:');

num1 = parseInt(num1);
num2 = parseInt(num2);

// declara função - valores = parametros
function soma(valor1, valor2) {
    return valor1 + valor2;
}

//retorna resultado com valores das variáveis
alert(soma(num1, num2));