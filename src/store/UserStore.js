import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._isAdmin = false
        this._role = ''
        this._id = null
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setIsAdmin(bool) {
        this._isAdmin = bool
    }
    setRole(role) {
        this._role = role
    }
    setId(id) {
        this._id = id
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get isAdmin() {
        return this._isAdmin
    }
    get role() {
        return this._role
    }
    get id() {
        return this._id
    }
}