import {makeAutoObservable} from "mobx";

export default class HipstaStore {

    constructor() {
        this._users = []
        this._currentUser = []
        this._userById = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    //computed function
    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }
}