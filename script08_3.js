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

const request = (url) => {
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

const call = async (url) => {
    const response = await request(url)
    const response2 = await request(url)

    const n1 = toNumber(response)
    const n2 = toNumber(response2)
    printFn(n1 * n2)
}

call('./numero.txt')