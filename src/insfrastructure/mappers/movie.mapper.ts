import { Movie } from '../../core/entities/movie.entity';
import type { Result } from '../interfaces/movie-db.response';


export class MovieMapper {

    static fromMovieResultToEntity( result: Result ): Movie {

        return {
            id: result.id,
            title: result.title,
            desccription: result.overview,
            release_date: new Date(result.release_date),
            rating: result.vote_average,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
        };

    }
}
