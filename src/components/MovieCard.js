import React from 'react';
import '../styles/MovieCard.sass';

export const MovieCard = ({ result }) => {
  return (
    <div className="movie-card">
      <h4>{ result.Title }</h4>
      <img src={ result.Poster } />
    </div>
  )
}