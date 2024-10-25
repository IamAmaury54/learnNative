import { HttpAdapter } from '../../../config/adacters/http/http.adapter';
import { NowPlayingResponse } from '../../../insfrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../../insfrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

        try {
            const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
            return nowPlaying.results.map(MovieMapper.fromMovieResultToEntity);
        } catch (error) {
            console.log('error', error);
            throw new Error(`Error fething get: ${error}`);
        }

 };
