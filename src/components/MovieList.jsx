import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import Rating from './Rating';
// import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const cartao = movies.map((ele, index) => <MovieCard key={ index } movie={ ele } />);

    console.log(movies);
    return (
      <main>
        <h1>Componente MovieList</h1>
        {cartao}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

MovieList.defaultProps = {
  movies: {
    title: 'Movie Title 1',
    subtitle: 'subtitle',
    storyline: 'storyline',
    imagePath: 'imagePath',
    rating: 5,
  },
};

export default MovieList;
