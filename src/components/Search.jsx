import React, { useState } from "react";

const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props
    const [search, getSearch] = useState('');
    const [type, getType] = useState('all');


    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleFilter = (event) => {
        getType(event.target.dataset.type)
        searchMovies(search, event.target.dataset.type);
    };


    return (
        <div className="row search">
            <div className="input-field">
                <input
                    type="search"
                    className="validate"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => getSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className="waves-effect waves-light btn"
                    onClick={() => searchMovies(search, type)}>Search
                </button>
            </div>
            <div className="input-wrap">
                <label>
                    <input className="with-gap" name="type" type="radio"
                        data-type="all"
                        onChange={handleFilter}
                        checked={type === 'all'} />
                    <span>All</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio"
                        data-type="movie"
                        onChange={handleFilter}
                        checked={type === 'movie'} />
                    <span>Movies only</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio"
                        data-type="series"
                        onChange={handleFilter}
                        checked={type === 'series'} />
                    <span>Series only</span>
                </label>
            </div>
        </div>

    )
}

export { Search };
