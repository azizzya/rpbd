import {$authHost, $host} from "./index";

export const createIllness = async (name, description) => {
    try {
        const {data} = await $authHost.post('/api/illness', {name, description})
        return data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const fetchIllness = async () => {
    const {data} = await $host.get('/api/illness')
    return data
}
