// Otra forma de crear promesas

function dummy() {
    if (Math.floor(Date.now() / 1000) % 2 == 0) {
        return Promise.resolve("Hola mundo")
    }
    return Promise.reject("Error")
}

// dummy().then(console.log).catch(console.log)

// new Promise // status: pending
// resolve: resuelta
// reject: rechazada
Promise.resolve("Hola mundo").then(console.log)