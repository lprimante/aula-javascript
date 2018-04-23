// Recebendo um número de 1 a 12 retorne uma mensagem informando a estação do ano correspondente, sendo Outono: abril a junho. - Inverno: de julho a 22 de setembro. - Primavera: de outubro a dezembro - Verão de janeiro a março.

let estacao = 3;
switch(estacao) {
    case 1:
    case 2:
    case 3:
        console.log('Estamos no verão');
        break;
    case 4:
    case 5: 
    case 6:
        console.log('Estamos no Outono');
        break;
    case 7:
    case 8:
    case 9:
        console.log('Estamos no Inverno');
        break;
    case 10:
    case 11:
    case 12:
        console.log('Estamos na Primavera');
        break;
    default:
        console.log('Mês inválido');
}