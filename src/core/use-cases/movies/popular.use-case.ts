import { HttpAdapter } from '../../../config/adacters/http/http.adapter';
import { PopularDBMoviesResponse } from '../../../insfrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../../insfrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

interface Options {
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, Options?: Options) : Promise <Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<PopularDBMoviesResponse>('/popular', {
            params: {
                page: Options?.page,
            }
        });
        return nowPlaying.results.map( MovieMapper.fromMovieResultToEntity);
    } catch (error) {
       console.log(error);
       throw new Error(`Error fething get: ${error}`);
    }
};
