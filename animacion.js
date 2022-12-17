const enlace = document.getElementById("miVideo");
enlace.addEventListener("click", function(event) {
    // Código a ejecutar cuando se haga clic en el enlace
    event.preventDefault(); // Previene que se siga el enlace
  });
  video.addEventListener("ended", function() {
    window.history.back();
  });
  



