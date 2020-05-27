let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientess");

  xhr.addEventListener("load", function(){

    if(xhr.status == 200){
      msgErroAjax.innerHTML = ""

      var respostaApi = xhr.responseText;
  
      let pacientesApi = JSON.parse(respostaApi);
      
      pacientesApi.forEach(paciente => {
        adiconaPacienteNaTabela(paciente);
      });   
    }else{    
      let msgErroAjax = document.querySelector("#falha-ajax");
      msgErroAjax.innerHTML = "Erro ao buscar Pacientes! :("

      console.log(xhr.status);
      console.log(xhr.responseText);
    }

  });

  xhr.send();
});
