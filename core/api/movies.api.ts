import axios from 'axios';


export const getMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    params: {
        language: 'es-MX',
        api_key: "286553d5f652e81b604dce7cbb926540"
    }

})
 