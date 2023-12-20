// Write your code here
import { Component } from "react";
import "./Review.css";

class ReviewsCarousel extends Component {
  state = { index: 0 };

  getReviewContent = () => {
    const { index } = this.state;
    const { reviewsList } = this.props;
    const { imgUrl, username, companyName, description } = reviewsList[index];

    return (
      <div className="review-content-container">
        <h1>Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-pic" />
        <p className="user-name">{username}</p>
        <p>{companyName}</p>
        <p className="desc">{description}</p>
      </div>
    );
  };

  leftArrow = () => {
    const { index } = this.state;
    if (index > 0) {
      this.setState((prevState) => ({ index: prevState.index - 1 }));
    }
  };

  rightArrow = () => {
    const { index } = this.state;
    const { reviewsList } = this.props;

    const nextIndex = index + 1;
    const isWithinRange = nextIndex >= 0 && nextIndex < reviewsList.length;

    this.setState((prevState) => ({ index: isWithinRange ? nextIndex : 0 }));
  };

  render() {
    const { reviewsList } = this.props;
    const { index } = this.state;
    return (
      <div className="overall-container">
        <button
          type="button"
          className="arrow-btn"
          onClick={this.leftArrow}
          data-testid="leftArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            className="arrow-img"
            alt="left arrow"
          />
        </button>
        {this.getReviewContent()}
        <button
          type="button"
          className="arrow-btn"
          onClick={this.rightArrow}
          data-testid="rightArrow"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            className="arrow-img"
            alt="right arrow"
          />
        </button>
      </div>
    );
  }
}

export default ReviewsCarousel;
