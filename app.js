// Lista donde se almacenan los nombres originales
const amigos = [];

// Para llevar control de los que aún no han sido sorteados
let amigosDisponibles = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Validar que solo tenga letras A-Z y espacios (sin tildes ni ñ)
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre debe contener solo letras sin tildes ni ñ.");
        return;
    }

    // Verificar que no se repita
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar a la lista de amigos
    amigos.push(nombre);
    amigosDisponibles.push(nombre); // también lo agregamos a los disponibles

    // Mostrarlo en la lista visual
    const lista = document.getElementById('listaAmigos');
    const item = document.createElement('li');
    item.textContent = nombre;
    lista.appendChild(item);

    // Limpiar el input
    input.value = "";
}

// Función para hacer el sorteo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    // Validar si no hay ningún nombre en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = `<li style="color: red;">No hay nombres en la lista.</li>`;
        return;
    }

    // Validar si ya se sortearon todos
    if (amigosDisponibles.length === 0) {
        alert("Ya se sortearon todos los amigos. Se reiniciará la lista.");

        // Limpiar todo
        document.getElementById('listaAmigos').innerHTML = "";
        resultado.innerHTML = "";

        amigos.length = 0;
        amigosDisponibles.length = 0;
        return;
    }

    // Elegir nombre aleatorio
    const indice = Math.floor(Math.random() * amigosDisponibles.length);
    const amigoSorteado = amigosDisponibles[indice];

    // Mostrar el mensaje sobrescribiendo el anterior
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    // Eliminar el nombre de los disponibles
    amigosDisponibles.splice(indice, 1);
}

