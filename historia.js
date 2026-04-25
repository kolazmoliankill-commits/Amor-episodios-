// Recuperar la elección de la portada
const historiaSeleccionada = localStorage.getItem('historiaSeleccionada') || 'feliz';
let indice = 0;

const tramas = {
    feliz: [
        { n: "Jaider", t: "Hola mi niña... ¿estás lista para un viaje en el tiempo?", f: "felices_1.jpg" },
        { n: "Leslie", t: "¡Jaider! Me encantan tus sorpresas. ¿A dónde vamos?", f: "felices_1.jpg" },
        { n: "Jaider", t: "A ese día que cambió mi mundo por completo... cuando nuestras miradas se cruzaron por primera vez.", f: "felices_1.jpg" },
        { n: "Jaider", t: "¿Recuerdas lo mucho que nos reíamos en el parque por cualquier tontería?", f: "felices_2.jpg" },
        { n: "Leslie", t: "¡Sí! Estaba muy nerviosa, pero contigo todo se sentía tan natural y real.", f: "felices_2.jpg" },
        { n: "Jaider", t: "Tengo algo para ti, Leslie... No es solo un detalle, es una promesa de corazón.", f: "felices_3.jpg" },
        { n: "Jaider", t: "Prometo ser siempre tu lugar seguro, el que te cuide y te ame en cada paso.", f: "felices_3.jpg" },
        { n: "Leslie", t: "Eres lo mejor que me ha pasado, Jaider. Te amo muchísimo.", f: "felices_4.jpg" },
        { n: "Jaider", t: "Y yo a ti, mi reina. Este es solo el comienzo de nuestra historia infinita.", f: "felices_4.jpg" }
    ],
    ardiente: [
        { n: "Jaider", t: "Próximamente...", f: "portada.png" }
    ],
    todo: [
        { n: "Jaider", t: "Próximamente...", f: "portada.png" }
    ]
};

function actualizarEscena() {
    const paso = tramas[historiaSeleccionada][indice];
    
    // Cambiar fondo (buscamos el contenedor por su ID)
    const fondo = document.body; // O usa document.getElementById('contenedor') si tienes uno
    fondo.style.backgroundImage = `url('${paso.f}')`;
    fondo.style.backgroundSize = "cover";
    fondo.style.backgroundPosition = "center";
    fondo.style.backgroundAttachment = "fixed";

    // Cambiar Texto y Nombre
    document.getElementById('nombre').innerText = paso.n;
    document.getElementById('texto').innerText = paso.t;
}

function avanzar() {
    indice++;
    if (indice < tramas[historiaSeleccionada].length) {
        actualizarEscena();
    } else {
        window.location.href = 'index.html';
    }
}

// Iniciar la primera escena al cargar
window.onload = actualizarEscena;
