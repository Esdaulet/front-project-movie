import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    console.log("Веном ", searchText);
  };

  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <h1 className="logofine">
                <span className="dot">.</span>Movie
                <span className="Appcolor">App</span>
              </h1>
            </div>
            <ul
              className={Mobile ? "navMenu-list" : "flexSB"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <Link to="/Pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
              <li>
                <Link to="/displaydata">Requests</Link>
              </li>
              <li>
                <Link to="/imdb">Movie Searcher</Link>
              </li>
              <li>
                <Link to="/review">ReviewList</Link>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
          <div className="account flexSB">
            <Link to="./login">
              <i className="fas fa-sign-out-alt"></i>
            </Link>
          </div>
          {showSearchInput && (
            <div className="searchContainer">
              <input
                type="text"
                placeholder="Введите текст для поиска"
                className="searchInput1"
                value={searchText}
                onChange={handleSearchInputChange}
              />
              <button className="searchButton1" onClick={handleSearch}>
                Search
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
