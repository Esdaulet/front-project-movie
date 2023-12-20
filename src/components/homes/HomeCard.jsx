import React, { Component } from "react";
import { Link } from "react-router-dom";
import playButtonImage from "../../img/play-button.png";
import playImage from "../../img/play.png";
import "./home.css";

class HomeCard extends Component {
  render() {
    const { id, cover, name, rating, time, desc, starring, genres, tags } =
      this.props.item;

    return (
      <div className="box">
        <div className="coverImage">
          <img src={cover} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1 className="nameanime">{name}</h1>
            <div className="rating flex">
              <div className="rate">
                <i className="fas fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label>{rating}(Imdb)</label>

              <label>{time}</label>
            </div>
            <p>{desc}</p>
            <div className="cast">
              <h4>
                <span>В главных ролях </span>
                {starring}
              </h4>
              <h4>
                <span>Жанры </span>
                {genres}
              </h4>
              <h4>
                <span>Теги </span>
                {tags}
              </h4>
            </div>
            <button className="primary-btn">
              {" "}
              <Link to={`/singlepage/${id}`}>
                <p className="watchnow">СМОТРЕТЬ СЕЙЧАС</p>
              </Link>
            </button>
          </div>
          <div className="palyButton row">
            <Link to={`/singlepage/${id}`}>
              <button>
                <div className="img">
                  <img src={playButtonImage} alt="" />
                  <img src={playImage} alt="" className="change" />
                </div>
                СМОТРЕТЬ ТРЕЙЛЕР
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCard;
