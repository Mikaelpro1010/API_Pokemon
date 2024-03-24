import React from 'react';


const Filter = ({ searchName, setSearchName, searchType, setSearchType }) => {
    return(
        <div className="flex justify-end items-end p-4">
            <div className="card bg-gray rounded-lg shadow-md p-3 space-y-3">
                <div className="block mx-4">
                    <h2 className="text-lg font-bold mr-4">Filtrar Pokémons:</h2>
                </div>
                <div className="block grid grid-cols-3 gap-4">
                    <input
                        className="p-2 mx-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent col-span-2"
                        type="text"
                        placeholder="Nome"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                    />
                    <input
                        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        type="text"
                        placeholder="Tipo"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter