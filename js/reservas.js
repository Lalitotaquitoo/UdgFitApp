const contenedor = document.getElementById("lista-reservas");
const reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
const codigo = localStorage.getItem("codigo");

// Filtramos por el usuario actual
const misReservas = reservas.filter(r => r.usuario === codigo);

if (misReservas.length === 0) {
  contenedor.innerHTML = "<p class='text-gray-600'>No tienes reservas registradas aún.</p>";
} else {
  misReservas.forEach((reserva, index) => {
    const div = document.createElement("div");
    div.className = "card-reserva";
    div.innerHTML = `
      <h3 class="text-lg font-bold">${reserva.instalacion}</h3>
      <p><strong>Día:</strong> ${reserva.dia}</p>
      <p><strong>Hora:</strong> ${reserva.hora}</p>
      <button onclick="cancelarReserva(${index})" class="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Cancelar</button>
    `;
    contenedor.appendChild(div);
  });
}

// Cancelar reserva
function cancelarReserva(index) {
  const reservas = JSON.parse(localStorage.getItem("reservas") || "[]");
  const nuevasReservas = reservas.filter((r, i) => {
    const mismoUsuario = r.usuario === codigo;
    const mismaPos = reservas.filter(r => r.usuario === codigo)[index] === r;
    return !(mismoUsuario && mismaPos);
  });

  localStorage.setItem("reservas", JSON.stringify(nuevasReservas));
  alert("Reserva cancelada correctamente.");
  location.reload();
}
// Verificar autenticación al cargar la página
verificarAutenticacion();