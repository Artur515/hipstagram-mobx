import axios from "axios";

export const API_URL = 'https://hipstagram-api.herokuapp.com'


const host = axios.create({
    baseURL: API_URL
})

const authInterceptors = config => {
    config.headers.authorization = `${localStorage.getItem('currentUserToken')}`
    return config
}

host.interceptors.request.use(authInterceptors)

export {
   host
}