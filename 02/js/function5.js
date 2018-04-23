// Calcule o quadrado de um número e retorne o resultado;


// declara variáveis, pega valor e transforma string em numero 
var num1 = prompt('Digite um valor:');

num1 = parseInt(num1);

// declara função - valores = parametros
function quadrado(valor1) {
    return valor1 * valor1;
} 

//retorna resultado com valores das variáveis
alert(quadrado(num1));