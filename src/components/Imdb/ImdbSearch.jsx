import React, { Component } from "react";
import Card from "./Card";
import "./Searcher.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      url_set:
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=63a4c62e6e5687b36ee5e2ce8e1deb1a",
      search: "",
      filters: ["Popular", "Theatre", "Kids", "Drama", "Comedy"],
      selectedFilter: "Popular",
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { url_set } = this.state;
    try {
      const response = await fetch(url_set);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.setState({ movieData: data.results, error: null });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error: "Error fetching data. Please try again." });
    }
  };

  getData = (movieType) => {
    let newUrl;
    switch (movieType) {
      case "Popular":
        newUrl =
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=63a4c62e6e5687b36ee5e2ce8e1deb1a";
        break;
      case "Theatre":
        newUrl =
          "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=63a4c62e6e5687b36ee5e2ce8e1deb1a";
        break;
      case "Kids":
        newUrl =
          "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=63a4c62e6e5687b36ee5e2ce8e1deb1a";
        break;
      case "Drama":
        newUrl =
          "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=63a4c62e6e5687b36ee5e2ce8e1deb1a";
        break;
      case "Comedy":
        newUrl =
          "https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=63a4c62e6e5687b36ee5e2ce8e1deb1a";
        break;
      default:
        break;
    }
    this.setState({ url_set: newUrl, selectedFilter: movieType }, () => {
      this.fetchData();
    });
  };

  searchMovie = (evt) => {
    if (evt.key === "Enter") {
      const { search } = this.state;
      const newUrl = `https://api.themoviedb.org/3/search/movie?api_key=63a4c62e6e5687b36ee5e2ce8e1deb1a&query=${search}`;
      this.setState({ url_set: newUrl, selectedFilter: "Drama" }, () => {
        this.fetchData();
      });
      this.setState({ search: "" });
    }
  };

  render() {
    const { filters, selectedFilter, search, movieData, error } = this.state;

    return (
      <>
        <div className="header1">
          <div className="filter-dropdown">
            <label htmlFor="filter">Choose a genres: </label>
            <select
              id="filter"
              value={selectedFilter}
              onChange={(e) => this.getData(e.target.value)}
            >
              {filters.map((filter, index) => (
                <option key={index} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          </div>
          <form>
            <div className="search-btn">
              <input
                type="text"
                placeholder="Enter Movie Name"
                className="inputText"
                onChange={(e) => this.setState({ search: e.target.value })}
                value={search}
                onKeyPress={this.searchMovie}
              ></input>
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="containers">
          {error ? (
            <p className="error">{error}</p>
          ) : movieData.length === 0 ? (
            <p className="notfound">Not Found</p>
          ) : (
            movieData.map((res, pos) => {
              return <Card info={res} key={pos} />;
            })
          )}
        </div>
      </>
    );
  }
}

export default Main;
