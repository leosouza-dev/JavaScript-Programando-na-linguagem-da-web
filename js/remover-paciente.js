// colocando o escutador no pai - Delegando eventos (Event Bubbling)
let table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
  event.target.parentNode.remove();
})
