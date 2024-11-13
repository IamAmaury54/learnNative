import { useEffect, useState } from 'react';

export default function useMovie(movieId: number) {

    const [isLaoding, setIsLoading] = useState(true);

    useEffect(() => {
        loadMovie();
    }, [movieId])

    const loadMovie = () => {}

  return {
    isLaoding
  }
}