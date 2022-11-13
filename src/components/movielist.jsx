import React, {useContext} from 'react';
import { MovieContext } from '../contexts/moviecontext';
import MovieDetails from './moviedetails';

const MovieList = () => {
    const {movies} = useContext(MovieContext);
    return movies.length ? (
        <div className= 'movie-list'>
            <ul className='list-group'>
                {
                    movies.map((movie, i) => {
                        return(
                            <MovieDetails movie={movie}  key={i} id={i} />
                        )
                    })
                }
            </ul>
        </div>
    ) : (
        <div className='empty'>There are no movies to watch.</div>
    )
};

export default MovieList;