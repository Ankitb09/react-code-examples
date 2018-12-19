
const ROOT_URL = 'http://localhost:3004/flights'
const getFlights = (orig, dest) => {
    fetch(`${ROOT_URL}?origin=${orig}&destination=${dest}`).then((response) => {
        return response.json()}).then(json => dispatch(receivePosts(json)));

}

function receivePosts(json) {
    return {
        type: 'GET_FLIGHTS',
        data: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}
