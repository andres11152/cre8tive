// ===== Utilidades para seleccionar elementos =====
const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

// Elementos seleccionados por ID o clase
const btn = select('#button'); // Botón del menú
const inputName = select('#nombre'); // Input del nombre
const inputEmail = select('#email'); // Input del email
const flagsElement = select('#flags'); // Elemento de banderas
const textsToChange = selectAll('[data-section]'); // Elementos con datos a cambiar

// ===== Loader (Pantalla de carga) =====
window.addEventListener('load', () => {
    const loader = select('.container--loader');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }
});

// ===== Cambiar estilos del Header al hacer scroll =====
window.addEventListener('scroll', () => {
    const header = select('header');
    if (header) {
        header.classList.toggle('abajo', window.scrollY > 0);
    }
});

// ===== Botón del Menú =====
if (btn) {
    btn.addEventListener('click', function() {
        const navMenu = select('.nav_menu');
        if (navMenu) {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        } else {
            console.error("El menú de navegación no se encontró en el DOM.");
        }
    });
}

// ===== Botón "Ir arriba" =====
const goTopButton = select('.go-top-container');
if (goTopButton) {
    window.addEventListener('scroll', () => {
        goTopButton.classList.toggle('show', document.documentElement.scrollTop > 100);
    });

    goTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Permiso para Notificaciones =====
if (Notification.permission === "default") {
    Notification.requestPermission();
}

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        if (Notification.permission === "granted") {
            new Notification("¡Vuelve con Cre8tive Agency!", {
                body: "Te estamos esperando 😊",
                icon: "/assets/images/logo-8.png"
            });
        }
        document.title = "¡Vuelve a la pestaña!";
    } else {
        document.title = "Gracias por volver";
    }
});

// ===== EmailJS: Envío de correos =====
document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init('yrfOKRShHFjzgD9_n'); // Inicializa EmailJS con la clave pública
    } else {
        console.error('Error: EmailJS no está definido.');
    }

    const form = select('#form-c');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(this);
            const templateParams = {
                name: `${formData.get('nombre')} ${formData.get('apellido')}`,
                email: formData.get('correo'),
                phone: formData.get('celular'),
                company: formData.get('empresa') || 'No especificado',
                service: formData.get('servicio'),
                budget: formData.get('presupuesto'),
                details: formData.get('detalles') || 'No se proporcionaron detalles adicionales'
            };

            emailjs.send('service_ci9a4if', 'template_qmyo4ox', templateParams)
                .then(response => {
                    console.log('Correo electrónico enviado', response);
                    alert('¡Tu mensaje ha sido enviado con éxito!');
                    form.reset();
                })
                .catch(error => {
                    console.error('Error al enviar correo electrónico', error);
                    alert('Hubo un error al enviar tu mensaje.');
                });
        });
    } else {
        console.error("El formulario con id='form-c' no se encontró en el DOM.");
    }
});

// ===== Partículas en el fondo =====
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5 },
            size: { value: 1.5, random: true },
            line_linked: { enable: true, distance: 200, color: "#ffffff", opacity: 0.1, width: 1 },
            move: { enable: true, speed: 0.8, random: true, out_mode: "out" }
        },
        interactivity: {
            events: { onhover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 80, duration: 0.2 } }
        },
        retina_detect: true
    });
} else {
    console.error("Error: particlesJS no está definido.");
}

// ===== Tabs de FAQ =====
const tabs = selectAll('.faq_tab');
const panels = selectAll('.faq_panel');

if (tabs.length > 0 && panels.length > 0) {
    tabs[0].classList.add('active');
    panels[0].classList.add('active');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(panel => panel.classList.remove('active'));

            tab.classList.add('active');
            const targetPanel = select(`#${tab.dataset.tab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}

// ===== Tabs de Servicios =====
const serviceTabs = selectAll('.services-tab');
const servicePanels = selectAll('.services-panel');

if (serviceTabs.length > 0 && servicePanels.length > 0) {
    serviceTabs[0].classList.add('active');
    servicePanels[0].classList.add('active');

    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            serviceTabs.forEach(t => t.classList.remove('active'));
            servicePanels.forEach(panel => panel.classList.remove('active'));

            tab.classList.add('active');
            const targetPanel = select(`#${tab.dataset.tab}`);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
}
