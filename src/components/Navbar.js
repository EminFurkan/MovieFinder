import React from 'react';
import { GiPopcorn } from "react-icons/gi";
import { MdLocalMovies } from "react-icons/md";
import '../styles/Navbar.sass';

export const Navbar = () => {
  const themeHandler = () => {
    document.body.classList.toggle('dark');
  }

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <MdLocalMovies />
          <h2>MovieFinder</h2>
        </div>
        <ul>
          <li onClick={themeHandler} ><GiPopcorn /></li>
        </ul>
      </div>
    </nav>
  )
}