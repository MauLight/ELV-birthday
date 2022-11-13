import React, { useEffect, useState } from 'react';

const Search = () => {

    const getMovieAsync = async () => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=9d588f084da0a6ef32713d036b1eda5f&language=en-US&query=${movie}&page=1&include_adult=false`
        let options_get = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }
        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            console.log(data);
            setQueries(data.results)
            console.log(data.results)
        }
        catch (error) {
            console.log(error);
        }
    };

    const [queries, setQueries] = useState('');
    const [movie, setMovie] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        getMovieAsync()
    }, [movie]);

    const handleSearch = (e) => {
        e.preventDefault();
        setMovie(search);
    }

    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Search</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <form onSubmit={handleSearch}>
                    <div className="mb-3 d-inline">
                        <input type="text" className="form-control" id="search-movie" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="button" class="btn p-1 px-3 my-3 w-100" onClick={handleSearch}>Seach</button>
                    </div>
                </form>
                <ul className='query'>
                    {!!queries && queries.map((query, i) => {
                        return (
                            <li key={i} className="query-item list-group-item">{query.original_title} - {query.release_date}</li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Search;

