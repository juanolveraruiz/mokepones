function iniciarJuego() {
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    if (inputHipodoge.checked) {
        alert('Seleccionaste a Hipodoge')
    } else if (inputCapipepo.checked) {
        alert('Seleccionaste a Capipepo')
    } else if (inputRatigueya.checked) {
        alert('Seleccionaste a Ratigueya')
    } else {
        alert('¿Para que presionas "Seleccionar" si no has seleccionado ninguna mascota, idiota?')
    }
}

function seleccionaMascotaEnemigo() {
    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)