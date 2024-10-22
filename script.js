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

window.addEventListener('load', function() {
  // Cuando la página termine de cargar, añade la clase "loaded" al body
  document.body.classList.add('loaded');
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




