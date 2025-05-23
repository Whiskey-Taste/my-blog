// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="page-container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;