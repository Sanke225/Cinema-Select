import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ films }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {films.map((film, index) => (
        <MovieCard key={index} film={film} />
      ))}
    </div>
  );
}

export default MovieList;
