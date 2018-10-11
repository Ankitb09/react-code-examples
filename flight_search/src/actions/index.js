
const ROOT_URL = 'http://localhost:3004/flights';

const getList = (list) => {
  return {
    type: 'GET_FLIGHTS',
    data: { list }
  }
}


export const loadingFlights = (loading) => ({
  type: 'LOADING_FLIGHTS',
  payload: { loading }
})


export function fetchList(orig, dest) {
  return function (dispatch, getState) {
    dispatch(loadingFlights(true));

    window.fetch(`${ROOT_URL}?origin=${orig}&destination=${dest}`)
      .then((resp) => resp.json())
      .then((list) => {

        dispatch(getList(list))
        dispatch(loadingFlights(false));
      });
  }
}