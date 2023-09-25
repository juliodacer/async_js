// despues de un periodo de tiempo definido ejecutan una funcion

// El método global setTimeout() establece un temporizador que
// ejecuta una función o una pieza de código específica una vez 
// que expira el temporizador

// setTimeout

// Executor
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (confirm("¿Esta promesa se cumplio?"))
            return resolve("Hola promesa")
        return reject(new Error("Hubo un error"))
    }, 2000)
})

/* 
status => {
    pending (pendiente): estado inicial, ni cumplido ni rechazado.
    fulfilled (cumplida): lo que significa que la operación se completó con éxito.
    rejected (rechazada): lo que significa que la operación falló.
}
*/

// then: fulfiled
// catch: rejected


// 1ra forma de enlazar manejadores
promise.then(function (result) {
    console.log(result)
}, function (err) {
    console.log("Algo salio mal")
    console.log(err)
})

// el catch es lo mismo que pasarle una 2da funcion al then, solo que mas legibe
// @da forma de enlazar manjeadores
promise.then(console.log).catch(console.log)
