
function cerrarSesion() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("codigo");
  window.location.href = "index.html";
}
verificarAutenticacion();