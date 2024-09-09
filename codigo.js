// Declarar variable
let i = 0;

// Ciclo while
let resultado = '';
while(i < 10) {
    resultado += i + ' '; // Agrega los números al string de resultado
    i++;
}

// Mostrar el resultado en el elemento con id 'resultado'
document.getElementById('resultado').textContent = resultado.trim();