let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
let sectionReiniciar = document.getElementById("reiniciar");
let botonMascota = document.getElementById("boton-mascota");
let botonFuego = document.getElementById("boton-fuego");
let botonAgua = document.getElementById("boton-agua");
let botonTierra = document.getElementById("boton-tierra");
let botonReiniciar = document.getElementById("boton-reiniciar");

let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
let inputHipodoge = document.getElementById("hipodoge");
let inputCapipepo = document.getElementById("capipepo");
let inputRatigueya = document.getElementById("ratigueya");
let spanMascotaJugador = document.getElementById("mascota-jugador");

let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

let spanVidasJugador = document.getElementById("vidas-jugador");
let spanVidasEnemigo = document.getElementById("vidas-enemigo");

let sectionMensajes = document.getElementById("resultado");
let ataqueDelJugador = document.getElementById("ataque-del-jugador");
let ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  
  sectionSeleccionarAtaque.style.display = "none";

  
  sectionReiniciar.style.display = "none";

  
  botonMascota.addEventListener("click", seleccionarMascotaJugador);

  
  botonFuego.addEventListener("click", ataqueFuego);
  
  botonAgua.addEventListener("click", ataqueAgua);
  
  botonTierra.addEventListener("click", ataqueTierra);

  
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {

  sectionSeleccionarMascota.style.display = "none";


  sectionSeleccionarAtaque.style.display = "flex";



  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert(
      '¿Para que presionas "Seleccionar" si no has seleccionado ninguna mascota, idiota?'
    );
  }
  seleccionaMascotaEnemigo();
}

function seleccionaMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);


  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {


  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("¡FELICIDADES! GANASTE 🎉");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("PERDISTE :C");
  }
}

function crearMensaje(resultado) {


  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
  /* let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota enemiga ataco con ' + ataqueEnemigo + ' - ' + resultado 
    sectionMensajes.appendChild(parrafo) */
}

function crearMensajeFinal(resultadoFinal) {
  
  sectionReiniciar.style.display = "block";

  

  sectionMensajes.innerHTML = resultadoFinal;

  
  botonFuego.disabled = true;
  
  botonAgua.disabled = true;
  
  botonTierra.disabled = true;
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
