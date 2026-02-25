import { config } from "../env.js";

//to make a base url 
export const REQRES_ENDPOINT = {
    user: {
        userById: (id) => {
            return `${config().host.reqres}users/${id}`
        }, //GET
    }
}