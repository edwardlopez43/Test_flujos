const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("logicForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const decision1 = document.getElementById("decision1").value;
    const decision2 = document.getElementById("decision2").checked;
    const decision2b = document.getElementById("decision2b").checked;

    const decisions = {
        decision1: decision1,
        decision2: decision2,
        decision2b: decision2b
    };

    // Guardar en localStorage (o enviar a un servidor)
    localStorage.setItem("decisions", JSON.stringify(decisions));

    alert("Decisiones guardadas!");
    modal.style.display = "none";
});