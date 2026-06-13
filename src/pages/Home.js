import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import Filtre from '../components/Filtre';
import AjouterFilm from '../components/AjouterFilm';

function Home({ films, ajouterFilm }) {
  const [titreFiltre, setTitreFiltre] = useState('');
  const [noteFiltre, setNoteFiltre] = useState('');

  const filmsFiltres = films.filter((film) => {
    const correspondTitre = film.titre.toLowerCase().includes(titreFiltre.toLowerCase());
    const correspondNote = noteFiltre === '' || film.note >= parseFloat(noteFiltre);
    return correspondTitre && correspondNote;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
          Ma Collection de Films
        </h1>

        <AjouterFilm ajouterFilm={ajouterFilm} />

        <Filtre
          titreFiltre={titreFiltre}
          setTitreFiltre={setTitreFiltre}
          noteFiltre={noteFiltre}
          setNoteFiltre={setNoteFiltre}
        />

        {filmsFiltres.length > 0 ? (
          <MovieList films={filmsFiltres} />
        ) : (
          <p className="text-center text-gray-600 text-xl">
            Aucun film trouvé avec ces critères.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
