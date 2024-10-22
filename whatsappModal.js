
// Whatsapp Modal
const modal = document.getElementById("whatsapp-modal");
const bton = document.getElementById("open-modal");
const span = document.getElementsByClassName("close")[0];
const sendBtn = document.getElementById("send-whatsapp");
const userNameInput = document.getElementById("user-name");

// Abrir el modal al hacer clic en el botón de WhatsApp
bton.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal cuando el usuario hace clic en la "x"
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Enviar el mensaje a WhatsApp cuando se hace clic en el botón "Enviar"
sendBtn.onclick = function() {
  const userName = userNameInput.value.trim();
  if (userName) {
    const encodedMessage = encodeURIComponent(`¡Hola! Soy ${userName} y estoy interesado en sus servicios.`);
    const whatsappUrl = `https://wa.me/573138081081?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank'); // Abrir WhatsApp en una nueva ventana
    modal.style.display = "none"; // Cerrar el modal
  } else {
    alert("Por favor, ingresa tu nombre.");
  }
}