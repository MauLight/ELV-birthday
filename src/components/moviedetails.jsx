import React, { useContext } from 'react';
import { MovieContext } from '../contexts/moviecontext';

const MovieDetails = ({ movie, id }) => {
    const { dispatch } = useContext(MovieContext);
    console.log(movie);
    const title = movie.title;
    const result = title.toLowerCase();

    return (
        <li key={id} className='booklist list-group-item'>
            <div className='movie_item'>
                <a href={`https://yts.mx/movie/${result}-${movie.year}`}  target='_blank' rel="noreferrer">{movie.title} by {movie.director} made in {movie.year}</a>
                <p className='remove mb-0' onClick={() => dispatch({ type: 'REMOVE_MOVIE', id: movie.id })}>remove movie</p>
            </div>
        </li>
    );
};

export default MovieDetails;