import { HttpAdapter } from '../../../config/adacters/http/http.adapter';
import { TopRatedResponse } from '../../../insfrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../../insfrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const topRateUseCase = async (fetcher: HttpAdapter) : Promise <Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<TopRatedResponse>('/top_rated');
        return nowPlaying.results.map( MovieMapper.fromMovieResultToEntity);
    } catch (error) {
        console.log(error);
        throw new Error(`Error fething get: ${error}`);
    }

};
