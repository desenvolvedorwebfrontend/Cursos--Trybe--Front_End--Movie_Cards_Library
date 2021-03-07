import React from 'react';
import MovieCard from './MovieCard';
import Rating from './Rating';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <h1>Componente MovieList</h1>
        <MovieCard />
        <Rating />
      </div>
    );
  }
}

export default MovieList;
