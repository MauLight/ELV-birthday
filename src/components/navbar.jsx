import React, { useContext } from 'react';
import { MovieContext } from '../contexts/moviecontext';
import Search from './search';

const Navbar = () => {
    const { movies } = useContext(MovieContext);
    return (
        <div className='navbar d-block mt-3'>
            <h1 className='title'>Elv's Movie List</h1>
            <p>you currently have {movies.length} movies to watch.</p>
            <Search />
        </div>
    )
};

export default Navbar;
