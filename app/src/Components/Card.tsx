import React from 'react';

const Card: React.FC<{ pokemon: any; onClick: () => void }> = ({ pokemon, onClick }) => {
  const { id, name, image, type } = pokemon;

  return (
    <div className="card bg-gray rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 cursor-pointer" onClick={onClick}>
      <span className="card--id text-lg font-bold">#{id}</span>
      <div className="mt-4 flex justify-center">
        <img className="card--image mt-4" src={image} alt={name} />
      </div>
      <h1 className="card--name text-2xl font-bold text-gray-800 mt-4">{name}</h1>
      <span className="card--details text-gray-500">{type}</span>
    </div>
  );
};

export default Card;
