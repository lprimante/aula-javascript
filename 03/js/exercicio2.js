// Declarar uma variável qualquer, que receba um objeto vazio.

let empty = {};


/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

let pessoa = {
    nome: "Luciana",
    sobrenome: "Primante",
    sexo: "Feminino",
    idade: 29,
    altura: 1.65,
    peso: 75,
    andando: false,
    caminhouQuantosMetros: 0,
}

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.fazerAniversario = function() {
    return this.idade = this.idade + 1;
}

/*
Faça a `pessoa` fazer 3 aniversários.
*/

document.write(pessoa.fazerAniversario() + "<br>");
document.write(pessoa.fazerAniversario() + "<br>");
document.write(pessoa.fazerAniversario() + "<br>");

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

document.write("A pessoa agora tem " + pessoa.idade + " anos." + "<br>");


/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function() {
    return "Olá! Meu nome é " + this.nome + " " + this.sobrenome + "!"
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

document.write(pessoa.nomeCompleto() + "<br>");

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function() {
    return "Olá, eu tenho " + this.idade + " anos!";
}

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

document.write(pessoa.mostrarIdade() + "<br>");

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function() {
    return "Eu peso " + this.peso + " Kg.";
}

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

document.write(pessoa.mostrarPeso() + "<br>");

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function () {
    return "Minha altura é " + this.altura + " m.";
}

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

document.write(pessoa.mostrarAltura() + "<br>");

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function(quilometros) {
    this.caminhouQuantosMetros = this.caminhouQuantosMetros + quilometros;
    this.andando = true;
    // return this.caminhouQuantosMetros;
    return this.caminhouQuantosMetros + " - " + this.andando;
}

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

document.write("A pessoa andou " + pessoa.andar(1) + " km." + "<br>");
document.write("A pessoa andou " + pessoa.andar(2) + " km." + "<br>");
document.write("A pessoa andou " + pessoa.andar(3) + " km." + "<br>");

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

document.write("A pessoa continua andando? " + pessoa.andando + "<br>");

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function () {
    this.andando = false;
    return this.andando;
}

document.write("A pessoa continua andando? " + pessoa.parar() + "<br>");

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

pessoa.apresentacao = function() {
    let sexo = (pessoa.sexo === "Feminino") ? " a " : " o ";
    let idade = (pessoa.idade > 1) ? " anos" : " ano";
    let metros = (pessoa.caminhouQuantosMetros === 1) ? " metro" : " metros";
    return "Olá, eu sou" + sexo + pessoa.nome + " " + pessoa.sobrenome + ", tenho " + pessoa.idade + idade + ", e " + pessoa.altura + ", meu peso é " + pessoa.peso + " Kg e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + metros + "!"
}

document.write(pessoa.apresentacao());




