
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




