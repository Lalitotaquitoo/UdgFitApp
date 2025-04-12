const rutinas = [
    // Rutinas para principiantes
    {
      titulo: "Rutina para Principiantes - Día 1",
      duracion: "30 minutos",
      nivel: "principiante",
      descripcion: "Una rutina básica para quienes están comenzando en el mundo del fitness.",
    },
    {
      titulo: "Rutina para Principiantes - Día 2",
      duracion: "35 minutos",
      nivel: "principiante",
      descripcion: "Ejercicios suaves para mejorar la resistencia y la fuerza inicial.",
    },
    // Rutinas intermedias
    {
      titulo: "Rutina Intermedia - Día 1",
      duracion: "45 minutos",
      nivel: "intermedio",
      descripcion: "Diseñada para quienes ya tienen algo de experiencia y buscan un desafío mayor.",
    },
    {
      titulo: "Rutina Intermedia - Día 2",
      duracion: "50 minutos",
      nivel: "intermedio",
      descripcion: "Incluye ejercicios de fuerza y cardio para mejorar el rendimiento.",
    },
    // Rutinas avanzadas
    {
      titulo: "Rutina Avanzada - Día 1",
      duracion: "60 minutos",
      nivel: "avanzado",
      descripcion: "Una rutina intensa para quienes buscan llevar su entrenamiento al siguiente nivel.",
    },
    {
      titulo: "Rutina Avanzada - Día 2",
      duracion: "65 minutos",
      nivel: "avanzado",
      descripcion: "Entrenamiento avanzado con ejercicios de alta intensidad.",
    },
  ];
  
  // Función para renderizar las rutinas
  function renderizarRutinas(filtro = "todos") {
    const contenedor = document.querySelector("section");
    contenedor.innerHTML = ""; // Limpiar el contenido previo
  
    // Filtrar las rutinas según el nivel seleccionado
    const rutinasFiltradas = filtro === "todos" ? rutinas : rutinas.filter(r => r.nivel === filtro);
  
    // Renderizar cada rutina
    rutinasFiltradas.forEach(rutina => {
      const div = document.createElement("div");
      div.className = "rutina bg-white p-4 rounded shadow mb-4";
      div.setAttribute("data-nivel", rutina.nivel);
  
      div.innerHTML = `
        <h3 class="text-lg font-bold text-blue-600">${rutina.titulo}</h3>
        <p><strong>Duración:</strong> ${rutina.duracion}</p>
        <p><strong>Nivel:</strong> ${rutina.nivel.charAt(0).toUpperCase() + rutina.nivel.slice(1)}</p>
        <p>${rutina.descripcion}</p>
      `;
  
      contenedor.appendChild(div);
    });
  }
  
  // Filtrar rutinas al cambiar el nivel en el select
  document.getElementById("filtro-nivel").addEventListener("change", function () {
    const nivelSeleccionado = this.value;
    renderizarRutinas(nivelSeleccionado);
  });
  
  // Renderizar todas las rutinas al cargar la página
  document.addEventListener("DOMContentLoaded", () => renderizarRutinas());