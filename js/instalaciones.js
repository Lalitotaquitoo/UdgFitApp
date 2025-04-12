const instalaciones = [
  {
    nombre: "Gimnasio Central",
    tipo: "Gimnasio",
    horario: "6:00 AM - 10:00 PM",
    ubicacion: "CUCS",
    imagen: "./public/cucs.jpg", 
  },
  {
    nombre: "Alberca Olímpica",
    tipo: "Alberca",
    horario: "7:00 AM - 8:00 PM",
    ubicacion: "CUCEA",
    imagen: "./public/alberca.jpg", 
  },
  {
    nombre: "Cancha de fútbol rápido",
    tipo: "Cancha",
    horario: "8:00 AM - 10:00 PM",
    ubicacion: "CUCEI",
    imagen: "./public/cancha.jpg", 
  },
  {
    nombre: "Pista de atletismo",
    tipo: "Pista",
    horario: "5:30 AM - 9:00 PM",
    ubicacion: "CUCSH",
    imagen: "./public/pista.jpg", 
  },
  {
    nombre: "Área de Crossfit",
    tipo: "Zona funcional",
    horario: "6:00 AM - 9:00 PM",
    ubicacion: "CUAAD",
    imagen: "./public/crosfit.jpg", 
  },
];

const contenedor = document.getElementById("lista-instalaciones");

// Renderizar tarjetas
instalaciones.forEach((inst, index) => {
  const div = document.createElement("div");
  div.className = "bg-white p-4 rounded shadow";

  // Verifica si la instalación tiene una imagen
  const imagenHTML = inst.imagen
    ? `<img src="${inst.imagen}" alt="${inst.nombre}" class="w-full h-64 object-cover rounded-md mb-4">`
    : "";

  div.innerHTML = `
    ${imagenHTML}
    <h3 class="text-lg font-bold">${inst.nombre}</h3>
    <p><strong>Tipo:</strong> ${inst.tipo}</p>
    <p><strong>Horario:</strong> ${inst.horario}</p>
    <p><strong>Ubicación:</strong> ${inst.ubicacion}</p>
    <button onclick="abrirModal(${index})" class="mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
      Reservar
    </button>
  `;
  contenedor.appendChild(div);
});

// Modal
function abrirModal(index) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("instalacion-id").value = index;
}

function cerrarModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("form-reserva").reset();
}

// Guardar reserva
document.getElementById("form-reserva").addEventListener("submit", function (e) {
  e.preventDefault();
  const index = document.getElementById("instalacion-id").value;
  const dia = document.getElementById("reserva-dia").value;
  const hora = document.getElementById("reserva-hora").value;
  const codigo = localStorage.getItem("codigo");

  const reserva = {
    usuario: codigo,
    instalacion: instalaciones[index].nombre,
    dia,
    hora,
  };

  const reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
  reservas.push(reserva);
  localStorage.setItem("reservas", JSON.stringify(reservas));

  alert(`Reserva realizada en ${reserva.instalacion} para el ${reserva.dia} a las ${reserva.hora}`);
  cerrarModal();
});

// Verificar autenticación al cargar la página
verificarAutenticacion();