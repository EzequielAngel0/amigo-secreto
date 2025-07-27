// Lista donde se almacenan los nombres
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Agregar a la lista de amigos
    amigos.push(nombre);

    // Mostrarlo en la lista visual
    const lista = document.getElementById('listaAmigos');
    const item = document.createElement('li');
    item.textContent = nombre;
    lista.appendChild(item);

    // Limpiar el input
    input.value = "";
}