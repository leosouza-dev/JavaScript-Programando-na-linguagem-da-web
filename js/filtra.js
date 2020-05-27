let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  
  if(this.value.length > 0){
    pacientes.forEach(paciente => {
      let nome = paciente.querySelector(".info-nome").textContent;
      
      if(nome != this.value){
        paciente.classList.add("invisivel");
      }else{
        paciente.classList.remove("invisivel");
      }
    });
  }else{
    pacientes.forEach(paciente => {
      paciente.classList.remove("invisivel");
    });
  }

});