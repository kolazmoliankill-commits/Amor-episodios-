const tramas = {
    feliz: [
        { n: "Jaider", t: "Hola mi niña... ¿lista para recordar nuestro 7 de febrero?", p: "jaider", f: "fondo_feliz.jpg" },
        { n: "Leslie", t: "¡Hola mi amor! Siempre estoy lista si es contigo.", p: "leslie" },
        { n: "Jaider", t: "Ese día supe que mi vida no volvería a ser la misma.", p: "jaider" },
        { n: "Leslie", t: "Me hacías reír tanto... me sentía tan segura a tu lado.", p: "leslie" },
        { n: "Jaider", t: "Y así seguirá siendo, eres mi razón de ser.", p: "jaider" }
    ],
    ardiente: [
        { n: "Narrador", t: "La temperatura comienza a subir...", f: "fondo_ardiente.jpg" },
        { n: "Jaider", t: "No tienes idea de cuánto deseo tenerte cerca ahora mismo.", p: "jaider" },
        { n: "Leslie", t: "Pruébalo... hazme sentir que soy tuya una vez más.", p: "leslie" },
        { n: "Jaider", t: "Eres mi vicio, mi tentación favorita.", p: "jaider" },
        { n: "Leslie", t: "Solo tú me haces sentir este fuego...", p: "leslie" }
    ],
    todo: [
        { n: "Narrador", t: "En el amor, no todo es color de rosa...", f: "fondo_triste.jpg" },
        { n: "Leslie", t: "Jaider, a veces siento que la distancia nos está ganando.", p: "leslie" },
        { n: "Jaider", t: "Lo sé, amor... pero no voy a dejar de luchar por nosotros.", p: "jaider" },
        { n: "Leslie", t: "A veces duele tanto extrañarte.", p: "leslie" },
        { n: "Jaider", t: "Incluso en los momentos más tristes, te sigo eligiendo mil veces.", p: "jaider" },
        { n: "Narrador", t: "Porque al final, el amor real lo aguanta todo.", f: "playa.jpg" }
    ]
};

let index = 0;
const seleccion = localStorage.getItem('historiaSeleccionada') || 'feliz';
const historia = tramas[seleccion];

function avanzar() {
    if (index >= historia.length) {
        window.location.href = 'index.html';
        return;
    }

    const paso = historia[index];
    document.getElementById('nombre').innerText = paso.n;
    document.getElementById('texto').innerText = paso.t;
    
    // Cambia el fondo si el paso tiene uno definido
    if (paso.f) {
        document.getElementById('escenario').style.backgroundImage = `url('${paso.f}')`;
    }

    const pj = document.getElementById(paso.p === 'jaider' ? 'p-jaider' : 'p-leslie');
    const otro = document.getElementById(paso.p === 'jaider' ? 'p-leslie' : 'p-jaider');

    // Efecto de aparición y brillo
    if (pj) {
        pj.classList.add('en-escena', 'hablando');
        if (otro) otro.classList.remove('hablando');
    }

    index++;
}

// Inicia el primer diálogo
avanzar();
