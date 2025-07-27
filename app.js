// Lista donde se almacenan los nombres
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Validar que solo tenga letras A-Z y espacios
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(nombre)) {
        alert("El nombre no puede tener carácteres especiales ni numeros.");
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



// Función para hacer el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Primero debes añadir al menos un amigo.");
        return;
    }

    // Elegir un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    const item = document.createElement('li');
    item.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(item);
}
