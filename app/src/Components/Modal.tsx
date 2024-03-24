const Modal = ({ isOpen, onClose, pokemon }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-4">{pokemon.name}</h2>
          <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-32 h-32 mb-4" />
          <p className="text-gray-700">Próxima Evolução:</p>
          <p className="font-bold">{pokemon.name}</p>
        </div>
      </div>
    );
  };
  
  export default Modal;