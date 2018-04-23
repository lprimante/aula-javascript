// 10. Escreva uma função chamada calculateDogAge que: 
// leva 1 argumento: a idade de um cachorro. 
// calcula a idade cachorro com base na taxa de conversão de 1 ano humano para 7 anos de cachorro. 
// Emite o resultado para a tela da seguinte forma: "Seu cãozinho é NN anos de idade em anos de cão!". 
// Chame a função três vezes com diferentes conjuntos de valores.

function calculateDogAge(idade) {
    idade = idade * 7
    return "Seu cãozinho tem " + idade + " anos de idade em anos de cão!";
}

document.write(calculateDogAge(4));
document.write(calculateDogAge(10));
document.write(calculateDogAge(7));