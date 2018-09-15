
const ROOT_URL = 'http://localhost:3004/flights'
export const getFlights = (orig, dest) => {

    const request = fetch(`${ROOT_URL}?origin=${orig}&destination=${dest}`).then((response) => {
        return response.json()
    }).then((resp) => { return JSON.parse(resp) });

    return {
        type: 'GET_FLIGHTS',
        data: request
    }
}

function fetchPosts(subreddit) {
    return dispatch => {
      dispatch(requestPosts(subreddit))
      return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subreddit, json)))
    }
  }