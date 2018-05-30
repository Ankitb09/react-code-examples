import axios from 'axios';

export const FETCH_LIST = 'fetch_list';

const ROOT_URL = 'http://localhost:4000/contact'
export function fetchList(str = '') {
    const request = axios.get(`${ROOT_URL}?q=${str}`)
    return {
        type: FETCH_LIST,
        payload: request
    }
}