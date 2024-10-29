const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const btn = select('#button'); // Asegúrate de que existe un elemento con id="button"
const inputName = select('#nombre');
const inputEmail = select('#email');
const flagsElement = select('#flags');
const textsToChange = selectAll('[data-section]');

/* ===== Loader =====*/
window.addEventListener('load', () => {
    const loader = select('.container--loader');
    if (loader) {
        loader.style.cssText = 'opacity: 0; visibility: hidden';
    }
});

/*===== Header =====*/
window.addEventListener('scroll', () => {
    const header = select('header');
    if (header) {
        header.classList.toggle('abajo', window.scrollY > 0);
    }
});

/*===== Boton Menu =====*/
if (btn) { // Verifica si btn existe antes de agregar el evento
    btn.addEventListener('click', function() {
        const navMenu = select('.nav_menu');
        if (navMenu) { // Verifica que navMenu también exista
            this.classList.toggle('active');
            this.classList.toggle('not-active');
            navMenu.classList.toggle('active');
            navMenu.classList.toggle('not-active');
        }
    });
} else {
    console.error("El botón con id='button' no se encontró en el DOM.");
}



/*===== Boton y función ir arriba =====*/
window.addEventListener('scroll', () => {
    select('.go-top-container').classList.toggle('show', document.documentElement.scrollTop > 100);
});

select('.go-top-container').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

  

// Solicitar permiso para mostrar notificaciones
if (Notification.permission === "default") {
  Notification.requestPermission();
}

document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
      // Mostrar notificación cuando el usuario se va de la pestaña
      if (Notification.permission === "granted") {
          new Notification("¡Vuelve con Cre8tive Agency!", {
              body: "Te estamos esperando 😊",
              icon: "/assets/images/logo-8.png" // Reemplaza con tu icono
          });
      }
      document.title = "¡Vuelve a la pestaña!";
  } else {
      document.title = "Gracias por volver";
  }
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

document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
        // Inicializar EmailJS con la API KEY (public key)
        emailjs.init('yrfOKRShHFjzgD9_n'); // Cambia esta clave por la tuya si es necesario
    } else {
        console.error('Error: EmailJS no está definido. Verifica que el script de EmailJS se esté cargando correctamente.');
    }
  

document.querySelector('#form-c').addEventListener('submit', function(event) {
  event.preventDefault();

  // Recopilar los datos del formulario
  const formData = new FormData(this);
  const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
  };

  // Enviar los datos a través de EmailJS usando el ID del servicio y plantilla
  emailjs.send('service_ci9a4if', 'template_qmyo4ox', templateParams)
    .then((response) => {
      console.log('Correo electrónico enviado', response);
      alert('¡Tu mensaje ha sido enviado con éxito!');
      this.reset(); // Limpiar el formulario después de enviarlo
    })
    .catch((error) => {
      console.error('Error al enviar correo electrónico', error);
      alert('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.');
    });
});
})
