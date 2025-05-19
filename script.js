const frases = {
  es: [
    "Eres más fuerte de lo que crees.",
    "Cada día es una nueva oportunidad.",
    "Tu historia vale la pena."
  ],
  en: [
    "You are stronger than you think.",
    "Every day is a new opportunity.",
    "Your story is worth telling."
  ]
};

const textos = {
  es: {
    titulo: "Tu Diario Secreto",
    mensaje: "Escribe aquí tus pensamientos o secretos.",
    placeholder: "¿Qué te gustaría contar hoy?",
    boton: "Guardar entrada",
    fraseTitulo: "Frase inspiradora del día:"
  },
  en: {
    titulo: "Your Secret Diary",
    mensaje: "Write your thoughts or secrets here.",
    placeholder: "What would you like to share today?",
    boton: "Save entry",
    fraseTitulo: "Inspirational quote of the day:"
  }
};

const lang = navigator.language.startsWith("en") ? "en" : "es";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("titulo").innerText = textos[lang].titulo;
  document.getElementById("mensaje").innerText = textos[lang].mensaje;
  document.getElementById("entrada").placeholder = textos[lang].placeholder;
  document.querySelector("button").innerText = textos[lang].boton;
  document.getElementById("frase-titulo").innerText = textos[lang].fraseTitulo;
  document.getElementById("frase").innerText =
    frases[lang][Math.floor(Math.random() * frases[lang].length)];

  mostrarHistorial();
});

function guardar() {
  const texto = document.getElementById("entrada").value;
  if (texto.trim() !== "") {
    const entradasGuardadas = JSON.parse(localStorage.getItem("entradas")) || [];
    const nuevaEntrada = {
      texto: texto,
      fecha: new Date().toLocaleString()
    };
    entradasGuardadas.unshift(nuevaEntrada);
    localStorage.setItem("entradas", JSON.stringify(entradasGuardadas));

    mostrarHistorial();

    alert(lang === "es" ? "Entrada guardada." : "Entry saved.");
    document.getElementById("entrada").value = "";
  } else {
    alert(lang === "es" ? "Por favor escribe algo." : "Please write something.");
  }
}

function mostrarHistorial() {
  const contenedor = document.getElementById("historial");
  contenedor.innerHTML = "";

  const entradas = JSON.parse(localStorage.getItem("entradas")) || [];

  if (entradas.length > 0) {
    entradas.forEach((entrada) => {
      const div = document.createElement("div");
      div.className = "entrada-historial";
      div.innerHTML = `<strong>${entrada.fecha}</strong><p>${entrada.texto}</p>`;
      contenedor.appendChild(div);
    });
  }
}
function guardar() {

  const texto = document.getElementById("entrada").value;

  if (texto.trim() !== "") {

    let entradas = JSON.parse(localStorage.getItem("entradas")) || [];

    entradas.push({ texto, fecha: new Date().toLocaleString() });

    localStorage.setItem("entradas", JSON.stringify(entradas));

    alert(lang === "es" ? "Entrada guardada." : "Entry saved.");

    document.getElementById("entrada").value = "";

    mostrarEntradas();

  } else {

    alert(lang === "es" ? "Por favor escribe algo." : "Please write something.");

  }

}

function mostrarEntradas() {

  const contenedor = document.getElementById("entradas-guardadas");

  contenedor.innerHTML = "";

  const entradas = JSON.parse(localStorage.getItem("entradas")) || [];

  entradas.forEach((entrada) => {

    const div = document.createElement("div");

    div.className = "entrada";

    div.innerHTML = `<p>${entrada.texto}</p><small>${entrada.fecha}</small><hr>`;

    contenedor.appendChild(div);

  });

}

document.addEventListener("DOMContentLoaded", mostrarEntradas);

mostrarEntradas();
function nuevaFrase() {

  const fraseAleatoria = frases[lang][Math.floor(Math.random() * frases[lang].length)];

  document.getElementById("frase").innerText = fraseAleatoria;

}
function nuevaFrase() {

  const fraseAleatoria = frases[lang][Math.floor(Math.random() * frases[lang].length)];

  document.getElementById("frase").innerText = fraseAleatoria;

}
function marcarLeido(boton) {

  boton.innerText = "Leído";

  boton.disabled = true;

}

function nuevaFrase() {

  const fraseAleatoria = frases[lang][Math.floor(Math.random() * frases[lang].length)];

  document.getElementById("frase").innerText = fraseAleatoria;

}
function guardar() {

  const texto = document.getElementById("entrada").value;

  const respuestaEl = document.getElementById("respuesta");

  if (texto.trim() !== "") {

    let entradas = JSON.parse(localStorage.getItem("diario")) || [];

    entradas.push({ texto, fecha: new Date().toLocaleString() });

    localStorage.setItem("diario", JSON.stringify(entradas));

    document.getElementById("entrada").value = "";

    // Mostrar respuesta automática

    const respuestas = {

      es: [

        "Gracias por compartir, todo lo que sientes es válido.",

        "Tu historia importa, no estás solo.",

        "Estoy aquí para escucharte siempre que lo necesites."

      ],

      en: [

        "Thank you for sharing, your feelings are valid.",

        "Your story matters, you're not alone.",

        "I'm here to listen whenever you need."

      ]

    };

    const respuestaRandom = respuestas[lang][Math.floor(Math.random() * respuestas[lang].length)];

    respuestaEl.innerText = respuestaRandom;

  } else {

    alert(lang === "es" ? "Por favor escribe algo." : "Please write something.");

  }

}

const libros = document.querySelectorAll('.libro');

libros.forEach(libro => {

  libro.addEventListener('click', () => {

    libro.classList.toggle('seleccionado');

  });

});