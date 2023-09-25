// Desarrollo util

const toNumber = n => Number(n)
const multiply = n => n * 2
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

const request = (url, then, catchFn) => {
    const req = new XMLHttpRequest()
    req.open('GET', url)

    req.onload = () => {
        if (req.status === 200) {
            then(req.responseText)
        } else {
            catchFn(new Error("Error al cargar"))
        }
    }

    req.onerror = () => {
        catchFn(new Error("Error de red"))
    }

    req.send()
}

request('./numero.txt', thenFn, catchAndPrint)