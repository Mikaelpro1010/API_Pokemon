import React from 'react';

const Modal = ({ isOpen, onClose, pokemon }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute w-11/12 md:w-1/2 lg:w-1/3">
        <div className="bg-gray-800 bg-opacity-50 fixed top-0 left-0 w-full h-full" onClick={onClose}></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
          <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-48 h-48 mb-4" />
            <p className="text-gray-700 mb-4">Próxima Evolução:</p>
            <p className="font-semibold">{pokemon.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

