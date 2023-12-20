import ReviewsCarousel from "./ReviewList";

const reviewsList = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    username: "Maksat",
    companyName: "MovieApp",
    description:
      "The movie collection on MovieApp is fantastic! I've discovered some hidden gems and enjoyed watching classics. The user interface is smooth, and I love the trailer feature.",
  },
  {
    imgUrl:
      "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
    username: "Erlan",
    companyName: "MovieApp",
    description:
      "As a passionate movie enthusiast, MovieApp is my go-to platform. The variety of genres, the detailed movie information, and the ability to watch trailers make it a top choice for any cinephile.",
  },
  {
    imgUrl:
      "https://media.istockphoto.com/id/1255734834/photo/young-handsome-business-man-wearing-gray-shirt-and-eyeglasses-holding-arms-crossed-smiling.jpg?s=612x612&w=0&k=20&c=gQy2e7rc3EeCUk-tlwsz7a1NgeURf3tgsMEQ-E9Y7o8=",
    username: "Darkhan",
    companyName: "MovieApp",
    description:
      "MovieApp has revolutionized my movie-watching experience. The curated lists, recommendations, and the convenience of exploring trailers in one place make it stand out in the streaming world.",
  },
  {
    imgUrl:
      "https://thumbs.dreamstime.com/b/smiling-middle-aged-woman-folded-arms-white-background-isolated-smiling-middle-aged-woman-folded-arms-white-125796475.jpg",
    username: "Anna",
    companyName: "MovieApp",
    description:
      "Being a screen explorer, MovieApp is my trusted companion. It offers a vast library, and the ability to watch trailers helps me decide what to add to my watchlist. MovieApp is a cinephile's paradise!",
  },
];

const App = () => <ReviewsCarousel reviewsList={reviewsList} />;

export default App;
