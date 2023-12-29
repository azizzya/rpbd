import {$authHost, $host} from "./index";

export const createMedicine = async (name, description, recommendations) => {
    try {
        const {data} = await $authHost.post('/api/medicine', {name, description, recommendations})
        return data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const fetchMedicine = async () => {
    const {data} = await $host.get('/api/medicine')
    return data
}
