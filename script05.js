// Multiples promesas

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

function getGithubUserInfo() {
    const getUserPromise = getUserInfo('codigofacilito')
    const getReposPromise = getUserPromise.then(response => {
        return getRepos(JSON.parse(response).repos_url)
    }).catch(console.log)
    return Promise.all([getUserPromise, getReposPromise])
}

getGithubUserInfo().then(([userInfo, reposInfo]) => {
    console.log("Info del usuario: ")
    console.log(userInfo)
    console.log("Info de los repos: ")
    console.log(reposInfo)
}).catch(err => console.log(err))