import React from 'react';
import '../styles/MovieDetails.sass';
import { FaImdb } from "react-icons/fa";

export const MovieDetails = ({ selected, closeDetails }) => {
  return (
    <div className="details">
      <div className="details-wrapper">
        <div className="poster">
          <img src={selected.Poster} />
          <p className="rating"><FaImdb /> {selected.imdbRating}</p>
        </div>
        <div className="context">
          <h2>{ selected.Title }</h2>
          <h5>{selected.Year}</h5>
          <p> <span>Genre:</span> { selected.Genre }</p>
          <p>{ selected.Plot }</p>
        </div>
      </div>
      <button onClick={ closeDetails } >Close</button>
    </div>
  )
}