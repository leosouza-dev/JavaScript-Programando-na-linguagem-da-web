//eventos do browser - evento click
let btnAdicionaPaciente = document.querySelector("#adicionar-paciente");

btnAdicionaPaciente.addEventListener("click", function(event){
  event.preventDefault();
  
  let form = document.querySelector("#form-adiciona");
  let paciente = obtemPacienteDoFormulario(form);

  let pacienteTr = montaTr(paciente);

  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  //limpa o formulário
  form.reset();
});


function obtemPacienteDoFormulario(form){

  // usando um objeto - json
  let paciente = {
    "nome": form.nome.value,
    "peso": form.peso.value,
    "altura": form.altura.value,
    "gordura": form.gordura.value,
    "imc": calculaImc(form.peso.value, form.altura.value)
  };

  return paciente;
}

function montaTr(paciente){

  let pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // substituindo três linhas pela funcção - muitcho mió
  let nomeTd = montaTd(paciente.nome, "info-nome");
  let pesoTd = montaTd(paciente.peso, "info-peso");
  let alturaTd = montaTd(paciente.altura, "info-altura");
  let gorduraTd = montaTd(paciente.gordura, "info-gordura");
  let imcTd = montaTd(paciente.imc, "info-imc");

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}

function montaTd(dado, classe){

  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe)

  return td;
}
