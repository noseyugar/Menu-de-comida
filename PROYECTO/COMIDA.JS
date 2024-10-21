document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Gracias por tu mensaje, ${name}! Te responderemos pronto.`);
    
    // Limpiar el formulario
    this.reset();
});
