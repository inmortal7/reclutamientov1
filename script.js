document.getElementById('recruitmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mostrar el mensaje de carga
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = 'Enviando...';
    responseMessage.className = 'response-message';
    responseMessage.style.display = 'block';

    // Crear un FormData objeto para enviar el formulario
    const formData = new FormData(this);

    // Enviar el formulario usando fetch
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            responseMessage.textContent = '¡Formulario enviado con éxito!';
            responseMessage.className = 'response-message success';
        } else {
            responseMessage.textContent = 'Hubo un error al enviar el formulario. Inténtalo de nuevo.';
            responseMessage.className = 'response-message error';
        }
    })
    .catch(error => {
        responseMessage.textContent = 'Hubo un error al enviar el formulario. Inténtalo de nuevo.';
        responseMessage.className = 'response-message error';
    })
    .finally(() => {
        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            responseMessage.style.display = 'none';
        }, 5000);
    });
});
