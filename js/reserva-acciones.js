document.addEventListener("DOMContentLoaded", function () {
    const botonReservar = document.getElementById("btn-reserva");
    const pantallaBienvenida = document.getElementById("reserva-bienvenida");
    const pantallaFormulario = document.getElementById("reserva-form");

    botonReservar.addEventListener("click", function () {
        pantallaBienvenida.style.display = "none";
        pantallaFormulario.style.display = "block";
    });

    const botonReservar2 = document.getElementById("btn-reserva-2");
    const pantallaFinal = document.getElementById("reserva-final");
    const formulario = document.getElementById("reserva-form");

    botonReservar2.addEventListener("click", function () {
        if (formulario.checkValidity()) {
            actualizarResumen();
            formulario.style.display = "none";
            pantallaFinal.style.display = "block";
        } else {
            formulario.reportValidity(); 
        }
    });

    const opciones = document.querySelectorAll(".num-persona");
    opciones.forEach(op => {
        op.addEventListener("click", () => {
            opciones.forEach(o => o.classList.remove("selected"));
            op.classList.add("selected");
        });
    });
});

function actualizarResumen() {
    const personasSeleccionadas = document.querySelector(".num-persona.selected")?.textContent || "No seleccionado";
    const fechaSeleccionada = document.getElementById("fecha").value;
    const horaSeleccionada = document.getElementById("hora").value;

    document.getElementById("resumen-personas").textContent = personasSeleccionadas;
    document.getElementById("resumen-fecha").textContent = fechaSeleccionada;
    document.getElementById("resumen-hora").textContent = horaSeleccionada;
}

function mostrarConfirm(){
    let resp = confirm("¿Esta seguro que quiere confirmar su reserva?")
    if(resp){
        alert("Reserva Confirmada")
    }
    else{
        alert("No confirmo su reserva")
    }
}
