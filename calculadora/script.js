const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Evento para cada botón de la calculadora
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonPresionado = boton.textContent;
        
        // Si es el botón C (clear), resetear la pantalla
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        
        // Si es el botón de borrar, eliminar el último carácter
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
          // Si es el botón igual, calcular el resultado
        if (boton.id === "igual") {
            try {
                // Verificar si la operación está incompleta (termina en operador)
                const ultimoCaracter = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') {
                    pantalla.textContent = "Error!";
                } else {
                    // Usar eval para calcular el resultado de la expresión
                    pantalla.textContent = eval(pantalla.textContent);
                    // Marcar que se ha realizado una operación y mostrado su resultado
                    pantalla.dataset.nuevoNumero = "true";
                }
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }
          // Para cualquier otro botón
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!" || pantalla.dataset.nuevoNumero === "true") {
            // Si hay un 0 inicial, un error, o acabamos de mostrar un resultado
            pantalla.textContent = botonPresionado;
            // Resetear la bandera después de comenzar una nueva operación
            delete pantalla.dataset.nuevoNumero;
        } else {            // Evitar múltiples puntos decimales en el mismo número
            if (botonPresionado === ".") {
                // Verificar si ya existe un punto en la parte actual del número
                const ultimaOperacion = Math.max(
                    pantalla.textContent.lastIndexOf("+"),
                    pantalla.textContent.lastIndexOf("-"),
                    pantalla.textContent.lastIndexOf("*"),
                    pantalla.textContent.lastIndexOf("/")
                );
                const numeroActual = pantalla.textContent.substring(ultimaOperacion + 1);
                if (numeroActual.includes(".")) {
                    return;
                }
            }
              // Evitar múltiples operadores juntos
            if (['+', '-', '*', '/'].includes(botonPresionado)) {
                const ultimoCaracter = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') {
                    // Reemplazar el operador anterior con el nuevo
                    pantalla.textContent = pantalla.textContent.slice(0, -1) + botonPresionado;
                } else {
                    // Añadir el carácter presionado a la pantalla
                    pantalla.textContent += botonPresionado;
                }
            } else {
                // Añadir el carácter presionado a la pantalla
                pantalla.textContent += botonPresionado;
            }
        }
    });
});
