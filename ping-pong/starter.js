//1. Acciones a los botones
//2. Botón verde asociado a jugador 1
//3. Botón rojo asociado a jugador 2
//4. Botón de reset
//5. Select de cantidad de puntos a jugar
//6. Lógica de juego

// Aquí comienza tu código

// Seleccionar elementos del DOM
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const playToSelect = document.querySelector('#playto');

// Variables para el juego
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

// Función para actualizar los puntajes
function updateScores() {
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    
    // Verificar si el juego ha terminado
    if (isGameOver) {
        // Cambiar color verde al ganador y rojo al perdedor
        if (p1Score === winningScore) {
            p1Display.style.color = 'green';
            p2Display.style.color = 'red';
        } else {
            p1Display.style.color = 'red';
            p2Display.style.color = 'green';
        }
        
        // Deshabilitar botones
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
}

// Función para resetear el juego
function resetGame() {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.style.color = 'black';
    p2Display.style.color = 'black';
    p1Button.disabled = false;
    p2Button.disabled = false;
    updateScores();
}

// Event listener para botón de jugador 1 (verde)
p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        updateScores();
    }
});

// Event listener para botón de jugador 2 (azul)
p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        updateScores();
    }
});

// Event listener para botón de reset
resetButton.addEventListener('click', resetGame);

// Event listener para cambio en select de "playing to"
playToSelect.addEventListener('change', () => {
    winningScore = parseInt(playToSelect.value);
    resetGame();
});

// Inicializar el juego
updateScores();