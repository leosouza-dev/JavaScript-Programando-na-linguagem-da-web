// retorna h1 
let titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

//buscando dados do primeiro paciente
let paciente = document.querySelector("#primeiro-paciente");
let peso = paciente.querySelector(".info-peso").textContent;
let altura = paciente.querySelector(".info-altura").textContent;

// calculo do imc
let imc = peso / (altura * altura);

console.log(imc);


