import React from 'react';

function Filtre({ titreFiltre, setTitreFiltre, noteFiltre, setNoteFiltre }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Filtrer les films</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Rechercher par titre
          </label>
          <input
            type="text"
            placeholder="Entrez le titre du film..."
            value={titreFiltre}
            onChange={(e) => setTitreFiltre(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Note minimale
          </label>
          <input
            type="number"
            min="0"
            max="5"
            step="0.5"
            placeholder="Note (0-5)"
            value={noteFiltre}
            onChange={(e) => setNoteFiltre(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Filtre;
