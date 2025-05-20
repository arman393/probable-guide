const claveSecreta = "refugio123"; // cambia esto si lo necesitas

function verificarClave() {
  const entradaClave = document.getElementById("claveEntrada").value;
  if (entradaClave === claveSecreta) {
    document.getElementById("loginContainer").classList.add("oculto");
    document.getElementById("diarioContainer").classList.remove("oculto");
    cargarTexto();
    mostrarFecha();
  } else {
    document.getElementById("loginMensaje").textContent = "Contraseña incorrecta.";
  }
}

function guardarTexto() {
  const entrada = document.getElementById("entrada").value;
  if (!entrada) return;

  const textoCifrado = CryptoJS.AES.encrypt(entrada, claveSecreta).toString();
  localStorage.setItem("miDiario", textoCifrado);

  document.getElementById("mensaje").textContent = "Guardado correctamente.";
  setTimeout(() => document.getElementById("mensaje").textContent = "", 2000);
}

function cargarTexto() {
  const textoGuardado = localStorage.getItem("miDiario");
  if (textoGuardado) {
    const bytes = CryptoJS.AES.decrypt(textoGuardado, claveSecreta);
    const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("entrada").value = textoDescifrado;
  }
}

function borrarTodo() {
  if (confirm("¿Estás seguro de que quieres borrar tu diario?")) {
    localStorage.removeItem("miDiario");
    document.getElementById("entrada").value = "";
    document.getElementById("mensaje").textContent = "Diario eliminado.";
    setTimeout(() => document.getElementById("mensaje").textContent = "", 2000);
  }
}

function exportarTxt() {
  const texto = document.getElementById("entrada").value;
  const fecha = new Date().toLocaleString();
  const contenido = `Mi Diario - ${fecha}\n\n${texto}`;
  const blob = new Blob([contenido], { type: "text/plain" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = "MiDiario.txt";
  enlace.click();
}

function mostrarFecha() {
  const hoy = new Date();
  const fechaTexto = hoy.toLocaleDateString("es-DO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  document.getElementById("fecha").textContent = `Hoy es ${fechaTexto}`;
      }
