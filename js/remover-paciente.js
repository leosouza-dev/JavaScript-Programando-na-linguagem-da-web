// colocando o escutador no pai - Delegando eventos (Event Bubbling)
let table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  //aguarda os 600ms da animação
  setTimeout(function(){
    event.target.parentNode.remove();
  }, 600);
})
