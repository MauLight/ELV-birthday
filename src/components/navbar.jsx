import React, { useContext } from 'react';
import { MovieContext } from '../contexts/moviecontext';

const Navbar = () => {
    const { movies } = useContext(MovieContext);
    return (
        <div className='navbar d-block mt-5'>
            <h1>Elv's Movie List</h1>
            <p>you currently have {movies.length} movies to watch.</p>
        </div>
    )
};

export default Navbar;
