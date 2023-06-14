// Función para actualizar el contador cada segundo
function updateCounter() {
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');

    // Obtenemos los valores actuales de minutos y segundos
    var minutesValue = parseInt(minutes.innerText);
    var secondsValue = parseInt(seconds.innerText);

    // Decrementamos los segundos
    secondsValue--;

    // Si los segundos llegan a 0, decrementamos los minutos y reiniciamos los segundos a 59
    if (secondsValue < 0) {
        minutesValue--;
        secondsValue = 59;
    }

    // Añadimos un 0 delante si los minutos o segundos son menores a 10
    minutes.innerText = minutesValue < 10 ? '0' + minutesValue : minutesValue;
    seconds.innerText = secondsValue < 10 ? '0' + secondsValue : secondsValue;

    // Cambiamos el color del tiempo a rojo si quedan menos de 5 minutos
    if (minutesValue < 5) {
        minutes.classList.add('red-alert');
        seconds.classList.add('red-alert');
    }

    // Alerta de cuando quedan 5 minutos

    if (minutesValue === 5 && secondsValue === 0) {
        showAlert();
    }

    // Detenemos el contador cuando llega a cero
    if (minutesValue === 0 && secondsValue === 0) {
        clearInterval(intervalID);
        showAlertEnd();
    }
}

    // Función para mostrar la alerta
    function showAlert() {
        alert('¡Quedan 5 minutos!');
    }



    // Función para mostrar la alerta
    function showAlertEnd() {
        alert('¡Se acabó el tiempo!');
        // Redirigir a otro lugar (página de ejemplo)
        // window.location.href = 'https://youtube.com';
    }

    // Actualizamos el contador cada segundo
    var intervalID = setInterval(updateCounter, 1000);
