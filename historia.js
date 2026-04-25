let historiaActual = "inicio";
let indice = 0;

const tramas = {
    "inicio": [
        { n: "Jaider", t: "Hola mi niña... me alegra tanto que hayas decidido entrar aquí.", f: "felices_1.jpg" },
        { n: "Leslie", t: "Sabes que siempre me sorprendes, Jaider. ¿De qué se trata todo esto?", f: "felices_1.jpg" },
        { n: "Jaider", t: "Es un pequeño viaje por lo que somos... y por lo que podemos ser.", f: "felices_1.jpg" },
        { n: "Jaider", t: "Pero hoy, el destino no lo escribo yo. Lo escribes tú con cada elección.", f: "felices_1.jpg" },
        { n: "Jaider", t: "Dime, Leslie... ¿hacia dónde quieres que nos lleve el corazón hoy?", f: "felices_1.jpg", 
          opciones: [
              { texto: "❤ A un lugar lleno de paz y ternura", destino: "ruta_feliz" },
              { texto: "🔥 A un momento donde el fuego hable por nosotros", destino: "ruta_pasion" }
          ] 
        }
    ],

    "ruta_feliz": [
        { n: "Jaider", t: "Elegiste la ternura... como ese brillo que tienes en los ojos cuando ríes.", f: "felices_2.jpg" },
        { n: "Leslie", t: "Es que contigo es fácil ser feliz, no necesito nada más.", f: "felices_2.jpg" },
        { n: "Jaider", t: "A veces me quedo mirándote y me pregunto qué hice para merecerte.", f: "felices_2.jpg" },
        { n: "Jaider", t: "Cada día a tu lado es como un capítulo de mi libro favorito.", f: "felices_3.jpg" },
        { n: "Leslie", t: "Prométeme que no dejaremos de escribir este libro nunca.", f: "felices_3.jpg" },
        { n: "Jaider", t: "Te lo prometo. Mi mano siempre estará lista para sostener la tuya.", f: "felices_3.jpg" },
        { n: "Jaider", t: "Gracias por ser mi paz en medio de tanto ruido.", f: "felices_3.jpg" },
        { n: "Sistema", t: "Has completado el camino del AMOR ETERNO. ❤️", f: "felices_3.jpg" }
    ],

    "ruta_pasion": [
        { n: "Jaider", t: "Sabía que elegirías la intensidad... hay una chispa entre nosotros que no se puede apagar.", f: "felices_4.jpg", anim: "zoom" },
        { n: "Leslie", t: "Es que cuando estamos cerca, el mundo parece desaparecer.", f: "felices_4.jpg", anim: "zoom" },
        { n: "Jaider", t: "(Me acerco un poco más, sintiendo tu respiración cerca de la mía...)", f: "felices_4.jpg", anim: "zoom" },
        { n: "Jaider", t: "No hay nada más adictivo que la forma en que me miras en momentos así.", f: "felices_4.jpg", anim: "zoom" },
        { n: "Leslie", t: "Jaider... haces que me pierda por completo.", f: "felices_4.jpg", anim: "zoom" },
        { n: "Jaider", t: "Entonces perdámonos juntos. Que el resto del mundo espere.", f: "felices_4.jpg", anim: "zoom" },
        { n: "Jaider", t: "Te amo con una fuerza que me quema por dentro.", f: "felices_4.jpg", anim: "zoom" },
        { n: "Sistema", t: "Has desbloqueado el final de PASIÓN INFINITA. 🔥", f: "felices_4.jpg" }
    ]
};

function actualizarEscena() {
    const paso = tramas[historiaActual][indice];
    const fondo = document.getElementById('fondo-imagen');
    const contenedorOpciones = document.getElementById('contenedor-opciones');

    // Cambiar Fondo y Animación
    fondo.style.backgroundImage = `url('${paso.f}')`;
    fondo.className = paso.anim === "zoom" ? "zoom-vivo" : "";

    // Cambiar Texto
    document.getElementById('nombre').innerText = paso.n;
    document.getElementById('texto').innerText = paso.t;

    // Mostrar u Ocultar Opciones
    if (paso.opciones) {
        contenedorOpciones.innerHTML = ""; 
        contenedorOpciones.style.display = "flex";
        paso.opciones.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = "boton-opcion";
            btn.innerText = opt.texto;
            btn.onclick = (e) => {
                e.stopPropagation(); 
                historiaActual = opt.destino;
                indice = 0;
                contenedorOpciones.style.display = "none";
                actualizarEscena();
            };
            contenedorOpciones.appendChild(btn);
        });
    } else {
        contenedorOpciones.style.display = "none";
    }
}

function avanzar() {
    if (tramas[historiaActual][indice].opciones) return;

    indice++;
    if (indice < tramas[historiaActual].length) {
        actualizarEscena();
    } else {
        // Al terminar, enviamos un mensaje final y vuelve a la portada
        alert("Nuestra historia no termina aquí... continúa en la vida real. Te amo.");
        window.location.href = "index.html";
    }
}

window.onload = actualizarEscena;
