const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Variables para controlar el tamaño
let currentFontSize = 1.2; // en REM
let currentPadding = 12;   // en PX

noBtn.addEventListener('click', () => {
    // 1. Aumentamos las variables
    currentFontSize += 0.5; 
    currentPadding += 5;

    // 2. Aplicamos los nuevos estilos al botón de SI
    yesBtn.style.fontSize = `${currentFontSize}rem`;
    yesBtn.style.padding = `${currentPadding}px ${currentPadding * 2.5}px`;

    // 3. (Opcional) Hacemos el texto del botón NO más chiquito o cambiamos el texto
    const frases = ["¿Segura?", "¿En serio?", "Yaaapo papoecita"];
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    noBtn.innerText = fraseAleatoria;
});

yesBtn.addEventListener('click', () => {
    // Cuando diga que sí, la mandamos al login
    // Animación simple o alerta antes de irse
    alert("Siiiuuuuuuu");
    window.location.href = "login.html";
});