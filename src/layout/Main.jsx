import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";
import React from "react";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {

        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=2be98f07&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });

        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2be98f07&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    render() {
        const { movies, loading } = this.state;

        return (
            <main className="content container">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        )
    }
}

export default Main;