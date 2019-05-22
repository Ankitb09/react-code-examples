import axios from 'axios';

const ROOTURL = 'https://ancient-springs-73658.herokuapp.com';

export default axios.create({
    baseURL: ROOTURL,
});
