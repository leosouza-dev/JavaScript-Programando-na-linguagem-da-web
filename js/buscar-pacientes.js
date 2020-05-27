let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    // Aqui o tipo é string - json
    var respostaApi = xhr.responseText;

    // convertendo o valor (json) em Objetos JavaScript
    let pacientesApi = JSON.parse(respostaApi);
    
    pacientesApi.forEach(paciente => {
      adiconaPacienteNaTabela(paciente);
    });   
  });

  xhr.send();

});
