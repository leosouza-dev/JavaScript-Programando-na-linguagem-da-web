let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
  //this.value
  pacientes.forEach(paciente => {
    let nome = paciente.querySelector(".info-nome").textContent;
    
    if(nome != this.value){
      paciente.classList.add("invisivel");
    }else{
      paciente.classList.remove("invisivel");
    }
  });

});