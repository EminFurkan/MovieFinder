import React, { useState } from 'react';
import '../styles/MainContent.sass';
import axios from 'axios';
import { Search } from './Search';
import { MovieList } from './MovieList';

export const MainContent = () => {
  const api = 'http://omdbapi.com/?apikey=359bdefa'
  const [search, setSearchState] = useState({
    input: '',
    results: [],
    selected: {},
    state: false
  });

  // Async - Await syntax requires @Babel/polyfill dependency which I didn't include at this time
  const handleRequest = e => {
    if (e.key === 'Enter'){
      axios(api + `&s=${search.input}`)
        .then(({ data }) => {
          const results = data.Search;
          const updatedState = {...search, results: results, state: true }
          setSearchState(updatedState);
        });   
    }
  }

  const handleSearch = e => {
    let input = e.target.value;
    const updatedState = {...search, input: input}
    setSearchState(updatedState);
  }

  return (
    <div className="content-wrapper">
      <Search handleSearch={ handleSearch } handleRequest={ handleRequest } searchState={ search.state } />
      { <MovieList results={ search.results } /> }
    </div>
  )
}