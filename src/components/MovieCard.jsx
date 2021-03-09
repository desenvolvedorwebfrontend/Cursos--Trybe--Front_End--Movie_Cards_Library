import React from 'react';
// import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src="images/movie_1" alt="" />
        <h4>Movie Title 1</h4>
        <h5>Movie Subtitle 1</h5>
        <p>Movie Storyline 1</p>
        <Rating rating={ 4.5 } />
      </div>
    );
  }
}

export default MovieCard;
