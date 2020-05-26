// retorna h1 
let titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

//buscando dados dos pacientes
let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  let peso = paciente.querySelector(".info-peso").textContent;
  let altura = paciente.querySelector(".info-altura").textContent;
  let imcTd = paciente.querySelector(".info-imc");
  
  let pesoEhValido = validaPeso(peso);
  let alturaEhValida = validaAltura(altura);

  if(!pesoEhValido){
    imcTd.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaEhValida){
    imcTd.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
  }

  if(pesoEhValido && alturaEhValida){
    let imc = calculaImc(peso, altura);
    imcTd.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso > 0 && peso < 1000){
    return true;
  }

  return false;
}

function validaAltura(altura){
  if(altura > 0 && altura < 3.00){
    return true;
  }

  return false;
}

function calculaImc(peso, altura){
  return (peso / (altura * altura)).toFixed(2);
}



