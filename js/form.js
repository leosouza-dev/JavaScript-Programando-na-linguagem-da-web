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