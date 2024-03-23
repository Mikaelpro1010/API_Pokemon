import React from 'react';


const Filter = ({ searchName, setSearchName, searchType, setSearchType }) => {
    return(
        <div className="flex justify-end p-3">
          <input
            className="mx-4"
            type="text"
            placeholder="Nome"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tipo"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />
        </div>
    )
}

export default Filter