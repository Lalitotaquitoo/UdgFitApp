// Lista de eventos simulada
const eventos = [
  {
    titulo: "Torneo de Fútbol",
    descripcion: "Participa en el torneo anual de fútbol de la universidad.",
    fecha: "15 de abril, 2025",
    imagen: "./public/futbol.jpg", // Ruta de la imagen
  },
  {
    titulo: "Carrera Atlética",
    descripcion: "Únete a la carrera de 5 km organizada por UDG Fit.",
    fecha: "22 de abril, 2025",
    imagen: "./public/carrera.png", // Ruta de la imagen
  },
  {
    titulo: "Torneo de Voleibol",
    descripcion: "Compite en el torneo de voleibol mixto.",
    fecha: "30 de abril, 2025",
    imagen: "./public/volei.jpg", // Ruta de la imagen
  },
];

function cargarEventos() {
  const eventosLista = document.getElementById("eventos-lista");

  if (!eventosLista) {
    console.error("El elemento con ID 'eventos-lista' no existe en el DOM.");
    return;
  }

  eventos.forEach((evento) => {
    const eventoCard = document.createElement("div");
    eventoCard.className = "evento-card";

    // Verifica si el evento tiene una imagen
    const imagenHTML = evento.imagen
      ? `<img src="${evento.imagen}" alt="${evento.titulo}" class="evento-imagen w-full h-80 object-cover rounded-md mb-4">`
      : "";

    eventoCard.innerHTML = `
      ${imagenHTML}
      <h3 class="evento-titulo text-lg font-bold mb-4">${evento.titulo}</h3>
      <p class="evento-descripcion text-gray-700 mb-4">${evento.descripcion}</p>
      <p class="evento-fecha text-gray-500">Fecha: ${evento.fecha}</p>
    `;

    eventosLista.appendChild(eventoCard);
  });
}

// Función para volver al dashboard
function volverAlDashboard() {
  window.location.href = "dashboard.html";
}

// Cargar los eventos al cargar la página
document.addEventListener("DOMContentLoaded", cargarEventos);