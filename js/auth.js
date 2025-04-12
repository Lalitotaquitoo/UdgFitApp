function login() {
    const codigo = document.getElementById("codigo").value;
    const password = document.getElementById("password").value;
  
    // Simulación de credenciales
    const usuarios = {
      "222000111": "udg123",
      "22": "22"
    };
  
    if (usuarios[codigo] === password) {
      localStorage.setItem("codigo", codigo);
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error").classList.remove("hidden");
    }
  }

  function verificarAutenticacion(){
    if(localStorage.getItem("loggedIn") != "true"){
      window.location.href = "index.html";
    }
  }

  function cerrarSesion(){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("codigo");
    window.location.href = "index.html";
  }
  