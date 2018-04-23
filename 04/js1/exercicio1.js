var start = Date.now();  
var response = prompt("Qual o seu nome?");  
var end = Date.now();  
var elapsed = (end - start) / 1000;  
document.write("Você demorou " + elapsed + " segundos" + " para responder: " + response); 
