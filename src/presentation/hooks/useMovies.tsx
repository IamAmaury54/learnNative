import { useEffect, useState } from 'react';


import { movieDBFetcher } from '../../config/adacters/movieDB.adapter';
import * as UseCases from '../../core/use-cases';
import { Movie } from '../../core/entities/movie.entity';
export const useMovies = () => {

     const [isLoading, setIsLoading] = useState<boolean>(true);
     const [nowPlaging, setNowPlaging] = useState<Movie[]>([]);
     const [popular, setPopular] = useState<Movie[]>([]);
     const [topRate, setTopRate] = useState<Movie[]>([]);


     useEffect(() => {
        initLoad();
     }, []);


     const initLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatePromise = UseCases.topRateUseCase(movieDBFetcher);


        const [nowPlayingMovies, popularMovies, topRateMovies] = await
        Promise.all([nowPlayingPromise, popularPromise, topRatePromise]);

        setNowPlaging(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRate(topRateMovies);


        setIsLoading(false);

        console.log(topRateMovies);

     };

    return {
      isLoading,
      nowPlaging,
      popular,
      topRate,
    };

};
