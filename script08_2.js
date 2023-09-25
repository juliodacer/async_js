// Desarrollo util

const toNumber = n => Number(n)
const multiply = n => (n * 2)
const printFn = n => console.log(n)

const thenFn = (n) => {
    let number = toNumber(n)
    number = multiply(number)
    printFn(number)
}

const catchAndPrint = (err) => {
    console.log(err)
}

const thenAlt = (n) => console.log(n)

export const request = (url) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest()
        req.open('GET', url)

        req.onload = () => {
            if (req.status === 200) {
                resolve(req.responseText) // es como si fuera un "return"
            } else {
                reject(new Error("Error al cargar"))
            }
        }

        req.onerror = () => {
            reject(new Error("Error de red"))
        }

        req.send()
    })
}

request('./numero.txt')
    .then(toNumber)
    .then(multiply)
    .then(multiply)
    .then(multiply)
    .then(multiply)
    .then(printFn)
    .catch(catchAndPrint)
    .then(printFn) // despues del catch se sigue ejecutando el then
    .catch(catchAndPrint)
    .catch(catchAndPrint)
    .finally(() => console.log("Se acabo la peticion")) // Se ejecuta si o si siempre
