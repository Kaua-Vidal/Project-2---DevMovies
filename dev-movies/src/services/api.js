import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '5496668b7afdb02d3c85c5d69692a884',
        language: 'pt-BR',
        page: 1
    }
})

export default api