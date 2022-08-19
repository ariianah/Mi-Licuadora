var estadoLicuadora = "apagado";
var licuadora = document.getElementById("blender");
var botoonLicuadora= document.getElementById("blender-button-sound");
var sonidoLicuadora= document.getElementById("blender-sound");

function controlarLicuadora () {
    if (estadoLicuadora == "apagado") {
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
       /*  console.log ("Me prendiste"); */
    }else {
        estadoLicuadora = "apagado";
        hacerBrrBrr();
        licuadora.classList.remove("active");
       /*  console.log("Me apagaste"); */
    }
}

function hacerBrrBrr () {
  if (sonidoLicuadora.paused ) {
      botoonLicuadora.play();
      sonidoLicuadora.play();
  }else {
      botoonLicuadora.play();
      sonidoLicuadora.pause();
      sonidoLicuadora.currentTime = 0;
  }
}