import { HttpAdapter } from '../../../config/adacters/http/http.adapter';
import { UpcomingResponse } from '../../../insfrastructure/interfaces/movie-db.response';
import { MovieMapper } from '../../../insfrastructure/mappers/movie.mapper';



export const upcomingMoviesUseCase = async (fetcher: HttpAdapter) => {

    try {
        const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');
        return upcoming.results.map(MovieMapper.fromMovieResultToEntity);
    } catch (error) {
        console.log(error);
        throw new Error(`Error fething get: ${error}`);
    }
};
