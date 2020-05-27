let botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function(){

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function(){
    console.log(xhr.responseText);     
  });

  xhr.send();
  
});
