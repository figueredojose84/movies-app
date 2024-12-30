import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesActions } from '@/core/actions/movies/popular.accion';
import { useQuery } from '@tanstack/react-query';



export const useMovies = () => {


    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24horas
      });

    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesActions,
        staleTime: 1000 * 60 * 60 * 24, // 24horas
    });

    return {
        nowPlayingQuery,
        popularQuery
    }
}
   

