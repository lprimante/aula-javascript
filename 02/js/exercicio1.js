// Usando a estrutura switch, verifique as notas de 0 a 10 e mande uma mensagem correspondente ao desempenho dessa pessoa.

var nota = 5;
switch(nota) {
    case 0:
    case 1: 
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Reprovado, mas não desista');
    break;
    case 6: 
    case 7: 
    case 8:
    case 9:
        console.log('Muito bem, continue assim!');
    break;
    case 10: 
        console.log('Parabéns, você tirou nota 10!');
    break;
    default: 
        console.log('Nota inválida');
}