import React from 'react';

function MovieCard({ film }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={film.posterURL}
        alt={film.titre}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{film.titre}</h3>
        <p className="text-gray-600 mb-3">{film.description}</p>
        <div className="flex items-center">
          <span className="text-yellow-500 text-2xl">⭐</span>
          <span className="ml-2 text-lg font-semibold">{film.note}/5</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
