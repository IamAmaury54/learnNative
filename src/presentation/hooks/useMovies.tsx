import { useEffect, useState } from 'react';


import { movieDBFetcher } from '../../config/adacters/movieDB.adapter';
import * as UseCases from '../../core/use-cases';
import { Movie } from '../../core/entities/movie.entity';


let popularPageNumber = 1;

export const useMovies = () => {

     const [isLoading, setIsLoading] = useState<boolean>(true);
     const [nowPlaging, setNowPlaging] = useState<Movie[]>([]);
     const [popular, setPopular] = useState<Movie[]>([]);
     const [topRate, setTopRate] = useState<Movie[]>([]);
     const [upComing, setUpComing] = useState<Movie[]>([]);


     useEffect(() => {
        initLoad();
     }, []);


     const initLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
        const topRatePromise = UseCases.topRateUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.upcomingMoviesUseCase(movieDBFetcher);


        const [nowPlayingMovies, popularMovies, topRateMovies, upcomingMovies] = await
        Promise.all([nowPlayingPromise, popularPromise, topRatePromise, upcomingPromise]);

        setNowPlaging(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRate(topRateMovies);
        setUpComing(upcomingMovies);

        setIsLoading(false);
     };

    return {
      isLoading,
      nowPlaging,
      popular,
      topRate,
      upComing,


      // Method
      popularNextPage: async () => {  
         popularPageNumber++;
         const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
            page: popularPageNumber,
         });
         setPopular(prev => [...prev, ...popularMovies]);
      }
    };

};
