const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        return resolve("Hola promesa")
        reject(new Error("Hubo un error"))
    }, 2000)
})