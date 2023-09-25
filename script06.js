const DATOS = [
    {
        id: 1,
        title: 'Iron Man',
        year: 2008
    },
    {
        id: 2,
        title: 'Spiderman: Homecoming',
        year: 2017
    },
    {
        id: 3,
        title: 'Avengers: Endgame',
        year: 2019
    }
]

const getDatos = () => DATOS

const getDatosTimeout = () => {
    setTimeout(() => {
        return DATOS
    }, 2000)
}

console.log(getDatosTimeout()) // undefined

const getDatosPromise = () => {
    return new Promise((resolve, reject) => {
        if (DATOS.length === 0) {
            reject(new Error("No existen datos"))
        }

        setTimeout(() => {
            resolve(DATOS)
        }, 2000)
    })
}

getDatosPromise()
    .then(console.log)
    .catch(console.log)


// async / await
async function fetchingData() {
    try {
        const datosResponse = await getDatosPromise()
        console.log('DatosResponse', datosResponse)
    } catch (error) {
        console.log('ERR', error)
    }
}

fetchingData()