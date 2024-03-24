import React from 'react';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Pokedéx Online</title>
      </Helmet>
      {children}
    </>
  );
};

export default Layout;