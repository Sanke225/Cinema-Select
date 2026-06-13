import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filtre from './components/Filtre';
import AjouterFilm from './components/AjouterFilm';

function App() {
  const [films, setFilms] = useState([
    {
      titre: "Inception",
      description: "Un voleur utilise la technologie du partage de rêves pour planter une idée dans l'esprit d'un PDG.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      note: 4.8
    },
    {
      titre: "The Matrix",
      description: "Un programmeur découvre que la réalité telle qu'il la connaît est une simulation créée par des machines.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
      note: 4.7
    },
    {
      titre: "Interstellar",
      description: "Une équipe d'explorateurs voyage à travers un trou de ver dans l'espace pour assurer la survie de l'humanité.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
      note: 4.9
    },
    {
      titre: "The Dark Knight",
      description: "Batman affronte le Joker, un criminel anarchiste qui veut plonger Gotham City dans le chaos.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      note: 4.9
    },
    {
      titre: "Pulp Fiction",
      description: "Les vies de deux tueurs à gages, un boxeur et un gangster s'entrecroisent dans cette histoire non linéaire.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
      note: 4.6
    },
    {
      titre: "Forrest Gump",
      description: "L'histoire extraordinaire d'un homme simple qui traverse des moments clés de l'histoire américaine.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
      note: 4.5
    }
  ]);

  const [titreFiltre, setTitreFiltre] = useState('');
  const [noteFiltre, setNoteFiltre] = useState('');

  const ajouterFilm = (nouveauFilm) => {
    setFilms([...films, nouveauFilm]);
  };

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

export default App;
