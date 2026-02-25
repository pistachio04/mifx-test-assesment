import http from 'k6/http';
import { REQRES_ENDPOINT } from '../data/endpoint.js';
import { apiKey } from '../data/credential.data.js';

//basic k6 body request
function getUserById(id) {
    const url = REQRES_ENDPOINT.user.userById(id)

    const params = {
        headers: {
            'x-api-key': apiKey
        }
    }

    return http.get(url, params)

}

//to export the function then use in /test/..feature.js
export const user_step = {
    getUserById
}