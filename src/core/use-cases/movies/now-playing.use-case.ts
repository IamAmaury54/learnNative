import { HttpAdapter } from '../../../config/adacters/http/http.adapter';
import { NowPlayingResponse } from '../../../insfrastructure/interfaces/movie-db.response';
import { Movie } from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {

        try {
            const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
            console.log(nowPlaying);
            return [];
        } catch (error) {
            console.log('error', error);
            throw new Error(`Error fething get: ${error}`);
        }

 };
