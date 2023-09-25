const DATOS = [
    {
        title: 'Aprendiendo Javascript',
        year: '2021',
        isbn: '979-8700179263',
        author: 'Carlos Azaustre'
    },
    {
        title: 'React.js Práctico',
        year: '2022',
        isbn: 'TBD',
        author: 'Carlos Azaustre'
    },
    {
        title: 'Clean Javascript',
        year: '2020',
        isbn: '979-8567583319',
        author: 'Miguel A. Gomez'
    }
]

function getDate() {
    setTimeout(() => {
        return DATOS
    }, 2000)
}

console.log(getDate())

// Promise
function getDataPromise() {
    return new Promise((resolve, reject) => {
        if (DATOS.length === 0) reject(new Error("Data is empty"))
        setTimeout(() => {
            resolve(DATOS)
        }, 2000)
    })
}

getDataPromise().then(console.log).catch(console.log)

// async/await

async function fetchingData() {
    try {
        const books = await getDataPromise()
        console.log(books)
    } catch (error) {
        console.log('ERR', error)
    }
}

fetchingData()