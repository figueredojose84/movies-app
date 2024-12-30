import { MoviedbMoviesResponse } from '@/infraestructure/interface/moviedb-response';
import { getMovies } from '../../api/movies.api';
import { MovieMapper } from '@/infraestructure/mappers/movie.mappers';


export const popularMoviesActions = async () => {
  try {

    const { data } = await getMovies.get<MoviedbMoviesResponse>('/popular');

  // console.log(JSON.stringify(data.results));

  const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);

 // console.log(movies);

  
   return movies
  } catch (error) {
    console.error(error);
    throw 'Error fetching now playing movies';
  }
}