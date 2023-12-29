import {$authHost, $host} from "./index";

export const createProcedure = async (name, description) => {
    try {
        const {data} = await $authHost.post('/api/procedure', {name, description})
        return data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const fetchProcedure = async () => {
    const {data} = await $host.get('/api/procedure')
    return data
}
