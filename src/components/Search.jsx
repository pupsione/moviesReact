import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        value: '',
        type: ''
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(()=>({ type: event.target.dataset.type }), ()=>{
            this.props.searchMovies(this.state.search, this.state.type);
        })

    }

    render() {
        return (
            <div className="row search">
                <div className="input-field col s6">
                    <input
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="waves-effect waves-light btn"
                        onClick={() => this.props.searchMovies(this.state.search)}>Search
                    </button>
                </div>
                <div className="input-wrap">
                    <label>
                        <input className="with-gap" name="type" type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"} />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"} />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"} />
                        <span>Series only</span>
                    </label>
                </div>
            </div>

        )
    }
}

export { Search };
