const modal = document.getElementById('modal-ingresar');
const botonAbrir = document.querySelector('.button-login');
const botonCerrar = document.querySelector('.cerrar-modal');

botonAbrir?.addEventListener('click', () => {
    modal.classList.add('mostrar');
});

botonCerrar?.addEventListener('click', () => {
    modal.classList.remove('mostrar');
});

const formulario = document.getElementById('formulario-login');

if (formulario) {
    formulario.addEventListener('submit', async function (e) {
        e.preventDefault(); 

        const datos = new FormData(formulario);

        console.log("usuario:", datos.get("usuario"));
        console.log("contrasena:", datos.get("contrasena"));

        try {
            const respuesta = await fetch('/login', {
                method: 'POST',
                body: datos
            });

            const texto = await respuesta.text();

            if (texto === "ok") {
                alert("Datos Ingresados || Prueba DB Completada");
                modal.classList.remove('mostrar'); 
            } else if (texto === "fail") {
                alert("Usuario o contraseña incorrectos");
            } else {
                alert("Respuesta inesperada del servidor");
            }
        } catch (error) {
            console.error("Error al enviar datos:", error);
            alert("Hubo un error al conectar con el servidor.");
        }
    });
}
