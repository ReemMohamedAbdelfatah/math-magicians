import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Links = () => (
  <div className="header">
    <h1>Math Magicians</h1>
    <section className="nav-link">
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <h2>|</h2>
      <NavLink to="/calculator" className="nav-item">
        Calculator
      </NavLink>
      <h2>|</h2>
      <NavLink to="/Quote" className="nav-item">
        Quote
      </NavLink>
    </section>
  </div>
);

export default Links;
