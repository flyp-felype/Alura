var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
})