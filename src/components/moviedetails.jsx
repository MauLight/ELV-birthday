import React, { useContext } from 'react';
import { MovieContext } from '../contexts/moviecontext';

const MovieDetails = ({ movie, id }) => {
    const { dispatch } = useContext(MovieContext);
    console.log(movie)

    return (
        <li key={id} className='booklist list-group-item' onClick={() => dispatch({type: 'REMOVE_MOVIE', id: movie.id})}>
            <div className='movie_item'>{movie.title} by {movie.director} made in {movie.year}</div>
        </li>
    );
};

export default MovieDetails;