// === 1. TUS DATOS ===
const historias = [
    {
        fecha: "12 Mayo 2023",
        titulo: "Nuestra primera cita",
        coords: [-33.41332779548644, -70.61418901479638], 
        carpeta: "JardinJapones",
        zoom: 15,
        anecdota: "Aqui fue nuestra primera cita y fuimos caminando al jardin japones, yo estaba muy nervioso pero muy lindo todo jiji.",
    },
    {
        fecha: "2 Junio 2023",
        titulo: "Spiderman Into the Spiderverse",
        coords: [-33.41747413061016, -70.60680755184438],
        carpeta: "Spiderman",
        zoom: 15,
        anecdota: "Algo tambien muy especial e importante para el inicio de todo"
    },
    {
        fecha: "13 Julio 2023",
        titulo: "Museo",
        coords: [-33.434991907158576, -70.64446991184106],
        carpeta: "Museo",
        zoom: 15,
        anecdota: "cuando fuimos al museooo, fue todo muy lindo muy aestetic, y colocamos nuestro papelito ahi"
    },
    {
        fecha: "4 Noviembre 2023",
        titulo: "Boda",
        coords: [-33.637267560480744, -70.80325664547233],
        carpeta: "Boda",
        zoom: 15,
        anecdota: "Cuando fuimos a la boda de mi prima juntitos, todo elegante, fue todo muy lindo de inicio a fin, un recuerdo que volveria siempre"
    },
        {
        fecha: "X Noviembre-Diciembre 2023",
        titulo: "Graduación",
        coords: [-33.4503582414422, -70.8481358476504],
        carpeta: "Graduacion",
        zoom: 15,
        anecdota: "No me acuerdo la fecha y no pude ver bien, pero tu graduaciooonn del tonto colegio, fue bonito estar en ese momento importante para ti"
    },
    {
        fecha: "24 Enero 2024",
        titulo: "Fantasilandia",
        coords: [-33.46008085280786, -70.66173898068469],
        carpeta: "Fantasilandia",
        zoom: 15,
        anecdota: "Cuando fuimos a fantasilandia juntitos, en un dia caluroso pero yo estaba muy emocionado, tu me acompañaste a todo aunque tenias mucho miedo jiji"
    },
    {
        fecha: "31 Enero 2024",
        titulo: "Playa",
        coords: [-33.368860459681876, -71.66984027562567],
        carpeta: "Playa",
        zoom: 15,
        anecdota: "Cuando fuimos a la playa juntitos con mis papas, la primera vez de muchas, unos añañuñas jovencitos"
    },
    {
        fecha: "14 Febrero 2024",
        titulo: "Primer 14 de Febrero",
        coords: [-33.46095047112567, -70.84131569397043],
        carpeta: "14F2024",
        zoom: 15,
        anecdota: "nuestro primer 14 de Febrero, te quise hacer unas cositas en mi pieza y sorprenderte, tengo poquitas fotos pero yo estaba muy nervioso y salio todo bien jeje"
    },
    {
        fecha: "24 Mayo 2024",
        titulo: "Rapel",
        coords: [-34.15173823568861, -71.4520846873338],
        carpeta: "Rapel",
        zoom: 15,
        anecdota: "Cuando fuimos a rapel juntos, quizas no son los mejores recuerdos, pero de todo se rescata, fue lindo viajar a lugares juntitos (y tambien junto a la popo)"
    },
    {
        fecha: "12 Julio 2024",
        titulo: "Yendo al MUT por primera vez",
        coords: [-33.41740031541588, -70.60124103013861],
        carpeta: "1mut",
        zoom: 15,
        anecdota: "La primera vez yendo al MUT, un lugar que se volvió especial para nosotros, aunque no haya muchas fotos, fue un momento importante que guardaria muchos recuerdos lindos"
    },
    {
        fecha: "27 Julio 2024",
        titulo: "El mejor viajecito a la playa",
        coords: [-32.65851034964888, -71.44257297434706],
        carpeta: "Puchuncavi",
        zoom: 15,
        anecdota: "Sin duda nuestro mejor viaje(hasta ahora) a la playita juntitos, todo fue perfecto, el lugar, la comida, piscina y jacuzzi, la pieza para nosotros, fue todo muy lindo y sin duda me hiciste muy feliz"
    },
    {
        fecha: "15 Septiembre 2024",
        titulo: "Cumpleaños 19 de papoecita",
        coords: [-33.518587358588, -70.59964418774626],
        carpeta: "CumpleañosPapoecita",
        zoom: 15,
        anecdota: "Cuando salimos el 14 a esa cosa de huesos y humanos, estuvimos ahi viendo cositas, divertido, luego fuimos a comer a bellavista la florida, todo para terminar celebrando y cantandote cumpleaños, algo muy lindo y que nunca olvidare"
    },
    {
        fecha: "18 Enero 2025",
        titulo: "Viaje a La Serena",
        coords: [-29.906219953873382, -71.25062827662],
        carpeta: "Serena",
        zoom: 15,
        anecdota: "Nuestro viaje a la serena en vacaciones, algo nuevo pero que fue muy lindo estar una semanita en la playa, fuimos al gym, playita, estuvimos con tu familia, todo muy lindo, me faltaron fotitos"
    },
    {
        fecha: "15 Abril 2025",
        titulo: "Embestidura",
        coords: [-33.3917140065156, -70.50092550315343],
        carpeta: "Embestidura",
        zoom: 15,
        anecdota: "Cuando fue tu investiduraaa, siempre recuerdo que me senti mal por no traerte flores, pero yo trate con todas mis fuerzas de estar ahi para ti, me gusto verte en tu trajecito y tan feliz"
    },
    {
        fecha: "11 Septiembre 2025",
        titulo: "Comidiiitaaa mut",
        coords: [-33.41740031541588, -70.6012410301386],
        carpeta: "Comidita mut",
        zoom: 15,
        anecdota: "Aqui una recopilacion(pequeña, me faltan fotos) de las veces que hemos ido a comer al mut, cosas muy ñami"
    },
    {
        fecha: "18 Septiembre 2025",
        titulo: "Fonda 18",
        coords: [-33.46246282088212, -70.65744297431495],
        carpeta: "18",
        zoom: 15,
        anecdota: "Cuando pasamos el 18 juntitoos yendo a una fonda, aunque tu watita estaba malita la pasamos muy bien y fue algo nuevo"
    },
    {
        fecha: "4 Octubre 2025",
        titulo: "Primera vez en un Estadio",
        coords: [-33.46433761886022, -70.60998524362996],
        carpeta: "estadio",
        zoom: 15,
        anecdota: "Mi primera vez yendo a un estadio de futbol a ver un partido, algo muy emocionante para mi y tu estuviste ahi para acompañarme, la mejor compañia"
    },
    {
        fecha: "19 Octubre 2025",
        titulo: "Mercado Paula",
        coords: [-33.431721151361046, -70.54543674732983],
        carpeta: "evento",
        zoom: 15,
        anecdota: "Cuando fuimos al evento de improvisado sin saber nada, pero que igual la pasamos muy bien, comimos cositas y estuvimos juntitos jiji"
    },
    {
        fecha: "31 Octubre 2025",
        titulo: "Halloween 2025",
        coords: [-33.431721151361046, -70.54543674732983],
        carpeta: "halloween",
        zoom: 15,
        anecdota: "Este halloween especial, donde nos disfrazamos algo mas elaborado de snupi y charlie brown, me encanto como te veias y que estuvieramos juntitos disfrazados"
    },
    {
        fecha: "5 Diciembre 2025",
        titulo: "Salidita Random",
        coords: [-33.41441046504722, -70.59710391498473],
        carpeta: "salidita",
        zoom: 15,
        anecdota: "Una salidita random, de improvisto pero que fui muy feliz a tu lado, aunque comimos comida peru, fue algo lindo"
    },
    {
        fecha: "25 Diciembre 2025",
        titulo: "Navidad 2025",
        coords: [-33.41441046504722, -70.59710391498473],
        carpeta: "navidad",
        zoom: 15,
        anecdota: "Esta ultima navidad, que desearia tener mas fotitos pero no encontre, siempre es lindo compartir esta festividad y el espiritu contigo mi grinch jeje"
    },
    {
        fecha: "6 Enero 2026",
        titulo: "Salidita Parque Arauco",
        coords: [-33.400453996243186, -70.57527865712557],
        carpeta: "thetop",
        zoom: 15,
        anecdota: "Una salidita al parque arauco, donde probamos el koychi que estaba muy rico pero tambien muy caro, y donde mas importante luego probamos el matcha addict"
    },
    {
        fecha: "11 Enero 2026",
        titulo: "Festival del Cine",
        coords: [-33.4022184874382, -70.57253207512584],
        carpeta: "Festivaldelcine",
        zoom: 15,
        anecdota: "Sin duda una de nuestras mejores salidas, de inicio a fin haciendo cositas, comiendo cosas ricas luego yendo al parque arauco compramos cositas y luego en el festival del cine donde comimos ñami, estuvimos ahi y vimos una buena pelicula"
    },
    {
        fecha: "14 Enero 2026",
        titulo: "Olys Brunch",
        coords: [-33.43323783124079, -70.62542608780925],
        carpeta: "olys brunch",
        zoom: 15,
        anecdota: "Para terminar con algo mas reciente, cuando fuimos a probar el brunch del olys bagel, conocimos un lugar nuevo, comimos el brunch que estaba medio rico y luego jugamos jiji"
    },
];

// === 2. INICIALIZAR MAPA ===
const map = L.map('map-container', { zoomControl: false }).setView(historias[0].coords, historias[0].zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Array para guardar las referencias a los marcadores
const marcadores = [];

historias.forEach((historia, index) => {
    // Crear marcador para CADA historia
    const marker = L.marker(historia.coords).addTo(map);
    
    // Agregar popup con el título (opcional, se ve al hacer click)
    marker.bindPopup(`<b>${historia.titulo}</b><br>${historia.fecha}`);

    // Al hacer click en el marcador, ir a esa historia
    marker.on('click', () => {
        irAHistoria(index);
    });

    marcadores.push(marker); // Guardamos el marcador en la lista
});

// === 3. GENERAR LA BARRA DE TIEMPO (PUNTITOS) ===
const track = document.getElementById('timeline-track');

historias.forEach((historia, index) => {
    // Crear el punto
    const dot = document.createElement('div');
    dot.classList.add('timeline-dot');
    // Si es el primero, lo marcamos activo
    if(index === 0) dot.classList.add('active');
    
    // Al hacer click, vamos a esa historia
    dot.onclick = () => irAHistoria(index);
    
    track.appendChild(dot);
});

// === 4. FUNCIÓN PRINCIPAL: MOVER TODO ===
function irAHistoria(index) {
    indiceActual = index;
    const data = historias[index];

    // A. Mover Mapa hacia el destino
    map.flyTo(data.coords, data.zoom, { duration: 1.5 });
    
    // B. Resaltar el marcador (abriendo su popup)
    marcadores.forEach(m => m.closePopup()); // Cerrar otros
    marcadores[index].openPopup(); // Abrir el actual

    // C. Actualizar Tarjeta Flotante
    document.getElementById('card-date').innerText = data.fecha;
    document.getElementById('card-title').innerText = data.titulo;

    // D. Actualizar los puntos de la barra inferior
    const dots = document.querySelectorAll('.timeline-dot');
    dots.forEach(d => d.classList.remove('active'));
    if(dots[index]) dots[index].classList.add('active');

    // E. Actualizar menú lateral (iluminar el activo)
    const menuItems = document.querySelectorAll('#chapter-list li');
    menuItems.forEach(li => li.classList.remove('active'));
    if(menuItems[index]) menuItems[index].classList.add('active');
}

// Inicializar con la primera historia
irAHistoria(0);

// === 5. MODAL (VER RECUERDO) ===
// Esta función se llama desde el botón de la tarjeta flotante
function verDetalleCompleto() {
    const data = historias[indiceActual];
    const modal = document.getElementById('memory-modal');
    const galleryContainer = document.getElementById('gallery-container');
    
    // 1. Limpiamos las fotos anteriores
    galleryContainer.innerHTML = ''; 

    // Ahora intentará buscar hasta la 20 (o el número máximo que creas tener)
    // No te preocupes si en una carpeta solo hay 3 fotos; 
    // el código "img.onerror" ocultará automáticamente las que falten (de la 4 a la 20).
    for (let i = 1; i <= 20; i++) {
        const img = document.createElement('img');
        
        // CONSTRUCCIÓN DINÁMICA DE LA RUTA:
        // assets/img/ + nombre_carpeta + /Photo X.jpg
        img.src = `assets/img/${data.carpeta}/Photo ${i}.jpg`;
        
        img.className = 'gallery-img';
        img.alt = `Foto ${i} de ${data.titulo}`;
        img.loading = "lazy"; 
        
        img.onclick = function() {
            abrirPantallaCompleta(this.src);
        };
        // Manejo de errores: Si la foto no existe (ej: solo hay 3), se oculta sola
        img.onerror = function() {
            this.style.display = 'none';
        };
        
        galleryContainer.appendChild(img);
    }

    // 3. Texto
    document.getElementById('modal-text').innerText = data.anecdota;
    
    // 4. Mostrar
    modal.classList.remove('hidden');
}

// Cerrar modal
document.querySelector('.close-modal').onclick = () => {
    document.getElementById('memory-modal').classList.add('hidden');
}

// === 6. LOGICA DEL CONTADOR (CRONÓMETRO) ===

// IMPORTANTE: Ajusta esta fecha a SU fecha de inicio real
const FECHA_INICIO = new Date("2023-08-11T00:00:00"); 

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - FECHA_INICIO;

    // Cálculos matemáticos para sacar días, horas, etc.
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Insertamos el texto en el HTML
    const elemento = document.getElementById("uptime-clock");
    if (elemento) {
        elemento.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }
}

// === 7. FUNCIONES DE PANTALLA COMPLETA (ZOOM) ===
function abrirPantallaCompleta(src) {
    const fsModal = document.getElementById('fullscreen-modal');
    const fsImg = document.getElementById('fullscreen-img');
    
    fsImg.src = src; // Ponemos la misma foto que clickeaste
    fsModal.classList.remove('hidden'); // Mostramos el modal oscuro
}

function cerrarPantallaCompleta() {
    const fsModal = document.getElementById('fullscreen-modal');
    fsModal.classList.add('hidden'); // Ocultamos
}

// Cerrar también si hacen click en el fondo negro (fuera de la foto)
document.getElementById('fullscreen-modal').onclick = function(e) {
    if (e.target !== document.getElementById('fullscreen-img')) {
        cerrarPantallaCompleta();
    }
};

// === 8. LÓGICA DEL MENÚ LATERAL ===
const menuList = document.getElementById('chapter-list');
const menuDiv = document.getElementById('chapter-menu');

// 1. Generar lista automáticamente basada en las historias
historias.forEach((historia, index) => {
    const li = document.createElement('li');
    li.innerText = `${index + 1}. ${historia.titulo}`; // Ej: "1. Primera Cita"
    
    li.onclick = () => {
        irAHistoria(index);
        toggleMenu(); // Cerrar menú al seleccionar
    };
    
    menuList.appendChild(li);
});

// 2. Función para Abrir/Cerrar
function toggleMenu() {
    // Si tiene la clase hidden, se la quitamos (mostrar). Si no, se la ponemos (ocultar).
    // NOTA: En el CSS definimos que .hidden tiene transform: translateX(100%)
    if (menuDiv.classList.contains('hidden')) {
        menuDiv.classList.remove('hidden');
    } else {
        menuDiv.classList.add('hidden');
    }
}

// Hacemos que la función se ejecute cada 1000 milisegundos (1 segundo)
setInterval(actualizarContador, 1000);

// La ejecutamos una vez al inicio para que no tarde 1 seg en aparecer
actualizarContador();

