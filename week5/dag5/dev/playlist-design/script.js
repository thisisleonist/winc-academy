const API_BASE_URL = ''
const API_SUFFIX = ''

const getData = async (requestMethod, apiEndpoint, requestBody) => {
    try {
        let apiResult = await fetch(API_BASE_URL + apiEndpoint + API_SUFFIX, {
            method: requestMethod,
            body: JSON.stringify(requestBody)
        })
        const apiData = await apiResult.json()
        return apiData
    } catch (error) {
        console.log(error)
    }
}

/* https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript */

const songGenre = document.getElementById('songGenre')
const genreData = getData('GET', './genres.json').then(data => {
    let optionValues = `<option value="Choose">Genre</option><option disabled>──────────</option>`
    data.genres.forEach(genre => {
        optionValues += `<option value="${genre}">${genre}</option>`
    })
    songGenre.innerHTML += optionValues
})
