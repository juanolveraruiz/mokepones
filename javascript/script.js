function iniciarJuego() {
    let botonMascota = document.getElementById("boton-mascota")
    botonMascota.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('¿Para que presionas "Seleccionar" si no has seleccionado ninguna mascota, idiota?')
    }
    seleccionaMascotaEnemigo()
}

function seleccionaMascotaEnemigo() {
    let enemigoAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (enemigoAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (enemigoAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)