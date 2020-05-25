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
  
  // operadores lógico - validação
  let pesoInvalido = (peso <= 0) || (peso >= 1000);
  let alturaInvalido = (altura <= 0) || (altura >= 3);
  
  if(pesoInvalido){
    imcTd.textContent = "Peso Inválido";

    //alterantiva - mudando a cor da linha "tr" pelo js
    // paciente.style.color = "lightcoral";

    //add classe css
    paciente.classList.add("paciente-invalido");
  }
  else{
    if(alturaInvalido){
      imcTd.textContent = "Altura Inválida";

      //add classe css
      paciente.classList.add("paciente-invalido");
    }
    else{
      let imc = calculaImc(peso, altura);
      imcTd.textContent = imc;
    }
  }
  
}

function calculaImc(peso, altura){
  return (peso / (altura * altura)).toFixed(2);
}



