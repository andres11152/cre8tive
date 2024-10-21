const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const btn = select('#button');
const inputName = select('#nombre');
const inputEmail = select('#email');
const flagsElement = select('#flags');
const textsToChange = selectAll('[data-section]');

/* ===== Loader =====*/
window.addEventListener('load', () => {
    select('.container--loader').style.cssText = 'opacity: 0; visibility: hidden';
});

/*===== Header =====*/
window.addEventListener('scroll', () => {
    select('header').classList.toggle('abajo', window.scrollY > 0);
});

/*===== Boton Menu =====*/
btn.addEventListener('click', function() {
    const navMenu = select('.nav_menu');
    this.classList.toggle('active');
    this.classList.toggle('not-active');
    navMenu.classList.toggle('active');
    navMenu.classList.toggle('not-active');
});

/*===== Cambio de idioma =====*/
const changeLanguage = async language => {
    const texts = await fetch(`./languages/${language}.json`).then(res => res.json());
    textsToChange.forEach(textToChange => {
        const { section, value } = textToChange.dataset;
        textToChange.innerHTML = texts[section][value];
    });
};

flagsElement.addEventListener('click', e => changeLanguage(e.target.parentElement.dataset.language));



/*===== Boton y función ir arriba =====*/
window.addEventListener('scroll', () => {
    select('.go-top-container').classList.toggle('show', document.documentElement.scrollTop > 100);
});

select('.go-top-container').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/*===== Efecto 3d imagen principal===== */
const el = document.getElementById("image_home");
const {clientHeight: height, clientWidth: width} = el;
const transformString = `
    perspective(500px)
    scale(1.1)`;

el.addEventListener('mousemove', ({layerX, layerY}) => {
    const yRotation = (layerX - width / 2) / width * 20;
    const xRotation = (layerY - height / 2) / height * 20;
    el.style.transform = `${transformString} rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
});

el.addEventListener('mouseout', () => {
    el.style.transform = `${transformString} rotateX(0) rotateY(0)`;
});
/*=======Formulario de contacto========*/
(function() {
    // Inicializar EmailJS con la API KEY (public key)
    emailjs.init('rCES-z4W5dUOKLzNB');

    // Agregar un evento de escucha al formulario cuando se envía (submit)
    const form = document.querySelector('#form-c');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Recopilar los datos del formulario
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');

      // Enviar los datos a través de EmailJS
      // poner el id del servicio y la platilla
      emailjs.send('service_62bdlbb', 'template_7t44p9h', {
        from_name: name,
        from_email: email,
        subject: subject,
        message_html: message
      })
      .then((response) => {
        console.log('Correo electrónico enviado', response);
        alert('¡Tu mensaje ha sido enviado con éxito!');
        form.reset();
      }, (error) => {
        console.log('Error al enviar correo electrónico', error);
        alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
      });
    });
  })();


// Obtener elementos del DOM
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

window.addEventListener('load', function() {
  // Cuando la página termine de cargar, añade la clase "loaded" al body
  document.body.classList.add('loaded');
});

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



