import React from 'react';
import '../styles/Footer.sass';
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
      <ul>
        <li><IoLogoFacebook /> </li>
        <li><IoLogoInstagram /> </li>
        <li><IoLogoYoutube /> </li>
      </ul>
      <p>MovieFinder</p>
      </div>
    </footer>
  )
}