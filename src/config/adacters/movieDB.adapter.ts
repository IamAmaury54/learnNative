import { AxiosAdapter } from './http/axios.adapter';



export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '56c0d6a0996bb804f61bea14e4f5a934',
    },
});
