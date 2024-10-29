  (function() {
    // Inicializar EmailJS con la API KEY (public key)
    emailjs.init('yrfOKRShHFjzgD9_n');

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
      emailjs.send('service_ci9a4if', 'template_qmyo4ox', {
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