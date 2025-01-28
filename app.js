// Array para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Agregar el nombre al array y a la lista visible
    amigos.push(nombre);
    actualizarLista();

    // Limpiar el campo de texto
    input.value = "";
    input.focus();
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega al menos un nombre antes de realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}

