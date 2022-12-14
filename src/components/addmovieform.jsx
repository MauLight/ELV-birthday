import React, { useState, useContext } from 'react';
import { MovieContext } from '../contexts/moviecontext';

const AddMovieForm = () => {
    const { dispatch } = useContext(MovieContext);

    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_MOVIE', movie: {
                title, director, year, id
            }
        })
        setTitle('');
        setDirector('');
        setYear('');
        setId('');
    }

    return (
        <div className='info card w-25 p-3 mx-auto mt-5'>
            <form onSubmit={handleSubmit}>
                <input className='form-control w-50 form-control-sm mb-2 border-0 m-auto' type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input className='form-control w-50 form-control-sm mb-2 border-0 m-auto' type='text' placeholder='director' value={director} onChange={(e) => setDirector(e.target.value)} />
                <input className='form-control w-50 form-control-sm mb-2 border-0 m-auto' type='text' placeholder='year' value={year} onChange={(e) => setYear(e.target.value)} required />
                <input className='form-control w-50 form-control-sm mb-2 border-0 m-auto' type='text' placeholder='id' value={id} onChange={(e) => setId(e.target.value)} required />
                <input className='btn form-control w-50 form-control-sm border-0 m-auto' type='submit' value='Add Movie' />

            </form>
        </div>
    );
};

export default AddMovieForm;

