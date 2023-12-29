import {$authHost, $host} from "./index";
import {jwtDecode} from "jwt-decode";

export const getRole = async () => {
    const role = await $authHost.get('/api/user/role')
    return role.data.role
}

export const getId = async () => {
    const role = await $authHost.get('/api/user/id')
    return role.data.id
}

export const registration = async (email, password, f_name, s_name) => {
    const {data} = await $host.post('/api/patient/registration', {email, password, role: 'PATIENT', f_name, s_name})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('/api/patient/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('/api/patient/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const registrationDoctor = async (email, password, f_name, s_name) => {
    const {data} = await $host.post('/api/doctor/registration', {email, password, role: 'DOCTOR', f_name, s_name})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const loginDoctor = async (email, password) => {
    const {data} = await $host.post('/api/doctor/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}
