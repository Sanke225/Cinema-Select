import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetail({ films }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const film = films.find((f) => f.id === parseInt(id));

  if (!film) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Film non trouvé
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="mb-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 flex items-center gap-2"
        >
          ← Retour à l'accueil
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={film.posterURL}
                alt={film.titre}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                {film.titre}
              </h1>

              <div className="flex items-center mb-6">
                <span className="text-yellow-500 text-3xl">⭐</span>
                <span className="ml-2 text-2xl font-semibold text-gray-700">
                  {film.note}/5
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-3 text-gray-700">
                Description
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {film.descriptionComplete || film.description}
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Bande-annonce
              </h2>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={film.trailerURL}
                  title={`Bande-annonce de ${film.titre}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
