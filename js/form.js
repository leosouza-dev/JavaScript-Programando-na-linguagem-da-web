//eventos do browser - evento click
let btnAdicionaPaciente = document.querySelector("#adicionar-paciente");

btnAdicionaPaciente.addEventListener("click", function(event){
  event.preventDefault();
  
  let form = document.querySelector("#form-adiciona");
  let paciente = obtemPacienteDoFormulario(form);

  if(!validaPaciente(paciente)){
    alert("paciente invalido!")
    return;
  }

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

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){

  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe)

  return td;
}

function validaPaciente(paciente){
  if(validaPeso(paciente.peso) && validaAltura(paciente.altura)){
    return true;
  }

  return false;
}