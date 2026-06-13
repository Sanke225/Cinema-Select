import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      titre: "Inception",
      description: "Un voleur utilise la technologie du partage de rêves pour planter une idée dans l'esprit d'un PDG.",
      descriptionComplete: "Dom Cobb est un voleur expérimenté dans l'art périlleux de l'extraction, qui consiste à dérober les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
      note: 4.8
    },
    {
      id: 2,
      titre: "The Matrix",
      description: "Un programmeur découvre que la réalité telle qu'il la connaît est une simulation créée par des machines.",
      descriptionComplete: "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ?",
      posterURL: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
      trailerURL: "https://www.youtube.com/embed/vKQi3bBA1y8",
      note: 4.7
    },
    {
      id: 3,
      titre: "Interstellar",
      description: "Une équipe d'explorateurs voyage à travers un trou de ver dans l'espace pour assurer la survie de l'humanité.",
      descriptionComplete: "Dans un futur proche, face à une Terre exsangue, un groupe d'explorateurs utilise un vaisseau interstellaire pour franchir un trou de ver permettant de parcourir des distances jusque-là infranchissables. Leur but : trouver un nouveau foyer pour l'humanité.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
      trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E",
      note: 4.9
    },
    {
      id: 4,
      titre: "The Dark Knight",
      description: "Batman affronte le Joker, un criminel anarchiste qui veut plonger Gotham City dans le chaos.",
      descriptionComplete: "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du nouveau procureur Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace, mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY",
      note: 4.9
    },
    {
      id: 5,
      titre: "Pulp Fiction",
      description: "Les vies de deux tueurs à gages, un boxeur et un gangster s'entrecroisent dans cette histoire non linéaire.",
      descriptionComplete: "L'odyssée sanglante et burlesque de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s'entremêlent. Dans un restaurant, un couple de jeunes braqueurs, Pumpkin et Yolanda, discutent des risques que comporte leur activité. Deux truands, Jules Winnfield et son ami Vincent Vega, récupèrent une mallette au contenu mystérieux pour leur patron, Marsellus Wallace.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
      trailerURL: "https://www.youtube.com/embed/s7EdQ4FqbhY",
      note: 4.6
    },
    {
      id: 6,
      titre: "Forrest Gump",
      description: "L'histoire extraordinaire d'un homme simple qui traverse des moments clés de l'histoire américaine.",
      descriptionComplete: "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump. Assis sur un banc, en attendant le bus, Forrest Gump raconte l'histoire incroyable de sa vie marquée par son amour d'enfance Jenny.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
      trailerURL: "https://www.youtube.com/embed/bLvqoHBptjg",
      note: 4.5
    }
  ]);

  const ajouterFilm = (nouveauFilm) => {
    const filmAvecId = {
      ...nouveauFilm,
      id: films.length + 1
    };
    setFilms([...films, filmAvecId]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home films={films} ajouterFilm={ajouterFilm} />}
        />
        <Route
          path="/film/:id"
          element={<MovieDetail films={films} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
