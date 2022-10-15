const parrafos = document.querySelectorAll(".parrafo");
const seccion = document.querySelector(".secction");
const papelera = document.querySelector("#papelera");
const body = document.querySelector(".body");
parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (evento) => {
    evento.dataTransfer.setData("id", parrafo.id);
    // console.log("Inicio de arrastre, arrastrando " + parrafo.innerHTML);
  });
  parrafo.addEventListener("dragend", (evento) => {
    // console.log("Termino de arrastrar, arrastrando " + parrafo.innerHTML);
  });
});
body.addEventListener("dragover", (evento) => {
  evento.preventDefault();
});
body.addEventListener("drop", (evento) => {
  const transferencia = evento.dataTransfer.getData("id");
  const parrafo = document.getElementById(transferencia);
  // console.log(parrafo);
  if (evento.target.id === "papelera") {
    parrafo.remove();
  }
});
