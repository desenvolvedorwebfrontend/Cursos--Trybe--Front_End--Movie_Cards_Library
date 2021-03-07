import React from 'react';
import Rating from './Rating';
// import img1 from '../../public/images/Appleseed_Alpha.jpg';

class MovieCard extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <img src="images/movie_1" alt="" />
        <h4>Movie Title 1</h4>
        <h5>Movie Subtitle 1</h5>
        <p>Movie Storyline 1</p>
        <Rating className="rating" rating={ 4.5 } />
      </div>
    );
  }
}

export default MovieCard;
