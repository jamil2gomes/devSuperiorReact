import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const api = axios.create({

   baseURL: BASE_URL,

     headers:{
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Type':'application/json; utf-8'
     },
     
});

export default api;