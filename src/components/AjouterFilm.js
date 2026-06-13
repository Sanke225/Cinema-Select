import React, { useState } from 'react';

function AjouterFilm({ ajouterFilm }) {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [note, setNote] = useState('');
  const [afficherFormulaire, setAfficherFormulaire] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titre && description && posterURL && note) {
      const nouveauFilm = {
        titre: titre,
        description: description,
        posterURL: posterURL,
        note: parseFloat(note)
      };

      ajouterFilm(nouveauFilm);

      setTitre('');
      setDescription('');
      setPosterURL('');
      setNote('');
      setAfficherFormulaire(false);
    }
  };

  return (
    <div className="mb-6">
      {!afficherFormulaire ? (
        <button
          onClick={() => setAfficherFormulaire(true)}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
        >
          Ajouter un nouveau film
        </button>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ajouter un film</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Titre
              </label>
              <input
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                rows="3"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                URL du poster
              </label>
              <input
                type="url"
                value={posterURL}
                onChange={(e) => setPosterURL(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Note (0-5)
              </label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.5"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
              >
                Ajouter
              </button>
              <button
                type="button"
                onClick={() => setAfficherFormulaire(false)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AjouterFilm;
