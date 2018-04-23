// Escolha 5 cores que serão convertidas do nome da cor para o seu equivalente hexadecimal (pode ser qualquer tom); Usando a estrutura switch, verifique se a cor passada por parâmetro é algum hexa escolhido. Se for, retorne a frase: "O hexadecimal para a cor [COR] é [HEXADECIMAL]."; Se a cor passada por parâmetro não estiver entre as selecionadas, mostre a frase:  "Não temos o equivalente hexadecimal para [COR]."

let cor = prompt('Digite a cor para saber seu hexadecimal correspondente:');
let hexadecimal;

switch(cor) {
    case 'roxo':
        hexadecimal = '#C063FF'
        alert('O hexadecimal para a cor ' + cor + ' é ' + hexadecimal + '.');
    break;
    case 'azul':
        hexadecimal = '#2274A5'
        alert('O hexadecimal para a cor ' + cor + ' é ' + hexadecimal + '.');
    break;
    case 'amarelo':
        hexadecimal = '#FFBF00'
        alert('O hexadecimal para a cor ' + cor + ' é ' + hexadecimal + '.');
    break;
    case 'vermelho':
        hexadecimal = '#E83F54'
        alert('O hexadecimal para a cor ' + cor + ' é ' + hexadecimal + '.');
    break;
    case 'verde':
        hexadecimal = '#32936F'
        alert('O hexadecimal para a cor ' + cor + ' é ' + hexadecimal + '.');
    break;
    default:
        alert('Não temos o equivalente hexadecimal para ' + cor);
}



