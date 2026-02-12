// === CONFIGURACIÓN (EDITA ESTO) ===
const NOMBRE_CORRECTO = "chetito"; // Escríbelo en minúsculas aquí
const FECHA_CORRECTA = "2023-08-11"; // Formato AÑO-MES-DÍA (importante respetar los guiones)

// ==================================

const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');
const loginCard = document.querySelector('.login-card');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const nombreInput = document.getElementById('name').value;
    const fechaInput = document.getElementById('date').value;

    // Lógica de validación
    // .trim() elimina espacios al inicio y final
    // .toLowerCase() convierte todo a minúsculas para comparar fácil
    if (nombreInput.trim().toLowerCase() === NOMBRE_CORRECTO && fechaInput === FECHA_CORRECTA) {
        
        // ¡ÉXITO! Redirigimos
        errorMsg.classList.add('hidden');
        window.location.href = "timeline.html"; 

    } else {
        // ERROR
        mostrarError();
    }
});

function mostrarError() {
    errorMsg.textContent = "Papoe mala";
    errorMsg.classList.remove('hidden');
    
    // Añadimos la clase de animación 'shake'
    loginCard.classList.add('shake');

    // Quitamos la clase después de 500ms para que se pueda volver a animar si falla de nuevo
    setTimeout(() => {
        loginCard.classList.remove('shake');
    }, 500);
}