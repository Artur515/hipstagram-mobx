import {makeAutoObservable} from "mobx";
import axios from "axios";
import {API_URL} from "../api/url";


class Authentication {
    currentUser = {
        currentUser: null,
    }

    constructor() {
        makeAutoObservable(this)
    }

    registrationCurrentUser = (login, email, password) => {
        return axios.post(API_URL + '/auth/registration', {login, email, password})
    }


    loginCurrentUser = (login, password) => {
        return axios.post(API_URL + '/auth/login', {login, password})
            .then((response) => {
                if (response.data.access_token) {
                    localStorage.setItem('currentUserToken', JSON.stringify(response.data.access_token))
                }
                console.log(response.data)
                return this.currentUser.currentUser = response.data
            })
    }

    logOutCurrentUser = () => {
        localStorage.removeItem('currentUserToken')
    }

}

export default new Authentication()