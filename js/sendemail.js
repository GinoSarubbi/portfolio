(function(){
    emailjs.init("XB3OvHNue_oid0KNT");
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('service_1tl140l', 'template_82vwnid', this)
      .then(function() {
         location.href ="https://ginosarubbi.com/gracias.html";
        document.getElementById("contact-form").reset();
      }, function(error) {
        alert("❌ Error al enviar el mensaje...\n" + JSON.stringify(error));
      });
  });
