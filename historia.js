// Recuperar la elección de la portada
const historiaSeleccionada = localStorage.getItem('historiaSeleccionada') || 'feliz';
let indice = 0;

const tramas = {
    feliz: [
        { n: "Jaider", t: "Hola mi niña... ¿estás lista para un viaje en el tiempo?", f: "felices_1.jpg" },
        { n: "Leslie", t: "¡Jaider! Me encantan tus sorpresas. ¿A dónde vamos?", f: "felices_1.jpg" },
        // ... (resto de tus diálogos estáticos) ...
        { n: "Jaider", t: "Y yo a ti, mi reina. Este es solo el comienzo de nuestra historia infinita.", f: "felices_4.jpg" }
    ],
    ardiente: [
        // --- AQUÍ ACTIVAMOS LA ANIMACIÓN DEL BESO APASIONADO ---
        { 
            n: "Jaider", 
            t: "(Me acerco a ella, la pasión nos envuelve...)", 
            f: "felices_4.jpg", // Usamos la foto del beso
            // --- NUEVO: Añadimos la animación y el flash ---
            a: "zoom-pasion", 
            e: "flash" 
        },
        { 
            n: "Leslie", 
            t: "(Sus labios son fuego... no quiero que esto acabe nunca)", 
            f: "felices_4.jpg",
            a: "zoom-pasion" // Mantenemos el zoom mientras sigue el diálogo
        }
    ],
    todo: [
        { n: "Jaider", t: "Próximamente...", f: "portada.png" }
    ]
};

function actualizarEscena() {
    const paso = tramas[historiaSeleccionada][indice];
    
    // 1. Manejar el Fondo y Animaciones
    const fondoDiv = document.getElementById('fondo-imagen');
    const capaEfectos = document.getElementById('capa-efectos');

    // Limpiamos animaciones anteriores para que no se acumulen
    fondoDiv.className = ''; 
    capaEfectos.className = '';

    // Cambiar la foto de fondo
    fondoDiv.style.backgroundImage = `url('${paso.f}')`;

    // ACTIVAR ANIMACIÓN SI EXISTE
    if (paso.a === "zoom-pasion") {
        fondoDiv.classList.add('animacion-zoom'); // Activamos el zoom CSS
    }

    // ACTIVAR EFECTO DE FLASH SI EXISTE
    if (paso.e === "flash") {
        capaEfectos.classList.add('efecto-flash'); // Activamos el flash CSS
    }

    // 2. Cambiar Texto y Nombre (Tus IDs deben coincidir)
    document.getElementById('nombre').innerText = paso.n;
    document.getElementById('texto').innerText = paso.t;
}

function avanzar() {
    indice++;
    if (indice < tramas[historiaSeleccionada].length) {
        actualizarEscena();
    } else {
        window.location.href = 'index.html'; // O lo que uses para terminar
    }
}

// Iniciar la primera escena al cargar
window.onload = actualizarEscena;
