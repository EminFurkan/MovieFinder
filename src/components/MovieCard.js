import React from 'react';
import '../styles/MovieCard.sass';

export const MovieCard = ({ result, openDetails }) => {
  return (
    <div className="movie-card" onClick={() => openDetails(result.imdbID)} >
      <h4>{ result.Title }</h4>
      <img src={ result.Poster } />
    </div>
  )
}