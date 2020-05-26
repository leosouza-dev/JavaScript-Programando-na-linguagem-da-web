// colocando o escutador no pai - Delegando eventos (Event Bubbling)
let table = document.querySelector("table");


table.addEventListener("dblclick", function(event){
  // 1 - decobrir quem foi clicado (event.targer - quem foi clicado)
  let alvo = event.target;
  // obs - event.target é o td, queremos o tr
  // 2 - para pegar o tr - usamos o parentNode
  let paiDoAlvo = event.target.parentNode;
  paiDoAlvo.remove();
})
