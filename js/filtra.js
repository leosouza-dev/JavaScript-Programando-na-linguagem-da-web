let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  
  if(this.value.length > 0){
    pacientes.forEach(paciente => {
      let nome = paciente.querySelector(".info-nome").textContent;

      let expressaoRegular = new RegExp(this.value, "i")
      
      if(!expressaoRegular.test(nome)){
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