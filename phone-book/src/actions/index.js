import axios from 'axios';

export const FETCH_LIST = 'fetch_list';
export const CREATE_LIST = 'create_list';
export const FETCH_DETAILS = 'fetch_details';
export const DELETE_POST = 'deletePost';

const ROOT_URL = 'http://localhost:4000/contact'
export function fetchList(str = '') {
    const request = axios.get(`${ROOT_URL}?_sort=name&_order=asc&q=${str}`);
    return {
        type: FETCH_LIST,
        payload: request
    }
}

export function createList(values, callback) {
    const request = axios.post(`${ROOT_URL}`, values).then(() => {
        callback()
    });
    return {
        type: CREATE_LIST,
        payload: request
    }
}

export function fetchDetails(id) {
    const request = axios.get(`${ROOT_URL}/${id}`);

    return {
        type: FETCH_DETAILS,
        payload: request
    }
}

export function deletePost(id,callback) {
    const request = axios.delete(`${ROOT_URL}/${id}`).then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}