function atualizarHora() {
    let display = document.querySelector('.display');

    let now = new Date();

    let hour = fixHour(now.getHours()) + ':' + fixHour(now.getMinutes()) + ':' + fixHour(now.getSeconds());

    display.textContent = hour;
    display.style.color ='hwb(24 0% 9%)'
}

function fixHour(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

atualizarHora();
setInterval(atualizarHora, 1000);

console.log(hour);


