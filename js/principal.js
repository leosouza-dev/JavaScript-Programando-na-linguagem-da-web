// retorna h1 
let titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

//buscando dados do primeiro paciente
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
  }
  else{
    if(alturaInvalido){
      imcTd.textContent = "Altura Inválida";
    }
    else{
      let imc = peso / (altura * altura);
      imcTd.textContent = imc.toFixed(2);
    }
  }
  
}

// Outra opção - ForEach
// pacientes.forEach(paciente => {

//   let peso = paciente.querySelector(".info-peso").textContent;
//   let altura = paciente.querySelector(".info-altura").textContent;
//   let imcTd = paciente.querySelector(".info-imc");
  
//   // operadores lógico - validação
//   let pesoInvalido = (peso <= 0) || (peso >= 1000);
//   let alturaInvalido = (altura <= 0) || (altura >= 3);
  
//   if(pesoInvalido){
//     imcTd.textContent = "Peso Inválido";
//   }
//   else{
//     if(alturaInvalido){
//       imcTd.textContent = "Altura Inválida";
//     }
//     else{
//       let imc = peso / (altura * altura);
//       imcTd.textContent = imc;
//     }
//   }
  
// });





