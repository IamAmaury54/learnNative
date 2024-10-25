import { useEffect, useState } from 'react';


import { movieDBFetcher } from '../../config/adacters/movieDB.adapter';
import * as UseCases from '../../core/use-cases';
import { Movie } from '../../core/entities/movie.entity';
export const useMovies = () => {

     const [isLoading, setIsLoading] = useState<boolean>(true);
     const [nowPlaging, setNowPlaging] = useState<Movie[]>([]);


     useEffect(() => {
        initLoad();
     }, []);


     const initLoad = async () => {
        const nowPlayingMoviews = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        setNowPlaging(nowPlayingMoviews);
        setIsLoading(false);
        console.log(nowPlayingMoviews);
     };

    return {
      isLoading,
      nowPlaging,
    };

};
