const tramas = {
    feliz: [
        { n: "Jaider", t: "Hola mi niña... ¿lista para recordar nuestro 7 de febrero?", p: "jaider", f: "fondo1.jpg" },
        { n: "Leslie", t: "Siempre estoy lista si es contigo, amor.", p: "leslie" },
        { n: "Jaider", t: "Ese día supe que mi vida no volvería a ser la misma.", p: "jaider" }
        // Añade aquí más diálogos felices...
    ],
    ardiente: [
        { n: "Narrador", t: "La temperatura comienza a subir...", f: "fondo_hot.jpg" },
        { n: "Jaider", t: "No tienes idea de cuánto deseo tenerte cerca ahora mismo.", p: "jaider" },
        { n: "Leslie", t: "Pruébalo... hazme sentir que soy tuya.", p: "leslie" },
        { n: "Jaider", t: "Eres mi adicción más dulce y peligrosa.", p: "jaider" }
        // Añade aquí más diálogos hot...
    ],
    todo: [
        { n: "Narrador", t: "A veces el amor también duele...", f: "fondo_triste.jpg" },
        { n: "Leslie", t: "Jaider, a veces siento que la distancia nos gana.", p: "leslie" },
        { n: "Jaider", t: "Perdóname por mis errores, Leslie. Te necesito.", p: "jaider" },
        { n: "Narrador", t: "Pero al final, siempre vuelven a elegirse.", f: "playa.jpg" },
        { n: "Jaider", t: "Te amo en cada episodio de mi vida.", p: "jaider" }
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
    
    if (paso.f) document.getElementById('escenario').style.backgroundImage = `url('${paso.f}')`;

    const pj = document.getElementById(paso.p === 'jaider' ? 'p-jaider' : 'p-leslie');
    const otro = document.getElementById(paso.p === 'jaider' ? 'p-leslie' : 'p-jaider');

    if (pj) {
        pj.classList.add('en-escena', 'hablando');
        if (otro) otro.classList.remove('hablando');
    }

    index++;
}

avanzar();

