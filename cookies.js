//Configuración de cookies
document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    const rejectButton = document.getElementById('rejectCookies');
  
    // Verificar si el usuario ya aceptó o rechazó las cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Mostrar el aviso de cookies si no se ha tomado ninguna decisión
        cookieConsent.classList.add('fade-in');
    }
  
    // Al hacer clic en "Aceptar"
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true'); // Guardar preferencia en localStorage
        cookieConsent.style.display = 'none'; // Ocultar la ventana de cookies
    });
  
    // Al hacer clic en "Rechazar"
    rejectButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false'); // Guardar rechazo en localStorage
        cookieConsent.style.display = 'none'; // Ocultar la ventana de cookies
    });
  });