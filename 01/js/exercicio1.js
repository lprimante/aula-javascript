/* Se o número for maior que 13, retorne o dobro da diferença absoluta. caso contrário retorne a diferença entre 13 e o número.
*/

var number = prompt('Digite um número:');
number = parseInt(number);

if(number >= 13) {
    alert((number - 13) * 2);
} else {
    alert(13 - number);
}