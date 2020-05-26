// let pacientes = document.querySelectorAll(".paciente");
//pacientes já foi declarado em outro arquivo

pacientes.forEach(paciente => {
  paciente.addEventListener("dblclick", function(){
    this.remove(); // remove a quem o evento está atrelado
  })
  
});