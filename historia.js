let historiaActual = "inicio";
let indice = 0;

const tramas = {
    "inicio": [
        { n: "Jaider", t: "Hola mi niña... bienvenida a nuestro rincón especial.", f: "felices_1.jpg" },
        { n: "Jaider", t: "¿Qué quieres que hagamos hoy?", f: "felices_1.jpg", 
          opciones: [
              { texto: "Recordar momentos lindos", destino: "ruta_feliz" },
              { texto: "Tener una cita intensa", destino: "ruta_pasion" }
          ] 
        }
    ],
    "ruta_feliz": [
        { n: "Jaider", t: "Cada sonrisa tuya es un regalo para mí.", f: "felices_2.jpg" },
        { n: "Leslie", t: "Y tú eres mi lugar favorito en el mundo.", f: "felices_3.jpg" },
        { n: "Sistema", t: "FIN: Amor Eterno ❤️", f: "felices_3.jpg" }
    ],
    "ruta_pasion": [
        { n: "Jaider", t: "Me encanta cuando nos perdemos el uno en el otro...", f: "felices_4.jpg", anim: "zoom" },
        { n: "Jaider", t: "Te amo como a nadie, Leslie.", f: "felices_4.jpg", anim: "zoom" },
        { n: "Sistema", t: "FIN: Pasión Infinita 🔥", f: "felices_4.jpg" }
    ]
};

function actualizarEscena() {
    const paso = tramas[historiaActual][indice];
    const fondo = document.getElementById('fondo-imagen');
    const contenedorOpciones = document.getElementById('contenedor-opciones');

    fondo.style.backgroundImage = `url('${paso.f}')`;
    fondo.className = paso.anim === "zoom" ? "zoom-vivo" : "";
    document.getElementById('nombre').innerText = paso.n;
    document.getElementById('texto').innerText = paso.t;

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
    }
}

function avanzar() {
    if (tramas[historiaActual][indice].opciones) return;
    indice++;
    if (indice < tramas[historiaActual].length) {
        actualizarEscena();
    } else {
        window.location.href = "index.html";
    }
}
window.onload = actualizarEscena;
