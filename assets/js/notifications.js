// Configura el token del bot y el chat_id
const botToken = "7612936738:AAHUa8exFi8XHQHQOatCmx4NyHawJxzIzU";
const chatId = "7384706778";

// Función para enviar notificaciones a Telegram
function sendTelegramNotification(date, time) {
    const message = `Nueva solicitud de llamada 1:1.\nFecha: ${date}\nHorario: ${time}`;
    const url = `https://api.telegram.org/bot7612936738:AAHUa8exFi8XHQHQOatCmx4NyHawJxzIzU/sendMessage?chat_id=${7384706778}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if (response.ok) {
                alert("Tu solicitud ha sido enviada con éxito.");
                console.log("Notificación enviada a Telegram.");
            } else {
                alert("Hubo un error al enviar la solicitud. Por favor intenta nuevamente.");
                console.error("Error al enviar la notificación.");
            }
        })
        .catch(error => {
            alert("Error de conexión. Por favor verifica tu red.");
            console.error("Error en la solicitud:", error);
        });
}

// Función para manejar el envío al seleccionar fecha y hora
function handleSchedule() {
    const selectedDate = document.getElementById("calendar").value;
    const selectedTime = document.getElementById("time").value;

    if (selectedDate && selectedTime) {
        sendTelegramNotification(selectedDate, selectedTime);
    } else {
        alert("Por favor selecciona una fecha y un horario.");
    }
}
