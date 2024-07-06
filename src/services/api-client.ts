import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c2a6d4ba22294cf5ad6ebfa55a4f5085'
    }
})