import {makeAutoObservable} from "mobx";

export default class HipstaStore {
    constructor() {
        this._currentUser = null
        this._users = null
        this._userById = null
        this._error = []
        makeAutoObservable(this)
    }

    setCurrentUser(user) {
        this._currentUser = user
    }

    setUsers(users) {
        this._users = users
    }

    setUserById(userId) {
        this._userById = userId
    }


    setError(error) {
        this._error = error
    }

    //computed function
    get currentUser() {
        return this._currentUser
    }

    get users() {
        return this._users
    }

    get userById() {
        return this._userById
    }


    get error() {
        return this._error
    }
}