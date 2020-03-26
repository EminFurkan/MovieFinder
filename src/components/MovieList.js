import React from 'react';
import '../styles/MovieList.sass';
import { MovieCard } from './MovieCard';

export const MovieList = ({ results, openDetails }) => {
  return (
    <div className="movie-list">
      {results.map((result) => {
        return <MovieCard key={ result.imdbID } result={ result } openDetails={ openDetails } />
      })}
    </div>
  )
}