let btnAdicionaPaciente = document.querySelector("#adicionar-paciente");

btnAdicionaPaciente.addEventListener("click", function(event){
  event.preventDefault();
  
  
  let form = document.querySelector("#form-adiciona");
  let paciente = obtemPacienteDoFormulario(form);

  let erros = validaPaciente(paciente);

  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
  }

  //isolando em uma função
  adiconaPacienteNaTabela(paciente)
  
  let listaDeErros = document.querySelector("#mensagem-erro");
  listaDeErros.innerHTML = "";

  form.reset();
});


function obtemPacienteDoFormulario(form){

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
  let erros = [];

  if(paciente.nome.length == 0)
    erros.push("Nome não pode ser em branco");

  if(paciente.gordura.length == 0)
    erros.push("Gordura não pode ser em branco");

  if(!validaPeso(paciente.peso)) 
    erros.push("Peso Inválido");

  if(!validaAltura(paciente.altura))
    erros.push("Altura Inválida");

  return erros;
}

function exibeMensagensDeErro(erros){
  let listaDeErros = document.querySelector("#mensagem-erro");

  //limpando as mensagens de erro - todas as li's!
  listaDeErros.innerHTML = "";

  erros.forEach(erro => {
    let li = document.createElement("li");
    li.textContent = erro;

    listaDeErros.appendChild(li);
  });
}

function adiconaPacienteNaTabela(paciente){
  let pacienteTr = montaTr(paciente);

  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}