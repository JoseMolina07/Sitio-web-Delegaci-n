document.addEventListener("DOMContentLoaded", function() {
  var hoy = new Date();
  var diaSemana = hoy.getDay();
  
  var estado = document.getElementById("estado");
  
  if (diaSemana === 0 || diaSemana === 6) {
    estado.innerText = "Cerrado";
    estado.style.color = "red";
  } else {
    var hora = hoy.getHours();
    var minuto = hoy.getMinutes();
    
    // Horario de apertura y cierre
    var horaApertura = 8;
    var minutoApertura = 0;
    var horaCierre = 16;
    var minutoCierre = 0;
    
    if (hora > horaApertura && hora < horaCierre) {
      estado.innerText = "Ya abrimos";
      estado.style.color = "green";
    } else if (hora === horaApertura && minuto >= minutoApertura) {
      estado.innerText = "Ya abrimos";
      estado.style.color = "green";
    } else if (hora === horaCierre && minuto <= minutoCierre) {
      estado.innerText = "Ya abrimos";
      estado.style.color = "green";
    } else {
      estado.innerText = "Ya cerramos";
      estado.style.color = "white";
    }
  }
});
