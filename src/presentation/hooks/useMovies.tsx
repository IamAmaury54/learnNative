import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';


import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adacters/movieDB.adapter';
export const useMovies = () => {

     const [isLoading, setIsLoading] = useState<boolean>(true);
     const [nowPlaging, setNowPlaging] = useState<Movie[]>([]);


     useEffect(() => {
        initLoad();
     }, []);


     const initLoad = async () => {
        const nowPlayingMoviews = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
     };

    return {};

};
