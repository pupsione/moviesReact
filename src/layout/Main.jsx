import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import React, { useState, useEffect } from "react";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setloading] = useState(true);

    const searchMovies = (str, type = 'all') => {
        setloading(true)

        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=2be98f07&s=${str === '' ? 'matrix' : str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setloading(false)
            })
            .catch(() => {
                setloading(false)
            })
    }

    useEffect(() => {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=2be98f07&s=matrix')
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setloading(false)
            })
            .catch(() => {
                setloading(false)
            })
    }, [])

    return (
        <main className="content container">
            <Search searchMovies={searchMovies} />
            {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
    )

}

export default Main;