import axios from 'axios';

export const FETCH_LIST = 'fetch_list';
export const CREATE_LIST = 'create_list';

const ROOT_URL = 'http://localhost:4000/contact'
export function fetchList(str = '') {
    const request = axios.get(`${ROOT_URL}?q=${str}`);
    return {
        type: FETCH_LIST,
        payload: request
    }
}

export function createList(values) {
    const request = axios.post(`${ROOT_URL}`, values);
    return {
        type: CREATE_LIST,
        payload: request
    }
}