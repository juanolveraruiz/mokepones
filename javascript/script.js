const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascota = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionMokepones
let inputHipodoge 
let inputCapipepo
let inputRatigueya
let mascotaJugador
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

let hipodoge = new Mokepon('Hipodoge','./assets/mokepons_mokepon_hipodoge_attack.png', 5)

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png', 5)

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
  { nombre: '💦', id: 'boton-agua'},
  { nombre: '💦', id: 'boton-agua'},
  { nombre: '💦', id: 'boton-agua'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '💦', id: 'boton-agua'},
  { nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '💦', id: 'boton-agua'},
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {

  mokepones.forEach((mokepon) => {
    opcionMokepones = `
      <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon tarjeta-hipodoge" for=${mokepon.nombre}>
          <p>${mokepon.nombre}</p>
          <img
            src=${mokepon.foto}
            alt=${mokepon.nombre}
          />
        </label>
    `
  contenedorTarjetas.innerHTML += opcionMokepones
  let inputHipodoge = document.getElementById("Hipodoge")
  let inputCapipepo = document.getElementById("Capipepo")
  let inputRatigueya = document.getElementById("Ratigueya")
  })
  
  sectionSeleccionarAtaque.style.display = "none"
  sectionReiniciar.style.display = "none"
  botonMascota.addEventListener("click", seleccionarMascotaJugador)
  botonFuego.addEventListener("click", ataqueFuego)
  botonAgua.addEventListener("click", ataqueAgua)
  botonTierra.addEventListener("click", ataqueTierra)
  botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {

  sectionSeleccionarMascota.style.display = "none"
  sectionSeleccionarAtaque.style.display = "flex"



  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id
    mascotaJugador = inputHipodoge.id
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id
    mascotaJugador = inputCapipepo.id
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id
    mascotaJugador = inputRatigueya.id
  } else {
    alert(
      '¿Para que presionas "Seleccionar" si no has seleccionado ninguna mascota, idiota?'
    )
  }

  extraerAtaques(mascotaJugador)
  seleccionaMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
  let ataques
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador == mokepones[i].nombre) {
      ataques = mokepones[i].ataques
    }
    
  }
  mostrarAtaques(ataques)        
}

function seleccionaMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length -1)
  
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
}

function ataqueFuego() {
  ataqueJugador = "FUEGO"
  ataqueAleatorioEnemigo()
}

function ataqueAgua() {
  ataqueJugador = "AGUA"
  ataqueAleatorioEnemigo()
}

function ataqueTierra() {
  ataqueJugador = "TIERRA"
  ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3)

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO"
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA"
  } else {
    ataqueEnemigo = "TIERRA"
  }

  combate()
}

function combate() {


  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE")
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE")
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
  }

  revisarVidas()
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("¡FELICIDADES! GANASTE 🎉")
  } else if (vidasJugador == 0) {
    crearMensajeFinal("PERDISTE :C")
  }
}

function crearMensaje(resultado) {


  let nuevoAtaqueDelJugador = document.createElement("p")
  let nuevoAtaqueDelEnemigo = document.createElement("p")

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
  /* let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota enemiga ataco con ' + ataqueEnemigo + ' - ' + resultado 
    sectionMensajes.appendChild(parrafo) */
}

function crearMensajeFinal(resultadoFinal) {
  
  sectionReiniciar.style.display = "block"
  sectionMensajes.innerHTML = resultadoFinal
  botonFuego.disabled = true
  botonAgua.disabled = true
  botonTierra.disabled = true
}

function reiniciarJuego() {
  location.reload()
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
