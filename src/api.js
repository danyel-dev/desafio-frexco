import axios from 'axios';


const api = axios.create({
    baseURL: 'https://www.fruityvice.com/doc/index.html'
})


export default api;
