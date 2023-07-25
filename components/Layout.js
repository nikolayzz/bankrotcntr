import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
