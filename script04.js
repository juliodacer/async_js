// Promesas con AJAX

function GET(url) {
    return new Promise(function (resolve, reject) {
        let ajaxCall = new XMLHttpRequest()
        ajaxCall.open('GET', url)
        ajaxCall.onload = function () {
            if (ajaxCall.status === 200) return resolve(ajaxCall.response)
            reject(Error(ajaxCall.status))
        }

        ajaxCall.onerror = function (err) {
            reject(err)
        }

        ajaxCall.send()
    })
}

function getUserInfo(username) {
    return GET('https://api.github.com/users/' + username)
}

function getRepos(repos_url) {
    return GET(repos_url)
}

/*
getUserInfo("codigofacilito").then(response => {
    let responseJSON = JSON.parse(response)
    console.log(responseJSON.repos_url)
    getRepos(responseJSON.repos_url).then(console.log)
})
*/

// simple method
const getReposPromise = getUserInfo("codigofacilito").then(response => {
    return getRepos(JSON.parse(response).repos_url)
}).catch(console.log)

getReposPromise.then(console.log).catch(console.log)