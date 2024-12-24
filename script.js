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



// email js
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


//script particles
particlesJS("particles-js", {
  particles: {
    number: {
      value: 50, // Número reducido de partículas
      density: {
        enable: true,
        value_area: 800, // Área más amplia para dispersión
      },
    },
    color: {
      value: "#ffffff", // Color blanco para las partículas
    },
    shape: {
      type: "circle", // Forma circular de las partículas
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.5, // Opacidad más baja para sutilidad
      random: false,
      anim: {
        enable: false,
      },
    },
    size: {
      value: 1.5, // Tamaño pequeño
      random: true,
      anim: {
        enable: false,
      },
    },
    line_linked: {
      enable: true, // Conexiones entre partículas activadas
      distance: 200, // Distancia más corta entre partículas conectadas
      color: "#ffffff",
      opacity: 0.1, // Opacidad baja para líneas
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8, // Velocidad lenta y suave
      direction: "none",
      random: true, // Movimiento aleatorio
      straight: false,
      out_mode: "out", // Las partículas desaparecen al salir del canvas
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Reacción al pasar el mouse
      },
      onclick: {
        enable: false, // Sin reacción al hacer clic (opcional)
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 80, // Distancia de repulsión reducida
        duration: 0.2,
      },
      push: {
        particles_nb: 2, // Menos partículas generadas al hacer clic
      },
    },
  },
  retina_detect: true, // Optimización para pantallas Retina
});

// Seleccionar todas las pestañas y paneles
const tabs = document.querySelectorAll('.faq_tab');
const panels = document.querySelectorAll('.faq_panel');

// Seleccionar la primera pestaña y panel por defecto
tabs[0].classList.add('active'); // Primera pestaña activa
panels[0].classList.add('active'); // Primer panel activo

// Agregar evento de clic a cada pestaña
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Desactivar todas las pestañas y paneles
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    // Activar la pestaña y panel seleccionados
    tab.classList.add('active');
    const targetPanel = document.getElementById(tab.dataset.tab);
    targetPanel.classList.add('active');
  });
});






