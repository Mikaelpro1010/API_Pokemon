import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe Routes também
import Layout from './Components/Layout';

import Pokedex from './pages/Pokedex';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import TeamPokemon from './pages/TeamPokemon';

function AppRouter() {
  const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/" element={<Login setToken={setToken} />} />
          {token && <Route path="/pokedex" element={<Pokedex token={token} />} />}
          <Route path="/team-pokemon" element={<TeamPokemon />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRouter;
