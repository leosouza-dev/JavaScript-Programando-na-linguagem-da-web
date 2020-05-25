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
      let imc = peso / (altura * altura);
      imcTd.textContent = imc.toFixed(2);
    }
  }
  
}


//eventos do browser - evento click
let btnAdicionaPaciente = document.querySelector("#adicionar-paciente");

btnAdicionaPaciente.addEventListener("click", function(event){
  //evita o reload
  event.preventDefault();
  
  //pegar os dados do form
  let form = document.querySelector("#form-adiciona");

  // buscando pelo atributo "name"
  let nome = form.nome.value;
  let peso = form.peso.value;
  let altura = form.altura.value;
  let gordura = form.gordura.value;

  // criando elemntos do html a partir do js
  let pacienteTr = document.createElement("tr");

  let pesoTd = document.createElement("td");
  let nomeTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td");

  // passando os dados para as tds
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  // colocando as tds na tr - appendChild
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  // colocando a tr na tabela - DOM
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
});



