// let container = document.querySelector(".container");
// container.style.backgroundColor = "red";

//O método querySeletor retorna a primeira ocorrência do elemento seletor no documento

//Em class chama o seletor com um ponto "." no inicio

// let paragrafo = document.querySelector(".text");
// paragrafo.style.backgroundColor = "purple";

//Manipulando a cor do background através de um Seletor específico de Classe ou Tag 

// let x = document.querySelectorAll("p");
// console.log(x);

// for (i = 0; i < x.length; i++) {
//     console.log(i);
//     x[i].style.backgroundColor = "purple";
// }

//Manipulando vários elementos (classe ou tags) através do Seletor All, usando For para acessar todos os itens do nosso Array

// let container = document.querySelector(".container");
// let newParagrafo = document.createElement("p");
// let texto = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, vel illo nulla quia sed dolores quam illum harum distinctio placeat alias neque magni reprehenderit consectetur tempora quidem possimus autem deleniti.")
// newParagrafo.appendChild(texto);
// container.appendChild(newParagrafo);

//Criando um novo elemento dentro de um Seletor já existente


/*
//Acessando os elementos do DOM
let container = document.querySelector(".container");
let old_titulo = document.getElementById("titulo");

//Criando elementos novos
let new_titulo = document.createElement("h3");
let node_text = document.createTextNode("NOVO TÍTULO");

//Inserindo um texto ao paragrafo que criamos aqui no JS
new_titulo.appendChild(node_text);

//Substitui o titulo antigo pelo novo usando o Seletor salvo em uma let através de sua classe
// container.replaceChild(new_titulo, old_titulo);

//Outra forma de chamar o Seletor do pai do elemento, somente sabendo o nome do item, sem saber o pai
old_titulo.parentNode.replaceChild(new_titulo, old_titulo);

//Substiuindo um elemento do html por um novo elemento criado diretamente através do JS

//----------------------------------------------------------
//Remover o item do HTML

let titulo2 = document.querySelector("h2");

//container.removeChild(titulo2);
titulo2.parentElement.removeChild(titulo2);

*/

// var myCollection = document.getElementsByTagName("p");
// var i;
// for (i = 0; i < myCollection.length; i++) {
//     myCollection[i].style.color = "purple";
// }

/* 
// Botão Roxo
let btnEvento1 = function(){
    document.querySelector('body').style.backgroundColor='purple';
}

document.getElementById('btnEvento1').onclick = btnEvento1;

// Botão Rosa
let btnEvento2 = function(){
    document.querySelector('body').style.backgroundColor='pink';
}

document.getElementById('btnEvento2').onclick = btnEvento2;

// Botão Preto
let btnEvento3 = function(){
    document.querySelector('body').style.backgroundColor='black';
}

document.getElementById('btnEvento3').onclick = btnEvento3;

// Event Handler: onclick, mouseover, mouseout, etc.
*/

//---------------------------------------

// Botão Sair
let mudarCor = function (cor){
    document.querySelector('body').style.backgroundColor = cor;
  }

document.getElementById('btnEvento1').addEventListener('click', function(){
    mudarCor('purple');
})
  
document.getElementById('btnEvento2').addEventListener('click', function(){
    mudarCor('pink');
})

document.getElementById('btnEvento3').addEventListener('click', function(){
    mudarCor('black');
})