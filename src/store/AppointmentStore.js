import {makeAutoObservable} from "mobx";

export default class AppointmentStore {
    constructor() {
        this._medicines = []
        this._procedures = []
        this._illness = []
        makeAutoObservable(this)
    }

    setMedicine(medicines) {
        this._medicines = medicines
    }
    setProcedure(procedures) {
        this._procedures = procedures
    }
    setIllness(illness) {
        this._illness = illness
    }

    get medicines() {
        return this._medicines
    }
    get procedures() {
        return this._procedures
    }
    get illness() {
        return this._illness
    }
}