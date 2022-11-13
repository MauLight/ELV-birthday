import React, { useContext } from 'react';
import { MovieContext } from '../contexts/moviecontext';
import MovieDetails from './moviedetails';

const MovieList = () => {
    const { movies } = useContext(MovieContext);
    return movies.length ? (
        <div className='movie-list'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header d-inline-block" id="flush-headingOne">
                        <button className="btn rounded-2 accordion-button collapsed w-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Movies
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <ul className='list-group'>
                            {
                                movies.map((movie, i) => {
                                    return (
                                        <MovieDetails movie={movie} key={i} id={i} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className='empty'>There are no movies to watch.</div>
    )
};

export default MovieList;